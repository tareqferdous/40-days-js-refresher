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
let lastMonthBonus = (20 / 100) * monthlySalary;
const lastMonthSalary = monthlySalary + lastMonthBonus;

const annualSalary = lastMonthSalary + monthlySalary * 11;
console.log(
  `The annual salary is ${annualSalary} and the last month salary is ${lastMonthSalary}`
);

// TODO Question 4:

const color = "Red";
console.log(color === "Red" ? "STOP" : "GO");
