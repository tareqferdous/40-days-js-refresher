// Operator - Symbols + - * /
// Operands - x+y, x and y are the operands.
// Expression - x = 2 / 3+4

//Arithmetic Operators
let a = 10;
let b = 4;

console.log(a + b); // 30
console.log(a - b); // -10
console.log(b - a); // 10
console.log(a * b); // 200
console.log(a / b); // 0.5

console.log(a ** b); // 10000000000000000000000000000 (exponential operator)
console.log(a % b); // 2 (reminder operator)

// Pre increment and Post increment

const count = 10;
console.log(count++); // 10 (post increment)
console.log(count); // 11 (after post increment, count is now 11)
console.log(++count); // 12 (pre increment, count is now 12)

// here, ++ = count + 1
// but if ++ seats before the variable, it will increment first and then return the value.
// and if it seats after the variable, it will return the value first and then increment it.

// *** Assignment Operator ***
let x = 10;
x += 5; // x = x + 5 (15)
x -= 2; // x = x - 2 (13)
x *= 2; // x = x * 2 (26)
x /= 13; // x = x / 13 (2)

// *** Comparison Operators ***
console.log(0 == false); // true (loose equality)
console.log(3 == "3"); // true (loose equality, type coercion)

console.log(null === null); // true (strict equality, no type coercion)
console.log(3 === "3"); // false (strict equality, no type coercion)

// Note : == only checks for value equality, while === checks for both value and type equality.

let obj1 = { name: "John" };
let obj2 = { name: "John" };

console.log(obj1 === obj2); // false (different references)
console.log(obj1 !== obj2); // true (different references)

4 > 3; // true
4 < 3; // false
4 >= 3; // true
4 <= 3; // false

// *** Logical Operators ***

// && || ?? !

// op1 && op2

// if op1 is true, then op2 will be returned, otherwise op1 will be returned.
console.log(true && false); // false
// if op1 is false, then op2 will be returned, otherwise op1 will be returned.
console.log(false && true); // false
// if op1 and op2 both true, then op2 will be returned.
console.log(true && true); // true
// if op1 and op2 both false, then op2 will be returned.
console.log(false && false); // false

console.log("Turjo" && "Shawon"); // "Shawon" (both are truthy, so the last truthy value is returned)

console.log(false || false); // false (both are false)
console.log(true || false); // true (first is true, so it is returned)
console.log(true || true); // true (both are true, so the last truthy value is returned)
console.log(false || true); // true (second is true, so it is returned)
console.log("Turjo" || "Shawon"); // "Turjo" (first is truthy, so it is returned)

console.log(!false); // true (negation of false is true)

let a1 = null ?? 1; // 1 (nullish coalescing operator, returns the right operand if the left is null or undefined)
let a2 = 0 ?? 1; // 0 (nullish coalescing operator, returns the left operand if it is not null or undefined)
let a3 = undefined ?? 1; // 1 (nullish coalescing operator, returns the right operand if the left is null or undefined)
let a4 = false ?? "World"; // "false" (returns the left operand if it is not null or undefined)
