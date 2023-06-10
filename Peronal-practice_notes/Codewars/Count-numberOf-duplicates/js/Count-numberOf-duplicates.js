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

// text is a parameter!
// j iterator has to be i + 1.  This ensures j stays ahead of i at all times!!!
// do not just start j initializer expression at 1.  This will not work for your conditional statement.

// ===============================================================================================================

// Good to iterate and compare immediatly subsequent elements!!

function duplicateCount(text){
    let textA = text.toUpperCase();
    let counter = 0;
    for (let i = 0; i < textA.length; i++){
        for (let j = i + 1; j < textA.length; j++) {
            if (textA[i] !== textA[j]) {
                continue;
            } else {
                counter += 1;
            }
        }
    } return counter;
}
/*
turn into array with .split()
then use a forEach loop
    compare element & index??
.includes()?
 */

console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("indivisibility"), 1);
console.log(duplicateCount("Indivisibilities"), 2);
console.log(duplicateCount("aA11"));
console.log(duplicateCount("ABBA"));
console.log(duplicateCount("ABBA"));

console.log(duplicateCount("cesarcesarcesar"));



