"use strict";
console.log(`hello from removeEvens.js`);

function isANumber(input) {
    if (typeof input === "boolean" || input === null) {
        return false;
    }
    if (!isNaN(input)) {
        return true;
    } else {
        return false;
    }
    return !(isNaN(parseFloat(input)))
}

// Write a function called removeEvens that takes an array of numbers
// And removes any even number from the array

// Examples:

// Input: [1, 3, 2, 13, 74, 33]
// Expected Output: [1, 3, 13, 33]

// Input: [62, 3, 2, 8, 531, 7]
// Expected Output: [3, 531, 7]

console.log(`with filter ========================================================`);
const removeEvens = (arrParam) => {
    return arrParam.filter((number) => {
        return number % 2 !== 0;
    });
};
console.log(removeEvens([1, 3, 2, 13, 74, 33]), `expected output: [1, 3, 13, 33]`);
console.log(removeEvens([62, 3, 2, 8, 531, 7]), `expected output: [3, 531, 7]`);

console.log(`with for..of ========================================================`);
const removeEvens1 = (arrParam) => {
    let odds = [];
    for (const element of arrParam) {
        if (element % 2 !== 0) {
            odds.push(element);
        }
    }
    return odds;
};
console.log(removeEvens1([1, 3, 2, 13, 74, 33]));
console.log(removeEvens1([62, 3, 2, 8, 531, 7]));

console.log(`with forEach ========================================================`);
const removeEvens2 = (arrParam) => {
    let odds = [];
    arrParam.forEach((arr) => {
        if (arr % 2 !== 0) {
            odds.push(arr);
        }
    });
    return odds;
}
console.log(removeEvens2([1, 3, 2, 13, 74, 33]));
console.log(removeEvens2([62, 3, 2, 8, 531, 7]));

console.log(`with for loop ========================================================`);

const removeEvens3 = (arrParam) => {
    // Guard against anything that is not an array:
    if (!Array.isArray(arrParam)) {
        return false;
    }
    let odds = [];
    for (let i = 0; i < arrParam.length; i++) {
        // Guard against any item in the array that is not a number
        if (!isANumber(arrParam[i])) {
            return false;
        }
        if (arrParam[i] % 2 !== 0) {
            odds.push(arrParam[i]);
        }
    }
    return odds;
};
console.log(removeEvens3([1, 3, 2, 13, 74, 33]));
console.log(removeEvens3([62, 3, 2, 8, 531, 7]));
console.log(removeEvens3([62, 3, 2, 'bob', 531, 7]));