import React, { Component } from 'react';
import classes from './App.css';
import Person from "./Person/Person";
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


class App extends Component {
  state = {
    persons: [
      { id: 'jkdls', name: "Andy", age: 36 },
      { id: 'iewoa', name: "Harrison", age: 1 },
      { id: 'iwaos', name: "Gizmo", age: 9 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    // need to deep copy the array so we don't alter the original
    // const persons = this.state.persons.slice(); // copies the array
    const persons = [...this.state.persons]; // es6 way to copy the array
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
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

  render() {
    // render runs every time React refreshes the page, so we can run some code in here.
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        < div >
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            </ErrorBoundary>
          })}
        </div >
      );

      btnClass = classes.Red;
    }

    const assignedClasses = []
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red]
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red, 'bold]
    }

    return (
      <div className={classes.App} >
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working.</p>
        <button className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement("div", { className: "App" }, React.createElement("h1", null, "Does this work now???"));
  }
}

export default App;
