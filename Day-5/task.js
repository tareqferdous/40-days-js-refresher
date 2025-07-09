// Generate a Pyramid Pattern using Nested for Loop
for (let i = 1; i <= 5; i++) {
  let star = "";
  for (let j = 1; j <= i; j++) {
    star += "*";
  }

  console.log(star);
}

// reverse pyramid

for (let i = 5; i >= 1; i--) {
  let star = "";
  for (let j = 1; j <= i; j++) {
    star += "*";
  }

  console.log(star);
}
// TODO Question 2: Create Multiplication table (using for loop)

let number = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${number} X ${i} = ${number * i}`);
}

// TODO Question 3: Create a program to find the sum of even numbers from  1 to 500

let evenSum = 0;

for (let i = 1; i <= 500; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  }
}
console.log(evenSum);

// Skipping Multiples of 3

for (let i = 1; i <= 20; i++) {
  if (i === 3) continue;
  console.log(i);
}
