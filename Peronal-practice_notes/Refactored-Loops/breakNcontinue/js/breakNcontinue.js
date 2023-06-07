"use strict";
console.log(`hello from breakNcontinue.js`);

// ==================================================================================================================
// Notice that the while(condition) might as well be set up as:
    // while(true)

let userInput = true;
// let loopTest = true;
while(userInput) {
    userInput = prompt(`Please enter an odd number between 1 and 50`);
    if ((parseFloat(userInput) > 1 && parseFloat(userInput) < 50) && parseFloat(userInput) % 2 !== 0) {
        break;
    }
}

console.log(`Number to skip is: ${userInput}`);
for (let i = 1; i < 50; i++) {
    if (i % 2 === 0) {
        continue;
    } else if (i === parseFloat(userInput)) {
        console.log(`Yikes! skipping number: ${userInput}`);
    } else {
        console.log(`Here is an odd number: ${i}`);
    }
}

//==================================================================================================================

// Just notice the placement of num & return num in the code below:
// very valuable to be utilized in subsequent conditional statement.

/*
functions and set up itself is kinda of misleading, but in general this is a great way to set up
the return of a function asking input from a prompt!

You can refactor this, or learn from it, when you have time!
 */


// function isValid(num) {
//     return num <= 0 || num >= 51 || num % 2 === 0
// }

// function promptBetweenOneAndFiftyAndOdd() {
//     let num;
//     do {
//         num = prompt("Please enter an odd number between 1-50?");
//         if(isValid(num)) {
//             alert("Number entered is outside the acceptable range or an even number. Please try again.");
//         }
//         else
//             break;
//     } while (true);
//     return num;
// }
//
// let userNumber = promptBetweenOneAndFiftyAndOdd();
//
// for (let i = 1; i <= 50; i += 2) {
//     if(i == userNumber) {
//         console.log(`Yikes! Skipping over: ${userNumber}`);
//         continue;
//     }
//     console.log(`There is an odd number: ${i}.`);
// }