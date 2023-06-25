"use strict";
console.log(`hello from List-Filtering.js`);


// In this kata you will create a function that takes a list of non-negative integers and strings and
// returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


function filter_list(l) {
    const numbersOnly = l.filter(element => {
        return typeof element === 'number';
    });
    return numbersOnly;
}
console.log(filter_list([1,2,'aasf','1','123',123]), `Expect: [1,2,123]`);

/*
Can you refactor with a loop?? Just for learning purposes, a deeper understanding of what
JavaScript Functional idioms do on every element and/or iteration of a collection.
 */