import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends Component {
  state = {
    persons: [
      { name: "Andy", age: 36 },
      { name: "Harrison", age: 1 },
      { name: "Gizmo", age: 9 }
    ],
    otherState: 'some other value',
    username: 'garciaac01'
  };

  switchNameHandler = (newName) => {
    // DON'T DO THIS: this.state.persons[0].name = "Andrew";
    this.setState({
      persons: [
        { name: newName, age: 36 },
        { name: "Harrison", age: 1 },
        { name: "Gizzy", age: 9 }
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Andrew", age: 36 },
        { name: event.target.value, age: 1 },
        { name: "Gizzy", age: 9 }
      ]
    });
  };

  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working.</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Andrew")}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person click={this.switchNameHandler.bind(this, 'Andy!')}
          name={this.state.persons[1].name} age={this.state.persons[1].age}
          changed={this.nameChangedHandler} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <UserInput
          username={this.state.username}
          changed={this.usernameChangedHandler} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
    // return React.createElement("div", { className: "App" }, React.createElement("h1", null, "Does this work now???"));
  }
}

export default App;
