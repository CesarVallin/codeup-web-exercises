"use strict";
console.log(`hello from A-blank-space-for-practice.js, external JS`);


// ========================================================================================================

// Find the unique number
//
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
//
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
//
// It’s guaranteed that array contains at least 3 numbers.
//
// The tests contain some very huge arrays, so think about performance.
//
// This is the first kata in series:
//
// Find the unique number (this kata)
// Find the unique string
// Find The Unique

// function findUniq(arr) {
//     const ordered = arr.sort((a, b) => {
//         return a - b;
//     });
//     let champion;
//     for (let i = 0; i < ordered.length; i++) {
//         if (ordered[i] !== ordered[i + 1]) {
//             champion = ordered[i];
//         }
//         if (ordered[i] === ordered[i + 1] && ordered[i] !== ordered[i + 2]) {
//             champion = ordered[i + 2];
//         }
//     }
//     return champion;
// }
// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));

