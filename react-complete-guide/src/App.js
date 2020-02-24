import React, { useState } from 'react';
import './App.css';
import Person from "./Person/Person";

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Andy", age: 36 },
      { name: "Harrison", age: 1 },
      { name: "Gizmo", age: 9 }
    ],
  });

  const [otherState, setOtherState] = useState("some other value");

  console.log(personsState, otherState);

  // in Hooks, does not merge new state with old state;
  // completely overwrites state instead
  const switchNameHandler = () => {
    // DON'T DO THIS: this.state.persons[0].name = "Andrew";
    setPersonsState({
      persons: [
        { name: "Andrew", age: 36 },
        { name: "Harrison", age: 1 },
        { name: "Gizzy", age: 9 }
      ],
      otherState: personsState.otherState
    });
  };

  //test
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working.</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
  // return React.createElement("div", { className: "App" }, React.createElement("h1", null, "Does this work now???"));
}

export default app;

