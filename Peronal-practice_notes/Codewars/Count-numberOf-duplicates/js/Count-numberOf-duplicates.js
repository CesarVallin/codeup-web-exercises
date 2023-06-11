"use strict";
console.log(`hello from Count-numberOf-duplicates`);
/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric
digits that occur more than once in the input string.
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

    Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

 */
// ===============================================================================================================
// text is a parameter!
// j iterator has to be i + 1.  This ensures j stays ahead of i at all times!!!
// do not just start j initializer expression at 1.  This will not work for your conditional statement.



// Good to iterate and compare immediatly subsequent elements!!
//
// function duplicateCount(text){
//     let textA = text.toUpperCase();
//     let counter = 0;
//     for (let i = 0; i < textA.length; i++){
//         for (let j = i + 1; j < textA.length; j++) {
//             if (textA[i] !== textA[j]) {
//                 continue;
//             } else {
//                 counter += 1;
//             }
//         }
//     } return counter;
// }


// ===============================================================================================================
// First test:
function organizeStringToArr(textParam) {
    let arr = textParam.toLowerCase().split("").sort();
    // let counter = 0;
    return arr;
}
console.log(organizeStringToArr("Indivisibilities"));

// ===============================================================================================================

// ACTUAL FUNCTION!!:
// expected input value is a string.
/*
This stores a modification of textParam into arr variable
textParam is made to lower case, split into an array, and sorted alphabetically.
The sorting helps with the subsequent conditional statement, to only find :
    ```count of distinct case-insensitive alphabetic characters and numeric
       digits that occur more than once```
Conditional statement:
*   Checks current iteration - element value
*   iteration + 1 - element value
*   iteration + 2 - element value
*   Compares if subsequent values are the same && adjacent values are not the same.
*   It works even at the end of the array, grasping the last two iterations, if they happen to
    be the same, the third sequence will not be the same anyways since it will be greater than the
    length of the array!!!

*   An overall counter is return based on repeating subsequent values ONLY, not repeating or adjacent.

 */
function duplicateCount(textParam) {
    let arr = textParam.toLowerCase().split("").sort();
    let counter = 0;
    for (let i = 0; i < arr.length; i ++){
        if (arr[i] === arr[i + 1] && arr[i] !== arr[i + 2]) {
            counter += 1;
        }
    }
    return counter;
}

console.log(duplicateCount("abcde"), `Expected output: 0`);
console.log(duplicateCount("aabbcde"), `Expected output: 2`);
console.log(duplicateCount("aabBcde"), `Expected output: 2`);
console.log(duplicateCount("indivisibility"), `Expected output: 1`);
console.log(duplicateCount("Indivisibilities"), `Expected output: 2`);
console.log(duplicateCount("aA11"), `Expected output: 2`);
console.log(duplicateCount("ABBA"), `Expected output: 2`);


// ===============================================================================================================
/*
unit test:

const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(duplicateCount(""), 0);
    assert.strictEqual(duplicateCount("abcde"), 0);
    assert.strictEqual(duplicateCount("aabbcde"), 2);
    assert.strictEqual(duplicateCount("aabBcde"), 2,"should ignore case");
    assert.strictEqual(duplicateCount("Indivisibility"), 1)
    assert.strictEqual(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
  });
});
 */


