"use strict";
console.log(`hello from Reversed-string.js`);

// Complete the solution so that it reverses the string passed into it.
//
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
    return str.split("").reverse().join("");
}
console.log(solution("Vallin"));