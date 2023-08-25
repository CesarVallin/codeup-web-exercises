"use strict";
console.log(`hello from mexican-wave-main.js`);

// Look up
// Mexican Wave on codewars.

let string1 = `hello`;
let string2 = ` gap `;

function wave(str){
    // Code here
    let resultArray = [];
    let capitalChar;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') { // Only proceed if the character is not a space
            capitalChar = str.slice(i, i + 1).toUpperCase();
            resultArray.push(str.substring(0, i) + capitalChar + str.substring(i + 1, str.length));
        }
    }
    return resultArray;
}

console.log(wave(string1));
console.log(wave(string2));