"use strict";
console.log(`hello from while.js, external JS`);

// Create a file named while.js in the js directory.
//
//     Create a while loop that uses console.log() to create the output shown below.
//
//
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

// let i = 1;
// while (i < 65536) {
//     i *= 2;
//     console.log(i);
//     // i *= 2;
// }
// ====================================================
// function doubleInput(numParam) {
//     while(true) {
//         console.log(numParam);
//         numParam *= 2;
//         if (numParam > 66000) {
//             break;
//         }
//     }
// }
// doubleInput(2);
// while (true) runs forever, that is why you have a break statement.


// ================================================================================================================

// Do While Loop

/*
An ice cream seller can't go home until she sells all of her cones. First write enough code that
generates a random number between 50 and 100 representing the amount of cones to sell before
you start your loop. Inside of the loop your code should generate
another random number between 1 and 5, simulating the amount of cones being bought by her clients.
Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows
how to get the random numbers for this exercise
 */

/*
1. random number between 50 and 100, before you start your loop.
2. Inside of the loop:
    2a. Your code should generate another random number, between 1 and 5.

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;

 */

// =========================================================================================================
// Not in use:
// function randomNum50to100(){
//     return Math.floor(Math.random() * ((100 - 50) + 1)) + 50;
// }
/*
Not in use, the example itself executes a new random number with every do-while iteration!
 */
// // =========================================================================================================
// function randomNum1to5A() {
//     return Math.floor(Math.random() * 5) + 1;
// }
// //=========================================================================================================
//
// // allCones is your startIndex expression!!!
// let allCones = Math.floor(Math.random() * ((100 - 50) + 1)) + 50;
// // --- --- --- --- --- --- --- --- ---
// let randomNum1to5;
// do {
//     console.log(`${allCones} cone(s) in stock --- --- ---`);
//     randomNum1to5 = Math.floor(Math.random() * 5) + 1; // used as your iteration-modifier expression further down!!!
//     console.log(`${randomNum1to5} cone order`);
//
//
//     if (allCones < randomNum1to5) {
//         console.log(`Cannot sell you ${randomNum1to5} cones, I only have ${allCones}`);
//         continue;
//         // Meaning this condition is met, continue to the next iteration.
//
//     } else if ((allCones - randomNum1to5) === 0) {
//         console.log(`Yay, I sold them all!`);
//         //Loop will stop at this point anyways, because your while(condition) will resolve to false.
//         // This statement will execute first, then you will exit the loop.
//     }
//
//     allCones -= randomNum1to5; // iteration-modifier expression!!!
//
// } while (allCones > 0); // condition expression, to resolve true or false!!!!
//
//         // Condition set up to keep loop running while you still have more than 0 cones in stock.
//         // Once you no longer have more than 0 cones in stock, loop exits.

//=========================================================================================================

function sellMyCones() {
    let allCones = Math.floor(Math.random() * ((100 - 50) + 1)) + 50;
    console.log(`I have ${allCones} at the start of my day`);
    do {
        const customerCones = Math.floor(Math.random() * 5) + 1;
        if (allCones - customerCones < 0) {
            console.log(`I can't sell ${customerCones} cones, I only have ${allCones}`);
            continue; // sad path first!!!
        } else if (allCones - customerCones === 0) {
            console.log(`Yay, I sold them all!`);
            break; // break out of loop!!!!
        } else {
            console.log(`${customerCones} cones sold`);
            allCones -= customerCones; // iteration-modifier!!!! here!!
        }
        console.log(`I now have ${allCones} cones left`);
    } while (allCones > 0);
}
sellMyCones();









