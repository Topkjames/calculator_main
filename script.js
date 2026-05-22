/*
Your calculator is going to contain functions for all of the basic math operators you typically find on calculators, so start by creating functions for the following items and testing them in your browser’s console:
add
subtract
multiply
divide
*/

const add = function (a, b) {
  return a + b;
};
console.log(add(12, 3));

const subtract = function (a, b) {
  return a - b;
};
console.log(subtract(22, 2));

const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(10, 10));

const divide = function (a, b) {
  return a / b;
};
console.log(divide(100, 5));

/* A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. Create three variables, one for each part of the operation. You’ll use these variables to update your display later. */

let number;
let operator;
let anotherNumber;

/* Create a new function operate that takes an operator and two numbers and then calls one of the above functions on the numbers. */

const operate = function (num1, operator, num2) {
  if (operator == "+") {
    return add(num1, num2);
  } else if (operator == "-") {
    return subtract(num1, num2);
  } else if (operator == "*") {
    return multiply(num1, num2);
  } else if (operator == "/") {
    return divide(num1, num2);
  } else {
    return "OOPS";
  }
};

//Just a test!
console.log(operate(1, "+", 9));
