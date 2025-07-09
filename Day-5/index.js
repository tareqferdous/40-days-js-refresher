// Basic Counter

for (let i = 1; i <= 5; i++) {
  console.log(`count ${i}`);
}

// Example 2: Sum of numbers
let sum = 0;
for (let i = 0; i <= 20; i++) {
  sum = sum + i;
}
console.log(`Sum of first 20 numbers is: ${sum}`);

// Example 3: Iterating through an array

const summerFruits = [
  "Mango",
  "Watermelon",
  "Pineapple",
  "Peach",
  "Plum",
  "Lychee",
];

for (let fruit = 0; fruit < summerFruits.length; fruit++) {
  console.log(`Fruit ${fruit + 1}: ${summerFruits[fruit]}`);
}

// Nested Loop Example: Multiplication Table

// for (let i = 1; i <= 3; i++) {
//   for (j = 1; j <= 3; j++) {
//     console.log(`i: ${i}, j: ${j}`);
//   }
// }

//Break Statement Example: Skipping Even Numbers
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(`Odd number: ${i}`);
}

// Break Statement Example: Stopping at a Condition
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // Stop the loop when i is 5
  }
  console.log(`Number: ${i}`);
}
