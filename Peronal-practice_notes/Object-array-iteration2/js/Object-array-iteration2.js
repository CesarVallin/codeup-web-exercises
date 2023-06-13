"use strict";
console.log(`hello from Object-array-iteration2`);

/*
The objective of this practice is to display all features property:value, from this array full of objects.
*   If there is repeating values from the features property, you do not want to keep listing them in this exercies.
*   Simply display all of the features that are available, without repeating yourself!
 */

let cars = [
    {
        make: "Toyota",
        model: "Camry",
        features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
        owner: {
            name: "Jane Doe",
            age: 30
        }
    },
    {
        make: "Honda",
        model: "Accord",
        features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
        owner: {
            name: "John Doe",
            age: 31
        }
    },
    {
        make: "Honda",
        model: "Accord",
        features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
        owner: {
            name: "John Doe",
            age: 31
        }
    },
    {
        make: "Toyota",
        model: "Camry",
        features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
        owner: {
            name: "Jane Doe",
            age: 30
        }
    },
];

// Logging all of the features in different ways: =============================================================
cars.forEach(car => {
    car.features.forEach(feature=> {
        console.log(feature);
    });
});

cars.forEach(car => {
    console.log(car.features);
});
// =============================================================================================================

// function using the Set object & Array.from(), & Set.add() method
/*
Set
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

Array.from()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

Set.prototype.add()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add
 */
console.log(`This is the function part === === === === === === === === === === === === ===`);
const featuresList = () => {
    // instead of:  let allFeatrues = [];
    const allFeatures = new Set();
    cars.forEach(car => {
       car.features.forEach(feature => {
           allFeatures.add(feature);
       })
    });
    return allFeatures; // You can't sort this, it is not an array!!!
};
console.log(featuresList()); // check out the type, it seems to be an object.

// same function, now using Array.from():
const featuresList1a = () => {
    // instead of:  let allFeatrues = [];
    const allFeatures = new Set();
    cars.forEach(car => {
        car.features.forEach(feature => {
            allFeatures.add(feature); // add method will not let you add instances that have already been added!!
        })
    });
    return Array.from(allFeatures).sort(); // Now you can sort it, since it's being converted into an array!!
};
console.log(featuresList1a()); // check out the type, it seems to be an array now!!!

/*
The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
 */

// Displaying this list as an unordered list:
const displayList = (arr) => {
    let usefulString = arr.join(`</li><li>`);
    return `<ul><li>${usefulString}</li></ul>`;
};
document.write(displayList(featuresList1a()));