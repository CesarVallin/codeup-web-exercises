"use strict";
console.log(`hello from A-blank-space-for-practice.js, external JS`);


// ========================================================================================================

// Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).
//
//     String will never be empty and you do not need to account for different data types.

//=================================================================================================
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;
//
// describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//         assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
//         assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3);
//         assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
//     })
// })


function findShort(s){
    const arr = s.split(" ").sort((a, b) => {return a.length - b.length});
    return arr[0].length;
}
console.log(findShort("Let's travel abroad shall we"));
