"use strict";
console.log(`hello from Count-by-x.js`);

// ========================================================================================================
// Count by X
/*
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be
positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
 */

function countBy(x, n) {
    let z = [];
    for (let i = x; i <=(x * n); i += x) {
        z.push(i);
    }
    return z;
}
console.log(countBy(2, 5));
console.log(countBy(1, 10));

function countBy1A(param1, param2) {
    let arr = [];
    for (let i = param1; i <= (param1 * param2); i += param1) {
        arr.push(i);
    }
    return arr;
}
console.log(countBy1A(2, 5));
console.log(countBy1A(1, 10));