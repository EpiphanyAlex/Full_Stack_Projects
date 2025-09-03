// Write a function in index.ts that takes two numbers as parameters and returns their sum
// Function with type annotations for parameters and return value
function add(a: number, b: number): number {
    return a + b;
}

const result = add(1, 2);
console.log(`The sum is: ${result}`);

// Compile the TypeScript file to JavaScript using the tsc command and run the resulting JavaScript file
// tsc index.ts
// node index.js