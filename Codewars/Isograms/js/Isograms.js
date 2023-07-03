"use strict";
console.log(`hello from Isograms.js`);

// Isograms

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function
// that determines whether a string that contains only letters is an isogram. Assume the empty
// string is an isogram. Ignore letter case.
//
// Example: (Input --> Output)
//
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str){
    const words = str.toLowerCase().split("").sort();
    // console.log(words);
    for (let i = 0; i < words.length; i++) {
        // console.log(words[i], words[i + 1]);
        if (words[i] === words[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(isIsogram("Dermatoglyphics"));

console.log(isIsogram("moose"));

/*
Big learning opportunity:
If you need to check multiple conditions within a loop, for instance, make full use of:
    if_else-if_else

If you need to check one condition: simply use if

Remember, from a function you can only have one return.
As you are looping, if your condition is met, return there.
    Otherwise, set up your function to return a default value.
 */