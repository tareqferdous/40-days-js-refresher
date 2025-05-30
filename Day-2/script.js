// =========== Task 1 ==================

const fullName = "Tareq Ferdous";
let age = 28;
let isStudent = false;
const favoriteLanguage = "JavaScript";

// =========== Task 2 ==================
console.log(fullName, age, isStudent, favoriteLanguage);

// =========== Task 3 ==================
// fullName = "Tareq Ferdous Turjo";
// age = 27;

// =========== Task 4 ==================

const learner = {
  fullName,
  age,
  isStudent,
  favoriteLanguage,
};

console.log("learner", learner);
console.log(learner.age);

const learners = ["Tareq Ferdous", "John Doe", "Jane Smith"];
console.log(learners);
// learners = ["Alice", "Bob", "Charlie"]; //Uncaught TypeError: Assignment to constant variable.

learners.push("Alice", "Bob", "Charlie");

console.log(learners);
