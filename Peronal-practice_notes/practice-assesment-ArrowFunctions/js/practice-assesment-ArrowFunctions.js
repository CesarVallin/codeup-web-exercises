"use strict";
console.log(`hello from practice-assesment-ArrowFunctions.js, external JS`);

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

// 1. Define a function named isBoolean that takes in a value and returns a boolean if the
// argument provided is a boolean value or not.
//
// isBoolean(true)             // true
// isBoolean(false)            // true
// isBoolean(0)                // false
// isBoolean(null)             // false
// isBoolean("")               // false
// isBoolean("kwiw")           // false
// isBoolean([1, 2])           // false

const isBoolean = (value) => {return typeof value === "boolean"};

// 2. Define a function named isString that takes in a value as an input and returns a
// boolean if the input provided is a string or not. Numeric strings will count
// as strings and should return true.
//
// isString("Hello")           // true
// isString("Codeup")          // true
// isString("123")             // true
// isString(4)                 // false
// isString(true)              // false
// isString([1, 2, 3])         // false
// isString()                  // false
// isString(null)              // false

const isString = (parameter1) => {return typeof parameter1 === "string"};

// 3. Define a function named isNotString that accepts an input and returns true or false
// based on whether an input is not a string. Numeric strings will count as strings and
// should return false.
//
// isNotString(4)                 // true
// isNotString(true)              // true
// isNotString([1, 2, 3])         // true
// isNotString()                  // true
// isNotString(null)              // true
// isNotString("Hello")           // false
// isNotString("Codeup")          // false
// isNotString("123")             // false

const isNotString = (parameter1) => {return typeof parameter1 !== "string"};

// 4. Define a function named isEmptyString that will return true when passed an argument
// with the value of "", i.e. an empty string. All other arguments should return false.
//
// isEmptyString("")                // true
// isEmptyString(" ")               // false
// isEmptyString("Hello")           // false
// isEmptyString("Codeup")          // false
// isEmptyString("123")             // false
// isEmptyString(true)              // false
// isEmptyString([1, 2, 3])         // false
// isEmptyString(null)              // false
// isEmptyString()                  // false

const isEmptyString = (parameter1) => {return parameter1 === ""};

// 5. Define a function named isNotANumber that accepts an input and returns true or false
// based on whether an input is a non-numeric value or not. Numbers as strings
// are not a number and should return true.
//
// isNotANumber("")               // true
// isNotANumber(true)             // true
// isNotANumber("Bob")            // true
// isNotANumber([1,2,3])          // true
// isNotANumber("42")             // true
// isNotANumber(23)               // false
// isNotANumber(3.141)            // false

const isNotANumber = (parameter1) => {
    if (typeof parameter1 === "boolean" || parameter1 === null) {
        return true;
    } else if (isNaN(parameter1)) {
        return true;
    } else {
        return false;
    }
};

// 6. Define a function named isNegative that accepts a number and returns true or false
// based on whether the input is less than zero.
//
// isNegative(-1)              // true
// isNegative(-5)              // true
// isNegative("-3")            // true
// isNegative(0)               // false
// isNegative(6)               // false
// isNegative("10")            // false
// isNegative(true)            // false
// isNegative(false)           // false
// isNegative("Bob")           // false
// isNegative([-1, 2, 3])      // false
// isNegative(null)            // false

const isNegative = (parameter1) => {return parameter1 < 0};

// 7. Define a function named isPositive that accepts an input and returns true or false
// based on whether the input is above zero. Any non-numeric input should return false.
//
// isPositive(1)               // true
// isPositive("6")             // true
// isPositive(3.141)           // true
// isPositive(-1)              // false
// isPositive(-5)              // false
// isPositive("-4")            // false
// isPositive(0)               // false
// isPositive("Bob")           // false
// isPositive(true)            // false

const isPositive = (parameter1) => {return parameter1 > 0};

// 8. Define a function named isZero that will return true when passed an argument of the
// numeric value 0, and return false for all other arguments.
//
// isZero(0)                 // true
// isZero("0")               // true
// isZero("Hello")           // false
// isZero("Codeup")          // false
// isZero("123")             // false
// isZero(true)              // false
// isZero([1, 2, 3])         // false
// isZero(null)              // false
// isZero()                  // false

const isZero = (parameter1) => {return parameter1 == 0};

// 9. Define a function named isArray that takes in an input and returns a boolean
// whether or not that input is an array or not.
//
// isArray([])                 // true
// isArray([1, 2, 3])          // true
// isArray(['a', 'b'])         // true
// isArray(false)              // false
// isArray(12)                 // false
// isArray("Bob")              // false
// isArray({'some': 'object'}) // false
// isArray(true)               // false
// isArray()                   // false

const isArray = (parameter1) => {return Array.isArray(parameter1)};

// 10. Define a function named upperCase that takes in a single input. If the input is
// not a string, return false. If the input is a non-numeric string, then return it with
// all the letters capitalized.
//
// upperCase("Codeup")         // "CODEUP"
// upperCase("javascript")     // "JAVASCRIPT"
// uppercase("45")             // "45"
// upperCase(23)               // false
// upperCase(null)             // false
// upperCase([1, 2, 3])        // false
// upperCase(true)             // false
// upperCase()                 // false

const upperCase = (parameter1) => {
    if (parameter1 === null || parameter1 === undefined) {
        return false;
    } else if (Array.isArray(parameter1)) {
        return false;
    } else {
        return parameter1.toUpperCase();
    }
};

// Do not use parameter1.length === 0!