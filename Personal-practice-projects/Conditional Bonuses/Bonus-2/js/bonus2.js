"use strict";
console.log(`hello from bonus2.js, external JS`);

/*
Bonus 2
Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
- use an if/else
- refactor to use a ternary operator
 */
/*
isNaN() vs !isNaN()
  isNaN(argument1) - will evaluate argument1 as : is argument1 Not A Number?
  !isNaN(argument1) - will evaluate argument1 as : is argument1 a Number?
 */

// --------------------------------------------------------------------------------------------------------------------
// all of the numberResolve(numberParam) function declarations return the same!
function numberResolve(numberParam) {
  return !isNaN(numberParam);
}

function numberResolveA(numberParam) {
  if (!isNaN(numberParam)) {
    return true;
  } else {
    return false;
  }
}

function numberResolveB(numberParam) {
  let resolvedInput;
  if (!isNaN(numberParam)) {
    resolvedInput = true;
  } else {
    resolvedInput = false;
  }
  return resolvedInput;
}

// --------------------------------------------------------------------------------------------------------------------