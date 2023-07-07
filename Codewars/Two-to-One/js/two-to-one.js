"use strict";
console.log(`hello from two-to-one.js`);


// ========================================================================================================

// Two to One

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the
// longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
//
//     Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
//
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    let meltedTogether =  `${s1 + s2}`;
    const arr1 = meltedTogether.split("").sort();
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr1[i + 1]) {
            result.push(arr1[i]);
        }
    }
    return result.join("");
}


console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));

/*
Big learning opportunity from this one, using new Set () :

function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}
 */

console.log(`using new Set() ================================================`);

const longest1 = (s1, s2) => {
    let meltedTogether = s1 + s2;
    const arr1 = meltedTogether.split("").sort();
    const result = new Set();
    arr1.forEach(word => {
        result.add(word);
    });
    return Array.from(result).join("");
};
console.log(longest1("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
