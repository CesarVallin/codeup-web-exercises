"use strict";
console.log(`hello from A-blank-space-for-practice.js, external JS`);

let arr1 = [3, 15, 6, 22];
function sumTwoSmallestNumbers(numbers) {
    let firstSmall;
    let secondSmall;
    for (let i = 0; i < numbers.length; i++) {
        firstSmall = Math.min(...numbers);
    }
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === firstSmall) {
            continue;
        } else {
            secondSmall = Math.min(...numbers);
        }
    } return `${firstSmall} and ${secondSmall}`;

}

console.log(sumTwoSmallestNumbers(arr1));
