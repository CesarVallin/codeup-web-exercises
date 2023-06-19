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

console.log(`better from the first try: =======================`);
// Same concept, however did not need to execute if else, since only one item will return.
const squareSum1 = (numbers) => {
    let squareArr = [];
    numbers.forEach(function(number) {
        squareArr.push(number ** 2);
    });
    if (squareArr.length === 0) {
        return 0;
    }
    const result = squareArr.reduce((p, n) => {
        return p + n;
    }, 0);
    return result;
};

console.log(squareSum1([1, 2]));
console.log(squareSum1([0, 3, 4, 5]));
console.log(squareSum1([]));


console.log(`just reduce() example: =====================================`);
// just reduce:
/*
Notice how there is two returns on the function below.
You want to return the value of reduce, however, reduce itself is a callback function:
    It needs to also return a value after each iteration.
 */
const squareSum2 = (numbers) => {
    return numbers.reduce((accum, current) => {
        return accum + (current ** 2)}, 0);
};

console.log(squareSum2([1, 2]));
console.log(squareSum2([0, 3, 4, 5]));
console.log(squareSum2([]));


console.log(`for loop example: =====================================`);
// For loop example:
/*
Using a for loop to iterate and add a squared Element*Value!!!
 */
const squareSum3 = (numbers) => {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i] ** 2;
    }
    return result;
};

console.log(squareSum3([1, 2]));
console.log(squareSum3([0, 3, 4, 5]));
console.log(squareSum3([]));


console.log(`forEach example: =====================================`);
// forEach example:
const squareSum4 = (numbers) => {
    let result = 0;
    numbers.forEach(function(number) {
          result += number ** 2;
    });
    return result;
};

console.log(squareSum4([1, 2]));
console.log(squareSum4([0, 3, 4, 5]));
console.log(squareSum4([]));


console.log(`for..of example: =====================================`);
// for of loop:
const squareSum5 = (numbers) => {
    let result = 0;
    for (const peekaboo of numbers) {
        result += peekaboo ** 2;
    }
    return result;
};

console.log(squareSum5([1, 2]));
console.log(squareSum5([0, 3, 4, 5]));
console.log(squareSum5([]));
