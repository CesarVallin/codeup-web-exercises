"use strict";
console.log(`hello from Square(n)Sum`);

// Square(n) Sum

// Complete the square sum function so that it squares each number passed into it and
// then sums the results together.
//
//     For example, for [1, 2, 2] it should return 9 because


// assert.strictEqual(squareSum([1,2]), 5);
// assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
// assert.strictEqual(squareSum([]), 0);

function squareSum(numbers) {
    let squareArr = [];
    numbers.forEach(i => {
        squareArr.push(i ** 2);
    });
    if (squareArr.length === 0) {
        return 0;
    } else {
        const result = squareArr.reduce((p, n) => {
            return p + n;
        });
        return result;
    }
}
console.log(squareSum([1, 2]));
console.log(squareSum([0, 3, 4, 5]));
console.log(squareSum([]));

