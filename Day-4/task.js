// TODO Question 1:
/**
 *  Output :- It's a normal day.
 * this is because of the case sensitive as the variable is having "Monday " in which the "M" is capital while in case "monday" has small "m".
 **/

// TODO Question 2:

let amount = 1000;

if (amount % 100 === 0) {
  console.log("Withdrawal successful");
} else {
  console.log("Invalid amount");
}

// TODO Question 3: Calculator using switch case

let a = 20;
let b = 5;

let operator = "-"; // Change this to "-", "*", "/", etc. to test other operations

switch (operator) {
  case "+":
    console.log(`Addition: ${a + b}`);
    break;
  case "-":
    console.log(`Subtraction: ${a - b}`);
    break;
  case "*":
    console.log(`Multiplication: ${a * b}`);
    break;
  case "/":
    if (b !== 0) {
      console.log(`Division: ${a / b}`);
    } else {
      console.log("Cannot divide by zero");
    }
    break;

  default:
    console.log("Invalid operator");
    break;
}

// TODO Question 4:  Pay for your movie ticket

let age = 16;

if (age < 18) {
  console.log(`Your ticket price is $3`);
} else if (age >= 18 && age < 60) {
  console.log(`Your ticket price is $10`);
} else if (age > 60) {
  console.log(`Your ticket price is $8`);
}

// TODO Question 5: Horoscope Sign Checker:

let month = "april";

switch (month) {
  case "january": {
    console.log("Capricorn ♑ ");
    break;
  }
  case "feburary": {
    console.log("Aquarius ♒ ");
    break;
  }
  case "march": {
    console.log("Pisces ♓ ");
    break;
  }
  case "april": {
    console.log("Aries ♈  ");
    break;
  }
  case "may": {
    console.log("Taurus ♉ ");
    break;
  }
  case "june": {
    console.log("Cancer ♋  ");
    break;
  }
  case "july": {
    console.log("Gemini ♊ ");
    break;
  }
  case "august": {
    console.log("Leo ♌ ");
    break;
  }
  case "september": {
    console.log("Virgo ♍ ");
    break;
  }
  case "october": {
    console.log("Libra ♎");
    break;
  }
  case "november": {
    console.log("Scorpio ♏  ");
    break;
  }
  case "december": {
    console.log("Sagittarius ♐ ");
    break;
  }
  default:
    console.log("Invalid Entry");
}

// // TODO     Question 6: Which Triangle?

let p = 5;
let q = 5;
let r = 5;

if (p === q && q === r) {
  console.log("Equilateral Triangle");
} else if (p === q || q === r) {
  console.log("Isosceles Triangle");
} else {
  console.log("Scalene Triangle");
}
