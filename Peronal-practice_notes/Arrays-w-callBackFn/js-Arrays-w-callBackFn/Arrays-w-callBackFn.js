"use strict";
console.log(`hello from Arrays-w-callBackFn.js`);

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

Array.prototype.reduce()

The reduce() method executes a user-supplied "reducer" callback function on each element of
the array, in order, passing in the return value from the calculation on the preceding element.
The final result of running the reducer across all elements of the array is a single value.
 */

// ========================================================================================================

const array1 = [1, 2, 3, 4];
const arrayAA = [10, 15, 67];

// ======================================


// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);
// Example adapted from developer mozilla
console.log(sumWithInitial);
// Expected output: 10



const sumWithInitialAA = (arrayParam) => {
    const usingReduce = arrayParam.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return usingReduce;
}
console.log(sumWithInitialAA(arrayAA));

// ========================================================================================================

// same concept, however done with a forEach loop!!!!
const addAll = (arrParam) => {
    let result = 0;
    arrParam.forEach(element => {
        result += element;
    });
    return result;
};

console.log(addAll(array1));
console.log(addAll(arrayAA));