"use strict";
console.log(`hello from Min-Max-sum.js`);

let numArr = [1, 3, 5, 7, 9];

console.log(numArr.length); // the length of the full array
console.log(numArr.length - 1); // the length of the array minus 1
console.log(numArr[numArr.length -1]); // Accessing the last index.

function miniMaxSum(arr) {
    // Sorted min to maximum ----------------------------------------------
    let minToMax = arr.sort((a, b) => {
        return a - b;
    });
    console.log(minToMax, `minToMax`);
    let minChamp = 0;
    for (let i = 0; i < minToMax.length - 1; i++) {
        minChamp += minToMax[i];
        console.log(minToMax[i]);
    }
    console.log(minChamp)
    // Sorted max to min ----------------------------------------------
    let MaxToMin = arr.sort((a, b) => {
        return b - a;
    });
    console.log(MaxToMin, `MaxToMin`);
    let maxChamp = 0;
    for (let i = 0; i < MaxToMin.length - 1; i++) {
        maxChamp += MaxToMin[i];
        console.log(MaxToMin[i]);
    }
    console.log([minChamp, maxChamp].join(" "));

}
miniMaxSum(numArr);