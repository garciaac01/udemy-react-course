import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    // Using an empty array as the second parameter
    // would cause this to only run the first time the page
    // is loaded.
    // This is essentially the equivalent of "componentDidMount"
    // for class based components.
    // useEffect(() => {
    //     console.log('[Cockpit.js] useEffect');
    //     // Can send http request in here, etc...
    //     setTimeout(() => {
    //         alert('Saved data to cloud.');
    //     }, 1000);
    // }, []);

    // This example of useEffect would only run when
    // props.persons is updated.
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Can send http request in here, etc...
        setTimeout(() => {
            alert('Saved data to cloud.');
        }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []); // runs when component gets destroyed (because of the empty array second param)

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');

        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        }
    }); // runs on every update because of no second argument

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red); // classes = ['red]
    }

    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red, 'bold]
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working.</p>
            <button className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default React.memo(cockpit);