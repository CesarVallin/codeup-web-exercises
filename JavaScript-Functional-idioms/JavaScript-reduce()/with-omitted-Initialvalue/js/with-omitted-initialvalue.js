"use strict";
console.log(`hello from with-omitted-initialvalue.js`);

// Create a function, returnProduct, that takes in an array of numbers and returns the product of all the numbers.
//     Assume all element in the input array are valid numbers. Assume all array inputs have at least 1 number.
// returnProduct([1, 2, 3]) // returns 1 * 2 * 3 = 6
// returnProduct([3, 3, 3]) // returns 3 * 3 * 3 = 27
// returnProduct([4, 1, 2]) // returns 4 * 1 * 2 = 8
// returnProduct([4, 0, 2]) // returns 4 * 0 * 2 = 0
// returnProduct([5, 3, 2]) // returns 5 * 3 * 2 = 30

console.log(`reduce() ========================================`);
const returnProduct = (arrayParam) => {
    return arrayParam.reduce((accum, current) => {
        return accum * current;
    });
};
/*
Notice:
The initial value, which is set at the end of the call back function, is omitted.
This ensures that you do not multiply by zero from the beginning.
Initial value is optional.
A value to which accumulator is initialized the first time the callback is called.
*/
console.log(returnProduct([1, 2, 3]));
console.log(returnProduct([3, 3, 3]));
console.log(returnProduct([4, 1, 2]));
console.log(returnProduct([4, 0, 2]));
console.log(returnProduct([5, 3, 2]));

console.log(`for..of ========================================`);
const returnProduct1 = (arrayParam) => {
    let result = 1;
    for (const number of arrayParam) {
        result *= number;
    }
    return result;
};
console.log(returnProduct1([1, 2, 3]));
console.log(returnProduct1([3, 3, 3]));
console.log(returnProduct1([4, 1, 2]));
console.log(returnProduct1([4, 0, 2]));
console.log(returnProduct1([5, 3, 2]));


