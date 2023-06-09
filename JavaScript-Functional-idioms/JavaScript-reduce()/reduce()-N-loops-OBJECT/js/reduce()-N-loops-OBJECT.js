"use strict";
console.log(`hello from reduce()-N-loops-OBJECT.js`);

// ================================= WARM UP
//
// Create a function, returnTotalSales, that takes in an array of sales data objects and
// returns the sum of all
// totalItemsSold properties. Assume all elements in the input array are valid sales
// data objects with a totalItemsSold
// property.
//
//     EXAMPLE...

const salesData = [
    {
        month: 'January',
        totalItemsSold: 0
    },
    {
        month: 'February',
        totalItemsSold: 5
    },
    {
        month: 'March',
        totalItemsSold: 2
    },
    {
        month: 'April',
        totalItemsSold: 10
    },
    {
        month: 'May',
        totalItemsSold: 30
    }
];

// returnTotalSales(salesData) // returns 47
console.log(`forEach ==================================================`);
const returnTotalSales = (salesData) => {
    let result = 0;
    salesData.forEach(month => {
        result += month.totalItemsSold;
    });
    return result;
};
console.log(returnTotalSales(salesData));

console.log(`reduce() ==================================================`);
const returnTotalSales1 = (salesData) => {
    const total = salesData.reduce((p, c) => {
        return p + c.totalItemsSold;
    }, 0);
    return total;
};
console.log(returnTotalSales1(salesData));

console.log(`for loop ==================================================`);
const returnTotalSales2 = (salesData) => {
    let result = 0;
    for (let i = 0; i < salesData.length; i++) {
        result += salesData[i].totalItemsSold;
    }
    return result;
};
console.log(returnTotalSales2(salesData));