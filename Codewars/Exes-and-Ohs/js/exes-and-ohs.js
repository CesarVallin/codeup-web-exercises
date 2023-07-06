"use strict";
console.log(`hello from exes-and-ohs.js`);

// Exes and Ohs

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and
// be case insensitive. The string can contain any char.
//
//     Examples input/output:


// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let arr1 = str.toLowerCase().split("");
    let counterX = 0;
    let counterO = 0;
    for (const element of arr1) {
        if (element === 'x') {
            counterX += 1;
        }
        if (element === 'o') {
            counterO += 1;
        }
    }
    if (counterX === counterO) {
        return true;
    }
    return false;
}

console.log(XO("ooxx"), true);
console.log(XO("xooxx"), false);
console.log(XO("ooxXm"), true);
console.log(XO("zpzpzpp"), true);
console.log(XO("zzoo"), false);

// Check out this solution:
const XO1 = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}