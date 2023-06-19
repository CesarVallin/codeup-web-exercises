"use strict";
console.log(`hello from JavaScript-map.js`);

// Square(n) Sum

// Complete the square sum function so that it squares each number passed into it and
// then sums the results together.
//
//     For example, for [1, 2, 2] it should return 9 because


// assert.strictEqual(squareSum([1,2]), 5);
// assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
// assert.strictEqual(squareSum([]), 0);

/*
map() operates on collections.
map() will not modify the original array, but instead will return a new copy of the array.

map() transform each element in the collection.
 */



console.log(`map() & for..of loop =============================`);
const squareSum = (numbers) => {
    const squaredArr = numbers.map(function(number) {
        return number ** 2;
    });
    let result = 0;
    for (const number of squaredArr) {
        result += number;
    }
    return result;
}
console.log(squareSum([1, 2]));
console.log(squareSum([0, 3, 4, 5]));
console.log(squareSum([]));


console.log(`map() & reduce() =============================`);
const squareSum1 = (numbers) => {
    const squaredArr = numbers.map(function(peekaboo) {
        return peekaboo ** 2;
    });
    const adding = squaredArr.reduce((accum, current) => {
        return accum + current;
    }, 0);
    return adding;
};

console.log(squareSum1([1, 2]));
console.log(squareSum1([0, 3, 4, 5]));
console.log(squareSum1([]));

