"use strict";
console.log(`hello from sort()Arrays_withCallBackFunct.js`);

/*

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

Array.prototype.sort()

With compare function.
Read it, get comfortable.  It is very useful.

 */

// ===============================================================================================
var numArray = [140000, 104, 99];
numArray.sort(function(a, b) {
    return a - b;
});

console.log(numArray);

var numArrayAA = [140000, 104, 99];
numArrayAA.sort(function(a, b) {
    return b - a;
});

console.log(numArrayAA);

// Same but with arrow function!!!:
var numArrayBB = [140000, 104, 99];
numArrayAA.sort((a, b) => {
    return b - a;
});

console.log(numArrayBB);
// ===============================================================================================



let names = ['Laura', 'Sofia', 'Raleigh', 'Cesar', 'Nana', 'Grandpa'];
names.sort(function(a, b) {
    return a.length - b.length;
});
console.log(names);

names.sort((a, b) => {return b.length - a.length});
console.log(names);
console.log(names[0].length, names[0]);
console.log(names[1].length, names[1]);

names.sort();
console.log(names);
