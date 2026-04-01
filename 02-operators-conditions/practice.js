// Practice - Operators & Conditions

let a = 10;
let b = 5;

// Arithmetic
console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0

// Comparison
console.log(a > b);  // true
console.log(a < b);  // false
console.log(a == "10");  // true (loose)
console.log(a === "10"); // false (strict)

// Logical
let isAdult = true;
let hasID = true;

console.log(isAdult && hasID); // true
console.log(isAdult || false); // true
console.log(!isAdult); // false

// if-else
let age = 20;

if(age >= 18){
  console.log("Adult");
} else {
  console.log("Minor");
}

// Ternary
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);
