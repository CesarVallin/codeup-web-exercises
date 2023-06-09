"use strict";
console.log(`hello from for_loops.js, external JS`);

// 2. Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table
// for that number (just multiply by the numbers 1 through 10)
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
    let counter = 0;
    for (let i = 1; i <= 10; i++) {
        counter += 1;
        console.log(`${numberParam} x ${counter} = ${numberParam * counter}`);
    }
    // you can also use the i instead of the counter:
    // get rid of counter, keep loop
    // console.log(`${number} x ${i} = ${number * i}`)
};
showMultiplicationTable(7);
// ================================================================================================================

// 3. Use a for loop and the code from the previous lessons to generate 10 random numbers between 20
// and 200 and output to the console whether each number is odd or even. For example:
//
//
//     123 is odd
// 80 is even
// 24 is even
// 199 is odd
// ...

// function declaration: =========================================================
function evenOrOddReturn (numParam) {
    if (numParam % 2 === 0) {
        return `${numParam} is even`;
    } else {
        return `${numParam} is odd`;
    }
}
// function declaration: =========================================================
function randomNumber20to200() {
    return Math.floor(Math.random() * ((200 - 20) + 1)) + 20;
}
// function with nested functions!!! ============================================
const evenOrOdd10Numbers = () => {
    for (let i = 0; i < 10; i++) {
        let numberToTest = randomNumber20to200();
        console.log(evenOrOddReturn(numberToTest));
    }
};
evenOrOdd10Numbers();

// Notice how you declared a variable, then assigned it the value of the randomNumber function, then
// used it for your conditional statement!

// ================================================================================================================
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
    let counter = 0;
    for (let i = 1; i < 10; i++) {
        counter += 1;
        // console.log(Number(String(counter).repeat(i)));
        console.log(counter.toString().repeat(i));
    }
    // for (let i = 1; i < 10; i++) {
    //     console.log(`${i.toString().repeat(i)}`);
    // }
};
repeatInputWithIteration();
// use it with a nested loop??
// ================================================================================================================

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
// ================================================================================================================


