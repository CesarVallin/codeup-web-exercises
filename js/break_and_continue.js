"use strict";
console.log(`hello from break_and_continue.js, external JS`);

// Break and Continue
// Create a file named break_and_continue.js in the js directory.
//     Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue
//     prompting the user if they enter invalid input.
//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except
//     for the number the user entered.
//     Your output should look like this:
//
//
// Number to skip is: 27

// ===============================================================================================================
// commented out, but can also use the code below:

// let userInput;
// let loopTest = true
// while (loopTest) {
//     userInput = prompt(`Please enter an odd number between 1 and 50`);
//     if ((parseFloat(userInput) > 1 && parseFloat(userInput) < 50) && parseFloat(userInput) % 2 !== 0) {
//         loopTest = false;
//     }
// }
// ===========================================================
// let userInput = true;
// // let loopTest = true;
// while (userInput) {
//     userInput = prompt(`Please enter an odd number between 1 and 50`);
//     if ((parseFloat(userInput) > 1 && parseFloat(userInput) < 50) && parseFloat(userInput) % 2 !== 0) {
//         break;
//     }
// }
//
// console.log(`Number to skip is: ${userInput}`);
// for (let i = 1; i < 50; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else if (i === parseFloat(userInput)) {
//         console.log(`Yikes! skipping number: ${userInput}`);
//     } else {
//         console.log(`Here is an odd number: ${i}`);
//     }
// }

// ===============================================================================================================

// First example in class, too crumbled up.
// function promptUntilOdd() {
//     do{
//         const userNumber = numberOneThroughFifty();
//         if(userNumber >= 1 && userNumber <= 50 && userNumber % 2 !== 0){
//             console.log(`Number to skip is: ${userNumber}`);
//             for(let i = 1; i <= 50; i++) {
//                 if(i === userNumber) {
//                     console.log(`Yikes! Skipping ${i}`);
//                     continue;
//                 }
//                 if(i % 2) {
//                     console.log(`Here's an odd number: ${i}`);
//                 }
//             }
//             break;
//         }
//         console.log("Invalid input");
//     } while(true)
// }

// promptUntilOdd();
// ===============================================================================================================

function isValid(num) {
    return num <= 0 || num >= 51 || num % 2 === 0
}

function numberOneThroughFifty() {
    return parseInt(prompt("Enter an odd number from 1 to 50"));
}

function promptBetweenOneAndFiftyAndOdd() {
    let num;
    do {
        num = prompt("Please enter an odd number between 1-50?");
        if(isValid(num)) {
            alert("Number entered is outside the acceptable range or an even number. Please try again.");
        } else {
            break;
        }
    } while(true);
    return num;
}

let userNumber = promptBetweenOneAndFiftyAndOdd();

for (let i = 1; i <= 50; i += 2) {
    if(i == userNumber) {
        console.log(`Yikes! Skipping over: ${userNumber}`);
        continue;
    }
    console.log(`There is an odd number: ${i}.`);
}

// NOTICE THAT YOU CAN SIMPLY TYPE - while(true) -
    // while(true) essentially runs forever!
    // or instead you can use an expression: while(isValid(num)), try it!!!
    // The point of this is that you are creating an infinite loop and utilizing a -break- keyword to
    // break out of the loop.
// create an isValid() function
// function isValid(parameter1) {
//  return userNumber >= 1 && userNumber <= 50 && userNumber % 2 !== 0
// }
