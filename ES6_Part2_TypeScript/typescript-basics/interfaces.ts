// Define an interface Person with properties name (string) and age (number).
interface Person {
    name: string;
    age: number;
}

// Create a function greet that takes a Person object as a parameter and prints a greeting message.
function greet(person: Person): void {
    console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}

// Create a Person object and pass it to the greet function
const alex: Person = {
    name: "Alex",
    age: 28
};
greet(alex);