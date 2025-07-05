// TASK Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// SOLUTION
function evenOrOdd(number) {
  if (number % 2 === 0) return "Even";
  else return "Odd";
}

evenOrOdd(4);

// ////////////////////

// TASK Multiply
// This code does not execute properly. Try to figure out why.

function multiply(a, b) {
  a * b;
}

multiply(4, 5);

// SOLUTION
function multiply(a, b) {
  return a * b;
}

multiply(4, 5);

// ////////////////////

// TASK Return Negative
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// SOLUTION
function makeNegative(num) {
  if (num <= 0) return;
  else if (num >= 0) return num * -1;
}

makeNegative(5);

// TASK Sum of positive
// You get an array of numbers, return the sum of all of the positives ones.

// Example
// [1, -4, 7, 12] => 1 + 7 + 12 = 20
// 1+7+12=20
// Note
// If there is nothing to sum, the sum is default to 0.

// SOLUTION

function positiveSum(arr) {
  if (arr.length === 0) return 0;

  return arr.filter((num) => num > 0).reduce((acc, val) => acc + val, 0);
}
