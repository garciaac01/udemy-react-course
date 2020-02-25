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
    otherState: 'some other value',
    showPersons: true
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


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
    console.log(this.state.showPersons);
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
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {this.state.showPersons ?
          <div>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person click={this.switchNameHandler.bind(this, 'Andy!')}
              name={this.state.persons[1].name} age={this.state.persons[1].age}
              changed={this.nameChangedHandler} />
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
          </div> : null
        }
      </div>
    );
    // return React.createElement("div", { className: "App" }, React.createElement("h1", null, "Does this work now???"));
  }
}

export default App;
