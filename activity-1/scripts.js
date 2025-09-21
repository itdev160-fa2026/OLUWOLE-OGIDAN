// Activity 1: Hello World and Variable Fun
// This file demonstrates basic JavaScript concepts

// Part 1: Hello World in console
console.log("Hello, World!");

// Part 2: Display Hello World on the webpage
document.getElementById("output").innerHTML = "<h2>Hello, World!</h2>";

// Part 3: Variable Declarations
// String variable
let studentName = "John Doe";

// Number variable
const age = 20;

// Boolean variable
let isStudent = true;

// Null variable
let emptyValue = null;

// Undefined variable
let notAssigned;

// Part 4: Console logging variables and their types
console.log("=== Variable Values ===");
console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Empty Value:", emptyValue);
console.log("Not Assigned:", notAssigned);

console.log("=== Variable Types ===");
console.log("typeof studentName:", typeof studentName);
console.log("typeof age:", typeof age);
console.log("typeof isStudent:", typeof isStudent);
console.log("typeof emptyValue:", typeof emptyValue);
console.log("typeof notAssigned:", typeof notAssigned);

// Part 5: Demonstrating variable reassignment
console.log("=== Variable Reassignment ===");
console.log("Original studentName:", studentName);
studentName = "Jane Smith";
console.log("Updated studentName:", studentName);

// Note: const variables cannot be reassigned
// age = 21; // This would cause an error!
