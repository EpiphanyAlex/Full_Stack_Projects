// 1. Let, Const and Var
// Rewrite the following code to use let and const instead of var

// var name = "Alice";
// if (true) {
//     var name = "Bob";
//     console.log(name); // Output: Bob
// }
// console.log(name); // Output: Bob

// Var has function scope and hoisting
// let is more appropriate than const
let name = "Alice"
if (true) {
    name = "Bob"
    console.log(name); // Output: Bob
}
console.log(name); // Output: Bob

// when to use const:
// a. Values that won't be reassigned: prevents accidental reassignment and clearly communicates intent
// b. The reference to the object/array does not change, only the contents
// when to use let:
// a. Variables need to be reassigned during execution: provides block scoping while allowing reassignment
// b. Creates a new binding for each iteration of a loop: avoid the classic "loop variable problem" that var has


// 2. Arrow functions
// Convert the following function to an arrow function

// function add(a, b) {
//     return a + b;
// }
const add = (a, b) => a + b;

// Regular functions have dynamic 'this' binding. 
const obj = {
    name: "Alice",
    regularMethod: function() {
        console.log(this.name); // `this` refers to `obj`
    }
};
obj.regularMethod(); // Output: "Alice"
const extractedMethod = obj.regularMethod;
extractedMethod(); // Output: undefined ('this' refers to global object/undefined in strict mode)

// Arrow functions have lexical 'this' binding, meaning 'this' is determined by where function is defined.
const obj2 = {
    name: "Bob",
    arrowMethod: () => {
        console.log(this.name); // `this` refers to the enclosing scope
    }
};
obj2.arrowMethod(); // Output: undefined


// 3. Template literals
// Rewrite the following string concatenation code using template literals, add a new line to the string.

// let greeting = "Hello, " + name + "! Welcome to the course."
let greeting = `Hello, ${name}! Welcome to the course. \nThank you for joining!`;
console.log(greeting);


// 4. Destructuring
// Use destructuring to extract the name and age attributes from the person object.
// Then write a function to deconstruct the object in the argument list.
const person = {
    userName: "Alice",
    age: 25,
    city: "Melbourne"
};

const { userName, age } = person;
console.log(userName); // Output: Alice
console.log(age); // Output: 25

function getPersonInfo({ userName, age }) {
    return `${userName} is ${age} years old.`;
}
console.log(getPersonInfo(person)); // Output: Alice is 25 years old.


// 5. Default parameters
// Write a function for row area of the computer. If no height is provided,
// assume it is a square. Use the default parameter to set the default height.
// function calculateArea(width, height) {
//     return width * height;
// }
function calculateArea(width, height = width) {
    return width * height;
}
const calculateArea1 = (width, height = width) => width * height;

console.log(calculateArea(5)); // Output: 25 (square)
console.log(calculateArea1(5)); // Output: 25 (square)
console.log(calculateArea(5, 10)); // Output: 50 (rectangle)


// 6. Rest/Spread operator
// Use the Rest operator to create a function that can add any number of arguments
// function sum(a, b) {
//    return a + b; 
// }
function sum(...args) {  // collects multiple arguments into an array
    // reduce(callback, initialValue)
    // callback: (accumulator, currentValue) => { ... }
    // initialValue: the initial value for the accumulator 
    return args.reduce((total, current) => total + current, 0);
}

// Use the Spread operator to merge the two arrays
let arr1 = [1, 2];
let arr2 = [3, 4];
let mergedArray = [...arr1, ...arr2];  // Expands an array into individual elements
console.log(mergedArray);