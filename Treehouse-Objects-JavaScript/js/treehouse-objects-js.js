"use strict";
console.log(`hello from ...`);


const person = {
    name: 'Edward',
    city: 'New York',
    age : 37,
    isStudent: true,
    skills: ['JavaScript', 'HTML', 'CSS']
};
console.log(person);


person.nickname = 'Duke';

const message = `Hi, I'm ${person.name}. I live in ${person["city"]}.  Most know me as ${person.nickname} My age is ${person.age + 1}.  I have aquired ${person.skills.length} skills in Codeup so far: ${person.skills.join(", ")}`;
console.log(message);
console.log(person);



// ==============================================================================================================
const addy = {
    animal: 'dog',
    age: 3,
    breed: 'pug'
};
console.log(addy);

addy.age = addy.age + 1;
addy.isFriendly = true;

console.log(addy);