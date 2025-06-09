console.log("Day 04");

// if else statements

let catchingBus = false;

if (catchingBus) {
  console.log("I will Reach home on time");
} else {
  console.log("I will be late to reach");
}

catchingBus
  ? console.log("I will Reach home on time")
  : console.log("I will be late to reach");

let age = 8;

if (age >= 18) {
  console.log("You are Eligible to Vote");
} else {
  console.log("You are NOT Eligible to Vote");
}

// Let's build a grading system
// if score is >= 90, Grade A
// if score if >= 80, Grade B
// If score if >= 70, Grade C
// Fail

let score = 76;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80) {
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade C");
} else if (score < 70) {
  console.log("Fail");
}

let x = 0;

if (x === 0) {
  console.log(0);
} else if (x >= 0) {
  console.log("Greater than 0");
} else if (x <= 0) {
  console.log("Less than 0");
}

const condition = false;
const innerCondition = false;

if (condition) {
  console.log("Outer if");
  if (innerCondition) {
    console.log("Inner if");
  } else {
    console.log("Inner else");
  }
} else {
  console.log("Outer else");
}

// Switch case statements

let marks = 78;
let grade;

switch (true) {
  case marks >= 80:
    grade = "A+";
    break;
  case marks >= 70:
    grade = "A";
    break;
  case marks >= 60:
    grade = "A-";
    break;
  case marks >= 50:
    grade = "B";
    break;
  case marks >= 40:
    grade = "C";
    break;
  case marks < 33:
    grade = "F";
    break;

  default:
    break;
}

console.log(grade);

let position = 10;

switch (position) {
  case 1:
    console.log("Print 1");
    break;
  case 2:
    console.log("Print 2");
    break;
  case 3:
    console.log("Print 3");
    break;
  case 4:
    console.log("Print 4");
    break;

  default:
    console.log("Nothing is matched");
}

let name = "Google";

switch (name) {
  case "tapaScript":
    console.log("Teaching 40 days of Js");
    break;
  case "google":
    console.log("Giving answer to all searches");
    break;
  default:
    console.log("You are neither google, nor tapaScript!");
}

// multiple cases

let city = "Chicago";

switch (city) {
  case "Dhaka":
  case "Chittagong":
  case "Sylhet":
  case "Rajshahi":
    console.log("You are from Bangladesh");
    break;
  case "New York":
  case "Los Angeles":
  case "Chicago":
    console.log("You are from USA");
    break;
}
