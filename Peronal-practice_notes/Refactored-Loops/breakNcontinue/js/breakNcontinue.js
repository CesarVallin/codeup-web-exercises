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

