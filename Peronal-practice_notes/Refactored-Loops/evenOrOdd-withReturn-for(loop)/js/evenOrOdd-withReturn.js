"use strict";
console.log(`hello from evenOrOdd-withReturn.js`);

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
    return (numParam % 2 === 0) ? `${numParam} is even` : `${numParam} is odd`;
}
// function declaration: =========================================================
const randomNumber20to200 = () => {return Math.floor(Math.random() * ((200 - 20) + 1)) + 20 };

// function with nested functions!!! ============================================
const evenOrOdd10Numbers = () => {
    for (let i = 0; i < 10; i++) {
        let numberToTest = randomNumber20to200();
        console.log(evenOrOddReturn(numberToTest));
    }
};
evenOrOdd10Numbers();

// ===============================================================================================================
/* as opposed to this:
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

 */