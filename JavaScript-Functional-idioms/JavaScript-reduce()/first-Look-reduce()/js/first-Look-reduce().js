"use strict";
console.log(`hello from first-Look-reduce().js`);

console.log(`number array: ================================================`);

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulation, currentNumber) => {
    console.log(`Accumulation: ${accumulation}`);
    console.log(`Current: ${currentNumber}`);
    console.log(`Accumulation + Current`);
    return accumulation + currentNumber;
}, 0);

console.log(sum);

const sumA = numbers.reduce((p, c) => {
    console.log(`Previous: ${p}`);
    console.log(`Current: ${c}`);
    console.log(`p + c`);
    return p + c;
}, 0);

console.log(sumA);
// ========================================================================================================
console.log(`salesPeople {object} ================================================`);

const salesPeople = [
    {name: 'Jim Halpert', sales: 100},
    {name: 'Dwight Schrute', sales: 50},
    {name: 'Andy Bernard', sales: 150},
];

const totalSales = salesPeople.reduce((accum, person) => {
    console.log(`Accum: ${accum}`);
    console.log(`Sales: ${person.sales}`);
    console.log(`accum + person.sales`);
    return accum + person.sales;
}, 0);
console.log(totalSales);

const totalSalesA = salesPeople.reduce((p, c) => {
    console.log(`Previous: ${p}`);
    console.log(`Current: ${c.sales}`);
    console.log(`p + c.sales`);
    return p + c.sales;
}, 0);
console.log(totalSalesA);
// ========================================================================================================
