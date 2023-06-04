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
// EXPERIMENTAL FUNCTIONS
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

// Actual Bonus 2 problem solution:
/** userInteraction(); arrow function
 *  -clickCancel- variable declared, value will be assigned later.
 *    * -clickCancel- to serve in a conditional statement in subsequent lines of code
 *
 *  prompt() stored in -userInput- variable
 *    -userInput- variable used as:
 *
 *      * conditional:
 *        * ternary operator to determine whether the user clicked cancel or okay
 *        * clicking cancel on a prompt yields a null value
 *      * assignment:
 *        * assigns a value to -clickCancel- variable through same ternary operator
 *      * argument :
 *        * argument for numberResolve(numberParam) function declaration in global scope!
 *
 *  -resolveMessage- variable:
 *      * ternary operator
 *        * using numberResolve(numberParam) global variable
 *        * stores a value for us to use.
 *
 *  Conditional if elseif else statement block:
 *    * Always start with the clickCancel, in other words, will there be input?
 *    * Check if there is actual input even if the prompt() click was okay
 *    * If everything checks out, or in other words every check condition in the if_else-if did not execute,
 *        we can now execute the last code block through the else clause.
 *
 */

const userInteraction = () => {

  let clickCancel;
  const userInput = prompt(`Please enter your input here, anything! It can be a number, a sentence, your name...you pick!`);

  // ternary operator checks if user clicked okay or cancel, and assigns value to clickCancel declared variable
  (userInput === null) ? clickCancel = true : clickCancel = false;

  // ternary operator stores a value in -resolveMessage- variable.  The value we're storing here is a string.
  // ternary operator condition is the numberResolve(numberParam) function declaration in global scope.
  const resolveMessage = (numberResolve(userInput)) ? `Input can evaluate as a number in JavaScript` : `Input does not evaluate to a number in JavaScript`;
  if (clickCancel) {
    document.write(`No problem, we'll catch you next time!`);
  } else if (userInput.length === 0) {
    document.write(`Looks like you left the prompt window blank!`);
  } else {
    document.write(`Your input ${userInput} evaluates to: ${numberResolve(userInput)}. ${resolveMessage}`);
  }
};
userInteraction();
