"use strict";
console.log(`hello from useful-js_built-in-methods.js`);


const person = {
    name: 'Edward',
    nickname: 'Duke',
    city: 'New York',
    age: 37,
    isStudent: true,
    skills: ['JavaScript', 'HTML', 'CSS']
};



console.log(`useful JS Object built in methods ========================================================================`);
console.log(`Whole object...`);
console.log(person);


console.log(`Object.keys() --- --- ---`);
// Useful JavaScript Object Methods: Object.keys():
const personProps = Object.keys(person);
console.log(personProps);

console.log(`Object.values() --- --- ---`);
// Useful JavaScript Object Methods: Object.values():
const personValues = Object.values(person);
console.log(personValues);

console.log(`Iterating an single object with a for..in loop --- --- ---`);
// for..in loop again:
for (let peekaboo in person) {
    console.log(peekaboo);
    console.log(person[peekaboo]);
}