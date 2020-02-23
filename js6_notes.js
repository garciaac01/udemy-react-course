/*
let and const
- use let instead of var
- use const for values that won't change
*/

let myName = "Max";
console.log(myName);

myName = "Manu";
console.log(myName);

/*
arrow functions

old:
function myFunc() {

}

new:
const myFnc = () => {

}
*/
function printMyName(name) {
    console.log(name)
}

printMyName("Andy");

const printMyName2 = (name) => { // can skip parenthesis around param if there's exactly one
    console.log(name);
}

printMyName2("Andy");

const multiply = number => number * 2; // no curly braces or return keyword if we are simply returning something

/*
classes
*/
class Human {
    constructor() {
        this.gender = "male";
    }

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() {
        super();
        this.name = "Andy";
    }

    printMyName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();

/*
es7 version of classes
*/
class Human {
    gender = "male";

    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
    name = "Andy";

    printMyName = () => {
        console.log(this.name);
    }
}

/*
spread and rest
spread - split up array elements or object properties
rest - used to merge a list of function arguments into an array
*/
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

const newPerson = {
    ...person,
    age: 28
}

console.log(newPerson);

const filter = (...args) => {
    return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3))


/*
destructuring
- Extracts array elements or object properties and store them in variables
*/
const numbers = [1, 2, 3];
[num1, num3] = numbers;
console.log(num1, num3); // 1 3

{ name } = { name: "Andy", age: 100 };
console.log(name); //Andy - targets vars by name


/*
reference and primitive types
(not necessarily es6)
*/
const number = 1;
const num2 = number; // copies by value

const person = {
    name: "Andy"
};

const secondPerson = person; //copies by reference--references same object as person
const thirdPerson = {
    ...person
}; // deep copies

/*
array functions (not es6)
*/
const numbers = [1, 2, 3];

const doubleArray = numbers.map((num) => {
    return num * 2;
});

console.log(numbers);
console.log(doubleArray);
//test