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
  if (b === 0) {
    return "Nope, can't divide by zero!";
  }
  return a / b;
};
console.log(divide(100, 5));

/* A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. Create three variables, one for each part of the operation. You’ll use these variables to update your display later. */

let firstNumber = "";
let operator = "";
let secondNumber = "";

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

/* Create the functions that update one of your number variables when the calculator’s digit buttons are clicked. Your calculator’s display should also update to reflect the value of that number variable. */

function formatNumber(numString) {
  if (numString === "") return "";
  return Number(numString).toLocaleString("en-US");
}

let screen = document.querySelector("#screen");

const numbersButton = document.querySelectorAll(".number");

let displayValue = "";

numbersButton.forEach((button) => {
  button.addEventListener("click", () => {
    displayValue += button.textContent;

    screen.value = formatNumber(displayValue);
    screen.scrollLeft = screen.scrollWidth;
  });
});

/* Make the calculator work! You’ll need to store the first and second numbers input by the user and then operate() on them when the user presses the = button, according to the operator that was selected between the numbers.
 */

const operators = document.querySelectorAll(".operate");

operators.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator && displayValue.endsWith(operator)) {
      operator = button.textContent;
      displayValue = displayValue.slice(0, -1) + operator;
      screen.value = formatNumber(displayValue);
      return;
    }

    firstNumber = displayValue;
    operator = button.textContent;

    displayValue = "";
    screen.value = operator;
    screen.scrollLeft = screen.scrollWidth;
  });
});

const equals = document.querySelector(".equals");

equals.addEventListener("click", () => {
  secondNumber = displayValue;
  if (displayValue === "") return;

  let result = operate(Number(firstNumber), operator, Number(secondNumber));
  if (typeof result === "number") {
    result = Math.round(result * 1000) / 1000;
  }

  screen.value = formatNumber(result);
  screen.scrollLeft = screen.scrollWidth;

  displayValue = result.toString();
});

const allClear = document.querySelector("#all-clear");

allClear.addEventListener("click", () => {
  displayValue = "";
  screen.value = "";
  firstNumber = "";
  operator = "";
  secondNumber = "";
});

const clearButton = document.querySelector("#clear-btn");

clearButton.addEventListener("click", () => {
  displayValue = "";
  screen.value = "";
});

const backspace = document.querySelector("#backspace");

backspace.addEventListener("click", () => {
  displayValue = displayValue.slice(0, -1);
  screen.value = displayValue;
});
