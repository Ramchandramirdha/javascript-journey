// Problem 1: Check even or odd
let num = 7;

if(num % 2 === 0){
  console.log("Even");
} else {
  console.log("Odd");
}

// Problem 2: Find greater number
let x = 10;
let y = 20;

if(x > y){
  console.log("x is greater");
} else {
  console.log("y is greater");
}

// Problem 3: Positive, Negative or Zero
let number = -5;

if(number > 0){
  console.log("Positive");
} else if(number < 0){
  console.log("Negative");
} else {
  console.log("Zero");
}

// Problem 4: Check eligibility for voting
let age = 17;

let message = age >= 18 ? "Eligible to vote" : "Not eligible";
console.log(message);

// Problem 5: Grade system
let marks = 75;

if(marks >= 90){
  console.log("Grade A");
} else if(marks >= 70){
  console.log("Grade B");
} else if(marks >= 50){
  console.log("Grade C");
} else {
  console.log("Fail");
}
