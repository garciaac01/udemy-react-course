import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Andy", age: 36 },
      { name: "Harrison", age: 1 },
      { name: "Gizmo", age: 9 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = () => {
    // DON'T DO THIS: this.state.persons[0].name = "Andrew";
    this.setState({
      persons: [
        { name: "Andrew", age: 36 },
        { name: "Harrison", age: 1 },
        { name: "Gizzy", age: 9 }
      ]
    });
  };
  //test
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working.</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement("div", { className: "App" }, React.createElement("h1", null, "Does this work now???"));
  }
}

export default App;
