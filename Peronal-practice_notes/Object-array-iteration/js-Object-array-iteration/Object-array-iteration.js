"use strict";
console.log(`hello from Object-array-iteration.js`);
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

// logging ALL features:
console.log(`logging all features in their unaltered array form: === === === === === === === === === === ===`);
cars.forEach((car => {
    console.log(car.features);
}));
console.log(`logging all features in a list: === === === === === === === === === === === === ===`);
cars.forEach(car => {
    car.features.forEach(feauture => {
        console.log(feauture);
    });
});

// ============================================================================================================
// Trial to loop around all features in the array of objects !!!
console.log(`This is the trial and loop part === === === === === === === === === === === === ===`);

let allFeatrues = [];

cars.forEach(function(car) {
   car.features.forEach(function(feature) {
       allFeatrues.push(feature);
   });
});
console.log(allFeatrues);
console.log(allFeatrues.sort());

// now referencing the sorted array of features!!!
let atoZfeatures = allFeatrues.sort();
for (let i = 0; i < atoZfeatures.length; i ++) {
    if (atoZfeatures[i] === atoZfeatures[i + 1]) {
        continue;
    } else {
        console.log(allFeatrues[i]);
    }
}
// ============================================================================================================
// Now turn all these small code trials into a function!!!
console.log(`This is the function part === === === === === === === === === === === === ===`);

const featuresList = () => {
    let allFeatrues = [];
    cars.forEach(function(car) {
        car.features.forEach(function(feature) {
            allFeatrues.push(feature);
        });
    });

    let atoZfeatures = allFeatrues.sort();
    for (let i = 0; i < atoZfeatures.length; i ++) {
        if (atoZfeatures[i] === atoZfeatures[i + 1]) {
            continue;
        } else {
            console.log(allFeatrues[i]);
        }
    }

};

featuresList();
/**
*   The steps were to declare and assign an empty array, to store every single listed feature !!!
*   loop using a forEach loop and pushing every feature to this empty array.
*   assigning empty array into another variable, however now contents are sorted (sort(), manipulated)
*   loop through the manipulated array:
 *      Conditional statement to depict duplicates, and display a message of non-duplicates!!!

 */
