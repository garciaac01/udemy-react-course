import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    persons: [
      { id: 'jkdls', name: "Andy", age: 36 },
      { id: 'iewoa', name: "Harrison", age: 1 },
      { id: 'iwaos', name: "Gizmo", age: 9 }
    ],
    otherState: 'some other value',
    showPersons: false,
    inputValue: ""
  };

  deletePersonHandler = (personIndex) => {
    // need to deep copy the array so we don't alter the original
    // const persons = this.state.persons.slice(); // copies the array
    const persons = [...this.state.persons]; // es6 way to copy the array
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  deleteLetterHandler = (letterIndex) => {
    const letters = [...this.state.inputValue];
    letters.splice(letterIndex, 1);
    this.setState({ inputValue: letters.join('') });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // copy the person instead of using the reference to the original
    const person = {
      ...this.state.persons[personIndex]
    };

    // old syntax to copy the object: const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
    console.log(this.state.showPersons);
  };

  inputChangeHandler = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    // render runs every time React refreshes the page, so we can run some code in here.
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        < div >
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div >
      );
    }

    const charComponents = (
      <div>
        {[...this.state.inputValue].map((letter, index) => {
          return <CharComponent
            letter={letter}
            click={() => this.deleteLetterHandler(index)}
            key={index}
          />
        })}
      </div>
    );

    return (
      <div className="App" >
        <h1>Hi, I'm a React App</h1>
        <p>This is really working.</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
        <input type="text" value={this.state.inputValue} onChange={this.inputChangeHandler}></input>
        <p>{this.state.inputValue.length}</p>
        <ValidationComponent textLength={this.state.inputValue.length} />
        {charComponents}
      </div>
    );
    // return React.createElement("div", { className: "App" }, React.createElement("h1", null, "Does this work now???"));
  }
}

export default App;
