"use strict";
console.log(`hello from ten-functions-Arrow.js, external JS`);

// ==================================================================================================================
// 1. Define a function named isTrue that takes in any input and returns true if the input provided is exactly equal
// to true in value and data type.

// function isTrue(input) {
//     return input === true;
// }

// Arrow function:
const isTrue = (input) => {return input === true};

// ==================================================================================================================
// 2. Define a function named `isFalse` that takes in a value and returns a true if and only if the provided
// input is equal to false in both type and value.

// function isFalse(parameter1){
//     return parameter1 === false;
// }

// Arrow function:
const isFalse = (parameter1) => {return parameter1 === false};

// ==================================================================================================================
// 3. Define a function named `not` that takes in any input and returns the boolean opposite of the provided input.

// function not(parameter1) {
//     return !parameter1;
// }

// Arrow function:
const not = (parameter1) => {return !parameter1};

// ==================================================================================================================
// 4. Define a function named `addOne` that takes in a single input. If the input is a number or a
// numeric string, return the value plus one.

// function addOne(parameter1) {
//     return Number(parameter1) + 1;
// }

// Arrow function: (both are correct)
// const addOne = (parameter1) => {return Number(parameter1) + 1};
const addOne = (parameter1) => {return parseFloat(parameter1) + 1};

// Notice the function directions.  Simply if the input is a number or a numeric string.
// Thus, we can use Number() or parseFloat()

// ==================================================================================================================
// 5. Define a function named `isEven` that takes in a single input. If the input is an even number
// or a string containing an even number, return `true`. Any other input should return false for the output.

// function isEven(parameter1) {
//     return parseFloat(parameter1) % 2 === 0;
// }
// Arrow function: (correct one for this problem)
const isEven = (parameter1) => {return parseFloat(parameter1) % 2 === 0;};
// Arrow function with one mistake! :
//const isEven = (parameter1) => {return Number(parameter1) % 2 === 0};

// Using the Number() method within this function causes an error when passing a boolean value.
// This is because the boolean value, either true or false, is coerced into its truthy or falsy value of 1 or 0.
// However, using the parseFloat() method returns NaN for a boolean, which automatically kicks this whole function into
// the sad path!

// ==================================================================================================================
// 6. Define a function named `isIdentical` that takes in two input arguments. If each input is equal
// both in data type and in value, then return `true`. If the values are not the
// same data type or not the same value, return `false`.

// function isIdentical(parameter1, parameter2) {
//     return parameter1 === parameter2;
// }

// Arrow function:
const isIdentical = (parameter1, parameter2) => {return parameter1 === parameter2};

// ==================================================================================================================
// 7. Define a function named `isEqual` that takes in two input arguments. If each argument is equal
// only in value, then return true. Otherwise return false.

// function isEqual(parameter1, parameter2) {
//     return parameter1 == parameter2;
// }

// Arrow function:
const isEqual = (parameter1, parameter2) => {return parameter1 == parameter2};

// ==================================================================================================================
// 8. Define a function named `or` that takes in two input arguments. The output returned should be the
// result of an `or` operation on both inputs.

// function or(parameter1, parameter2) {
//     return parameter1 || parameter2;
// }

// Arrow function:
const or = (parameter1, parameter2) => {return parameter1 || parameter2};

// ==================================================================================================================
// 9. Define a function named `and` that takes in two input arguments and returns the result of a
// logical `and` operation of both inputs.

// function and(parameter1, parameter2) {
//     return parameter1 && parameter2;
// }

// Arrow function:
const and = (parameter1, parameter2) => {return parameter1 && parameter2};

// ==================================================================================================================
// 10. Define a function named `concat` that takes in two input arguments. If both arguments are strings, then
// return the concatenated result. If two numbers are provided, then return the string concatenation
// of each set of numerals.

// function concat(parameter1, parameter2) {
//     let array1 = [parameter1, parameter2];
//     return array1.join("");
// }

// Arrow function: (both work)
// const concat = (parameter1, parameter2) => {return parameter1.toString() + parameter2.toString()};
const concat = (parameter1, parameter2) => {return [parameter1, parameter2].join("")};