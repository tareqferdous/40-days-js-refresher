// define a function

function Introduction() {
  console.log("hello tareq");
}

// function with parameter

function greet(name) {
  console.log(`Hello, ${name}!`);
}

// calling a function

Introduction();
greet("tareq");

// parameters and arguments

// 'name' and 'age' are parameters
function introduce(name, age) {
  console.log(`I am ${name} and I am ${age} years old.`);
}

// 'Alice' and 25 are arguments
introduce("Alice", 25);

// default parameter

function Intro(name = "Guest") {
  console.log(`Hello ${name}`);
}

console.log(Intro()); // hello guest
console.log(Intro("tareq")); // hello tareq

// rest parameter

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2)); // Output: 3
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

//Nested function

function Outer() {
  console.log("I am outer function");

  function Inner() {
    console.log("I am inner function");
  }

  Inner();
}

Outer();
// Output:
// I am the outer function
// I am the inner function

// callback function

setTimeout(() => {
  console.log("Print this code in every 3 second");
}, 10000);

function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

function Greeting(fullName) {
  console.log(`Hello, ${fullName("Tareq", "Ferdous")}`);
}

Greeting()