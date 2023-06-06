"use strict";
console.log(`hello from JS-1-Loops.js, external JS`);

// 2. Create a function named showMultiplicationTable that accepts a number and console.logs the
// multiplication table for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output
//
//
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70

const showMultiplicationTable = (numberParam) => {
     for (let i = 1; i <= 10; i++) {
        console.log(`${numberParam} x ${i} = ${numberParam * i}`);
    }

};
showMultiplicationTable(7);

// 3. Use a for loop and the code from the previous lessons to generate 10 random numbers
// between 20 and 200 and output to the console whether each number is odd or even. For example:
//
//
// 123 is odd
// 80 is even
// 24 is even
// 199 is odd
// ...

const randomNumber20to200 = () => {return Math.floor(Math.random() * ((200 - 20) + 1)) + 20};
console.log(`The random number between 20 & 200 is: ${randomNumber20to200()}`);
const evenOrOdd = (numberParam) => {
    if (numberParam % 2 === 0) {
        return `${numberParam} is even`;
    } else if (numberParam % 2 !== 0) {
        return `${numberParam} is odd`;
    }
};
console.log(evenOrOdd(randomNumber20to200()));

// 4. Create a for loop that uses console.log to create the output shown below.
//
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

const repeatInputWithIteration = () => {
    // let counter = 0;
    // for (let i = 1; i < 10; i++) {
    //     counter += 1;
    //     // console.log(Number(String(counter).repeat(i)));
    //     console.log(counter.toString().repeat(i));
    // }
    for (let i = 0; i < 10; i++) {
        console.log(i.toString().repeat(i));
    }
};
repeatInputWithIteration();

// 5. Create a for loop that uses console.log to create the output shown below.
//
//
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

const oneHudredtoFive = () => {
    for (let i = 100; i >= 5; i--) {
        if (i % 5 !== 0) {
            continue;
        } else {
            console.log(i);
        }
    }
};
oneHudredtoFive();
// Read material and don't rush.  The above example can be a little better.

/*
Break and continue examples are next!!!!
 */
// ================================================================================================================
// Break and Continue
// Create a file named break_and_continue.js in the js directory.
//     Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue
//     prompting the user if they enter invalid input.
//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for
//     the number the user entered.

// You can use a for loop with (if else-if else) statements.
// You can also make it happen with a while, or a do while loop