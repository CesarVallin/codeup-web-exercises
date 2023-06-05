"use strict";
console.log(`hello from Treehouse-loops.js, external JS`);

// functino to generate a random number, -upper- is a parameter.
function getRandomNumber(upper) {
    return Math.floor( Math.random() * upper ) + 1;
}
// ================================================================================================================
/*
Use do-while when you need your loop to execute at least one time.

Use while when you need to check a condition before performing an action.
*/
// ================================================================================================================

//==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ====
// While loop:
let counter = 0;
while (counter < 10) {
    console.log(`The random number is: ${getRandomNumber(10)}`);
    counter += 1;
}
// Run this code ten times as opposed to writing console.log() ten times for the random number.

//==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ====
// Do-while loop:
let counterA = 0;
do {
    console.log(`The random number is:  ${getRandomNumber(10)}`);
    counterA += 1;
} while (counterA < 10);


