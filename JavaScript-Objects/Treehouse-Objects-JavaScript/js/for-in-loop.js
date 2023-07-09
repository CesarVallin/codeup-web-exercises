"use strict";
console.log(`hello from for-in-loop`);
/*
for in loop:

 */
// ==============================================================================================================

const person = {
    name: 'Edward',
    nickname: 'Duke',
    city: 'New York',
    age: 37,
    isStudent: true,
    skills: ['JavaScript', 'HTML', 'CSS']
};
console.log(person);
// ========================================

// Accessing keys and values!!
// Think of it as a for..of loop!!
for (let prop in person) {
    console.log(prop);
    console.log(prop, person[prop], `-- correct`); // bracket notation to indicate the iteration indexing!!!
    console.log(`${prop} : ${person["name"]}  --- not correct`); // Here is the difference, bracket notation accessing a specific value!!!
}

/*
In the example above, the variable named prop dynamically access the keys and their proper
values by using it as an iterator, just like a for loop!!!!
 */


// Use a for..in loop:
console.log(`next example ========================================================================`)
const composer = {
    name: 'Edward Ellington',
    nickname: 'Duke',
    genres: ['jazz', 'swing'],
    instrument: 'piano'
};
console.log(composer);
for (let key in composer) {
    console.log(key);
}
console.log(`now all together, key-values --- --- --- --- `);
for (let key in composer) {
    if (Array.isArray(composer[key])) {
        console.log(`YAY!!!`);
        console.log(composer[key].join(", "));
        console.log(Array.from(composer[key]));
    }
    console.log(`${key} : ${composer[key]}`);
}
/*
You've learned that with for...in, you're able to loop (or iterate) over the properties of an object literal and access each property's value
 */
// ==============================================================================================================
console.log(`useful JS Object built in methods ========================================================================`);
console.log(`Whole object`);
console.log(person);


console.log(`Object.keys() --- --- ---`);
// Useful JavaScript Object Methods: Object.keys():
const personProps = Object.keys(person);
console.log(personProps);

console.log(`Object.values() --- --- ---`);
// Useful JavaScript Object Methods: Object.values():
const personValues = Object.values(person);
console.log(personValues);

console.log(`Iterating a single object with a for..in loop: --- --- ---`);
// for..in loop again:
for (let peekaboo in person) {
    console.log(peekaboo, `:`);
    console.log(person[peekaboo]);
}

/*
See > useful-js_built-in-methods.html
Good comparison there.
 */



