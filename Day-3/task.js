//  todo:   Take a number and find if the number is an odd or even number.

let a = 20;
console.log(a % 2 === 0 ? "The number is even" : "The number is odd");

// todo: 2
let age = 28;
console.log(
  age >= 18
    ? "elligible for a driving license"
    : "not elligible for a driving license"
);

// task 3

let monthlySalary = 12300;
const annualSalary = monthlySalary * 12;
const bonus = (20 / 100) * annualSalary;
const totalAnnualSalary = annualSalary + bonus;

console.log(`The annual salary is ${totalAnnualSalary}`);

// TODO Question 4:

const color = "Red";
console.log(color === "Red" ? "STOP" : "GO");

// TODO Question 5:

const unitsPerDay = 10;
const unitCost = 150;

const monthlyBill = unitsPerDay * 30 * unitCost;
const annualBill = monthlyBill * 12;
const discount = (20 / 100) * annualBill;
const annualBillWithDiscount = annualBill - bonus;
console.log(annualBillWithDiscount);

// TODO Question 6:

const year = 2025;
console.log(year % 4 === 0 ? "Leap Year" : "Not a leap Year");

// TODO Question 7:
const p = 10;
const q = 20;
const r = 30;
console.log(
  p > q && p > r
    ? "P is greater"
    : q > p && q > r
    ? "Q is greater"
    : "R is greater"
);

// TODO Question 8:
const count = 5;
/** convert it into binary"
 *  5/2 = 2 remainer(1)
 * 2/2 = 1 remainder(0)
 * 1/2 = 0 remaineder (1)
 *  the binary of 5 = 101
 *
 * 1*(2**0)+0*(2**1)+ 1*(2**2)
 * **/
console.log(count << 1);
