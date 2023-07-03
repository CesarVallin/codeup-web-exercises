"use strict";
console.log(`hello from A-blank-space-for-practice.js, external JS`);


// ========================================================================================================

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


