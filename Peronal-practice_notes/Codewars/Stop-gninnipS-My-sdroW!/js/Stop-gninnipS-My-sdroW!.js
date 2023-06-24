"use strict";
console.log(`hello from Stop-gninnipS-My-sdroW!.js`);

// Stop gninnipS My sdroW!

// Write a function that takes in a string of one or more words, and returns the same string, but with
// all five or more letter words reversed (Just like the name of this Kata). Strings passed in
// will consist of only letters and spaces. Spaces will be included only when more than one word is present.
//
//     Examples:
//
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"


function spinWords(string){
    const arr1 = string.split(" ");
    let result = [];
    for (const word of arr1) {
        if (word.length < 5) {
            result.push(word);
        } else if (word.length >= 5) {
            result.push(word.split("").reverse().join(""));
        }
    }
    return result.join(" ");
}

console.log(spinWords("Hey fellow warriors"));
console.log(typeof spinWords("Hey fellow warriors")[1]);



let arr2 = ['Hey', 'fellow', 'warriors'];
console.log(arr2[1].split("").reverse().join(""));