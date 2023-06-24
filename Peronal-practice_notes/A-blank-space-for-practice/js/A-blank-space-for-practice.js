"use strict";
console.log(`hello from A-blank-space-for-practice.js, external JS`);


// ========================================================================================================

const string1 = "Mary had a little lamb little lamb little lamb";

const countWords1 = (param1) => {
    const wordsArr = param1.split(" ").sort();

    return wordsArr;
};

console.log(countWords1(string1));




