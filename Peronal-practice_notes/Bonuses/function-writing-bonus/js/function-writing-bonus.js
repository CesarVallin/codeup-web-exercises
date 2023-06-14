"use strict";
console.log(`hello from function-writing-bonus.js, external JS`);
// in slack channel - also bookmarked in chrome.
// ----------------------------------------------------------------------------------------------------------------
const isOdd = (parameter1) =>{
    if (parameter1 % 2 !== 0){
        return true;
    }
};
console.log(isOdd(3));

// ----------------------------------------------------------------------------------------------------------------

const isEven = (parameter1) =>  parameter1 % 2 === 0;

console.log(isEven(2));

// ----------------------------------------------------------------------------------------------------------------

const identity = (input) => {return typeof input};

console.log(identity(true));
console.log(identity(31));
console.log(identity("Cesar"));
console.log(identity(null));

// ----------------------------------------------------------------------------------------------------------------

