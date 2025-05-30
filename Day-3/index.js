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
