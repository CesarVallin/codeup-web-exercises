"use strict";
console.log(`hello from Vowel-Count.js`);

// Vowel Count
//
// Return the number (count) of vowels in the given string.
//
//     We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
    let arr = str.toLowerCase().split("");
    let result = 0;
    for (const letter of str) {
        if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
            result += 1;
        }
    }
    return result;
}

console.log(getCount('abracadabra'), 5);

/*
Try or research this one:
function getCount(str) {
    let n = str.match(/[aeiou]/ig);
    return n ? n.length : 0;
};
 */