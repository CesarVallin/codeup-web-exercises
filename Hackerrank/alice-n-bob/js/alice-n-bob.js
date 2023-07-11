"use strict";
console.log(`hello from alice-n-bob.js`);

let alice1 = [17, 28, 30];
let bob1 = [99, 16, 8];
console.log(alice1);
console.log(bob1);
console.log(`expected output :`, [2, 1]);
function compareTriplets(a, b) {
    let aliceTotal = 0;
    let bobTotal = 0;
    for (let i = 0; i < a.length; i++) { // assume length is same.  Keep in mind, if your condition is a number, it would a hard coded value
        console.log(i, a[i], `alice`);
        console.log(i, b[i], `bob`);
        if (a[i] > b[i]) {
            aliceTotal += 1;
        }
        if (a[i] < b[i]) {
            bobTotal += 1;
        }
    }
    return [aliceTotal, bobTotal];
}

console.log(compareTriplets(alice1, bob1));