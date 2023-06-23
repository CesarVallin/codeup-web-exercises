"use strict";
console.log(`hello from initialvalue-anObject.js`);

function countWords(sentence) {
    const words = sentence.split(' '); // transform a sentence into an array of words
    console.log(words);
    const wordCountObject = words.reduce((wordCounts, word) => {
        console.log(wordCounts);
        console.log(word);
        // if (typeof wordCounts[word] === 'undefined') {
        //     // if the word is not yet present in our object, set it's value to 1
        //     wordCounts[word] = 1;
        //     console.log(wordCounts[word]);
        // } else {
        //     // otherwise increment the existing count
        //     wordCounts[word] += 1;
        //     console.log(wordCounts[word]);
        // }
        // console.log(wordCounts);
        return wordCounts;
    }, {}); // start with an empty object
    console.log(wordCountObject);
    return wordCountObject;
}

countWords('Mary had a little lamb little lamb little lamb');
// {Mary: 1, had: 1, a: 1, little: 3, lamb: 3}


// ====================================================================================
const string1 = "Mary had a little lamb little lamb little lamb";


// console.log(countWords1(string1));



