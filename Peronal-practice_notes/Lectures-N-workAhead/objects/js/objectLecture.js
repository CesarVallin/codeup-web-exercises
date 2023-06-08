"use strict";
console.log(`hello from objectLecture.js`);

// ============================================================================================================
// const car = {
//     make: "Ford",
//     model: "F-250"
// };
//
// car.color = "Red";
//
// console.log(car);
// console.log(car.model);
// console.log(car["make"]); // same thing as above!
//
// /*
// Make sure properties are lowercase
// values can be uppercase
//  */
// ============================================================================================================
// const addTwoNumbers = (x, y) => {return x + y};
//
// const object1 = {
//     name: "Cesar",
//     age: 31,
//     school: "Codeup",
//     math: addTwoNumbers(2, 2)
// };
//
// console.log(object1.name);
// console.log(object1.age);
// console.log(object1.school);
// console.log(object1.math);
//
// console.log(object1);
//
// object1.favoriteColor = "Green";
// console.log(object1);
//
// object1.family = {};
// console.log(object1);
// object1.family.wife = "Laura";
// object1.family.daughter = "Sofia";
// object1.family.son = "Raleigh";
// console.log(object1);

// ============================================================================================================

// const cars = [
//     {
//         make: "Toyota",
//         model: "Camry",
//         features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
//         owner: {
//             name: "Bob",
//             age: 30
//         },
//         honk: function(){
//             return `${this.model} honked...`;
//         }
//         // or
//         /*
//         honk() {
//             return `${this.model} honked...`;
//         }
//          */
//     }
// ];
//
// console.log(cars[0].make);
// console.log(cars[0].model);
// console.log(cars[0].features[1]);
// console.log(cars[0].owner.name);
// console.log(cars[0].honk());
//
// // this keyword refers only to its parent!!!

// ============================================================================================================

var cars = [
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
    }
];
//================================================================================================================
// forEach loops!!!!
/*
You are declaring a variable.
Pretty much what you are saying is that for every unit(element) in cars, your are giving it a name of car (in this case)

If you were looping through a -people[] array-, maybe you can declare every unit(element) as 'person'.
It will be:
people.forEach(function(person) {
    //// blah
}
 */
cars.forEach(function(car) {
    car.features.forEach(function(feature) {
        console.log(feature);
    });
});

//===============================================
// You came up with this nested loop! works the same as above!!!
cars.forEach(i => {
    i.features.forEach(i => {
        console.log(i);
    });
});
