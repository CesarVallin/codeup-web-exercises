"use strict";
console.log(`hello from neighborhoods.js`);

// ================================= WARM UP
//
// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable.
//     If the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.
// The function should return true if the neighborhood object is desireable and false otherwise.

// example data...


const neighborhood1 = {
    neighborhood: "Lovely Estates",
    medianHomePrice: 280000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: 22
};

const neighborhood2 = {
    neighborhood: "Luminous Estates",
    medianHomePrice: 270000,
    pool: true,
    tennis: false,
    crimeRate: "high",
    schools: 24
}

const neighborhood3 = {
    neighborhood: "Oak Mountain",
    medianHomePrice: 290000,
    pool: false,
    tennis: false,
    crimeRate: "low",
    schools: 24
}

const neighborhood4 = {
    neighborhood: "Ginormous Acres",
    medianHomePrice: 350000,
    pool: true,
    tennis: true,
    crimeRate: "low",
    schools: 27
}

const desireable = (neighborhood) => {
    if (neighborhood.medianHomePrice < 300000 && neighborhood.crimeRate === 'low' && neighborhood.schools >= 24) {
        return true;
    }
    return false;
};

const desireable1 = (neighborhood) => {return (neighborhood.medianHomePrice < 300000 && neighborhood.crimeRate === 'low' && neighborhood.schools >= 24)};


console.log(desireable(neighborhood1));
console.log(desireable(neighborhood2));
console.log(desireable(neighborhood3));
console.log(desireable(neighborhood4));

const neighborhoodArr = [];
neighborhoodArr.push(neighborhood1);
neighborhoodArr.push(neighborhood2);
neighborhoodArr.push(neighborhood3);
neighborhoodArr.push(neighborhood4);

console.log(neighborhoodArr);
// const desireableObject = (neighborhoodArr) => {
//     for (let i = 0; i < neighborhoodArr.length; i++) {
//         if (desireable)
//     }
// };