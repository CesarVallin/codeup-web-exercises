"use strict";
console.log(`hello from A-blank-space-for-practice.js, external JS`);


// ========================================================================================================
///////////////////Bills loops//////////////////////////////////
// Use the following array for these practice exercises
const cars = ["Charger", "Equinox", "Malibu", "Soul", "Fusion", "Focus", "Avenger", "Town and Country"];
//Using the cars array, log the car with the fewest letters in it's name

//log the car with the most letters

//Use a loop to output the following text in the console:
//1
//1 2
//1 2 3
//1 2 3 4
//1 2 3 4 5
//1 2 3 4
//1 2 3
//1 2
//1

console.log(cars);

const fewestLetters = (cars) => {
    const smallToBig = cars.sort((a, b) => {
        return a.length - b.length;
    });
    return smallToBig[0];
};
console.log(fewestLetters(cars));
console.log(fewestLetters(cars)[0]);
