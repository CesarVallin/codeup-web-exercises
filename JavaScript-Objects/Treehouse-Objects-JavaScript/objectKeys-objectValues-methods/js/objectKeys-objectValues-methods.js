"use strict";
console.log(`hello from objectKeys-objectValues-methods.js`);

const person = {
    name: "Reggie",
    role: "Software Developer",
    skills: ["JavaScript", "HTML", "CSS"],
    isTeacher: true
};
console.log(`logging object =======================================================`);
console.log(person);


console.log(`for..in loop =======================================================`);
for (const key in person) {
    console.log(key, person[key]);
    console.log(key.length, ` ` , person[key].length); // See the difference with the logged items below.
}

console.log(`Object.keys(): returns array =======================================================`);
console.log(Object.keys(person));
console.log(Object.keys(person).length);

console.log(`Object.values(): returns array =======================================================`);
console.log(Object.values(person));
console.log(Object.values(person).length);

// =================================================================================================


console.log(`Practice space: ==========================`);
const checkForValuesArray = (param1) => {
    let result;
    for (const peekaboo in param1) {
        if (Array.isArray(param1[peekaboo])) {
            result = param1[peekaboo];
        }
    }
    return result.join(", ");
};
console.log(checkForValuesArray(person));
