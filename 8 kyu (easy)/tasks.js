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

//TASK Reversed Strings
//  Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// SOLUTION

function solution(str) {
  //   split string into array by each character
  let x = str.split("");
  // use built in reverse array method
  let y = x.reverse();
  //   join the array into a reversed string
  let z = y.join("");
  return z;

  //   or chain everything together
  // return str.split("").reverse().join("")

  //   or do it manually withut using built in reverse.()
  // let newString = ""
  // for (let i = str.length - 1, i >= 0, i--){
  //   newString += str[i]
  // }
}

//TASK Convert a Number to a String
// We need a function that can transform a number (integer) into a string.

// Examples (input --> output): 123  --> "123"

// SOLUTION
function numberToString(num) {
  return num.toString();
  //   or
  //   return num + ""
}

//TASK Convert boolean values to strings 'Yes' or 'No'.
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// SOLUTION

function boolToWord(bool) {
  return bool === true ? "Yes" : "No";
}

//TASK Square(n) Sum
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9

// SOLUTION
function squareSum(numbers) {
  return numbers.map((el) => el * el).reduce((acc, cur) => acc + cur, 0);
}
