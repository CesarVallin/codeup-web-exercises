"use strict";
console.log(`hello from OddOrEven-Array.js`);
// Task:
//     Given a list of integers, determine whether the sum of its elements is odd or even.
//
//     Give your answer as a string matching "odd" or "even".
//
//     If the input array is empty consider it as: [0] (array with a zero).
//
// Examples:
//     Input: [0]
// Output: "even"
//
// Input: [0, 1, 4]
// Output: "odd"
//
// Input: [0, -1, -5]
// Output: "even"


const array3 = [0];
const array2 = [0, 1, 4];
const array1 =  [0, -1, -5];

function oddOrEven(array) {
    const sumTotalReduce = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const message = (numTotal) => {
        if (numTotal % 2 === 0) {
            return `even`;
        } else {
            return `odd`;
        }
    };
    return message(sumTotalReduce);

}

console.log(oddOrEven(array3));
console.log(oddOrEven(array2));
console.log(oddOrEven(array1));
