"use strict";
console.log(`hello from the-handy-spreadOperator.js`);

const name = {
    firstName: "Cesar",
    lastName: "Vallin"
};

const role = {
    title: "Software Developer",
    skills: ["JavaScript", "HTML", "CSS"],
    isTeacher: false,
}

console.log(name);
console.log(role);

// =================================================================================================
console.log(`the handy spread operator (...) ================================== `);

const person = {
    ...name,
    ...role
};
console.log(person);

/*
You can use the spread operator to copy key/value pairs from one object to another.
 */