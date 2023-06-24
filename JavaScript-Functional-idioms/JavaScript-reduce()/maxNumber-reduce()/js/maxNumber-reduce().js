"use strict";
console.log(`hello from maxNumber-reduce().js`);

// customer demographic object:

const customers = [
    {
        name: "Laura",
        age: 33
    },
    {
        name: "Sofia",
        age: 12
    },
    {
        name: "Raleigh",
        age: 6
    },
    {
        name: "Cesar",
        age: 31
    },
    {
        name: "Roberto",
        age: 48
    },
    {
        name: "David",
        age: 33
    },
    {
        name: "Oliver",
        age: 47
    },
    {
        name: "Mia",
        age: 13
    },
    {
        name: "Betty",
        age: 70
    },
    {
        name: "Gennaro",
        age: 47
    },
];

// Log every object in the customers array
customers.forEach(function(person){
    console.log(person.name, person.age);
});

// Sort array objects by age
const ageSortObject = customers.sort((a, b) => {
    return a.age - b.age;
});
console.log(ageSortObject);

// find the highest age in the now sorted array of objects
const highestAge = ageSortObject.reduce((p, c) => {
    if (c.age > p) {
        return c.age;
    }
    return p;

}, 0);
console.log(highestAge);

