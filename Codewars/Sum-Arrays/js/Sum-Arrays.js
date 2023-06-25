"use strict";
console.log(`hello from Sum-Arrays.js`);

// Write a function that takes an array of numbers and returns the sum of the numbers.
// The numbers can be negative or non-integer. If the array does not contain any numbers
// then you should return 0.
//
// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2
//
// Input: []
// Output: 0
//
// Input: [-2.398]
// Output: -2.398
//
// Assumptions
// You can assume that you are only given numbers.
//     You cannot assume the size of the array.
//     You can assume that you do get an array and if the array is empty, return 0.

console.log(`with reduce() =========================================================`);
function sum (numbers) {
    "use strict";
    return numbers.reduce((accum, current) => {
        return accum + current;
    }, 0);
}

console.log(sum([1, 5.2, 4, 0, -1]));
console.log(sum([]));
console.log(sum([-2.398]));

console.log(`with for..of loop ========================================================`);
const sum1 = (numbers) => {
    let result = 0;
    for (const element of numbers) {
        result += element;
    }
    return result;
};

console.log(sum1([1, 5.2, 4, 0, -1]));
console.log(sum1([]));
console.log(sum1([-2.398]));

console.log(`with for loop ========================================================`);
const sum2 = (numbers) => {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
};

console.log(sum2([1, 5.2, 4, 0, -1]));
console.log(sum2([]));
console.log(sum2([-2.398]));

console.log(`filter() workout ========================================================`);

const filterThis = (numbers) => {
    const specific = numbers.filter(function (number){
        return number % 2 === 0;
    });
    return specific;
};

console.log(filterThis([1, 5.2, 4, 0, -1]));

console.log(`map() workout ========================================================`);
const mapThis = (numbers) => {
    const specific = numbers.map(function(number) {
       return number ** 2;
    });
    return specific;
};
console.log(mapThis([1, 5.2, 4, 0, -1]));
