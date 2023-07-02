"use strict";
console.log(`hello from Strings-end-with?.js`);

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


console.log(`Parameter manipulation and cool use of substring ===============================`);
function solution(str, ending){
    const flipStart = str.split("").reverse().join("");
    const flipEnd = ending.split("").reverse().join("");
    console.log(str, ending, ` --- starting parameters`);
    console.log(flipStart, flipEnd, `--- manipulated parameters`);
    if (flipStart.substring(0, ending.length) === flipEnd) {
        return true;
    }
    return false;
}


console.log(solution('abc', 'bc'), true);
console.log(solution('abcde', 'abc'), false);


console.log(`string.endsWith() ==============================================`);

const solution1 = (str, ending) => {
    console.log(str, ending);
    return str.endsWith(ending);
};
console.log(solution1('abc', 'bc'), true);
console.log(solution1('abcde', 'abc'), false);










