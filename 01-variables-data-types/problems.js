// Problem 1: Check data type
let value = "Hello";
console.log(typeof value);

// Problem 2: Declare variables of all types
let name = "Ram";
let age = 22;
let isStudent = true;
let empty = null;
let notDefined;

console.log(name, age, isStudent, empty, notDefined);

// Problem 3: Convert string to number
let num = "100";
let converted = Number(num);

console.log(converted); // 100
console.log(typeof converted); // number

// Problem 4: Boolean check
let isLoggedIn = false;

if (isLoggedIn) {
  console.log("User logged in");
} else {
  console.log("User not logged in");
}

// Problem 5: typeof null (important concept)
console.log(typeof null); // object (JavaScript bug)
