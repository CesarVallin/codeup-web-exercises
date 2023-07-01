"use strict";
console.log(`hello from A-blank-space-for-practice.js, external JS`);


// ========================================================================================================

// String ends with?
//
// Complete the solution so that it returns true if the first argument(string) passed in
// ends with the 2nd argument (also a string).
//
// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
// solution('abcde', 'cde'), true)
// solution('abcde', 'abc'), false)



function solution(str, ending){
    const flipStart = str.split("").reverse().join("");
    const flipEnd = ending.split("").reverse().join("");
    console.log(flipStart, flipEnd);
    if (flipStart.substring(0, ending.length) === flipEnd) {
        return true;
    }
    return false;
}


console.log(solution('abc', 'bc'));