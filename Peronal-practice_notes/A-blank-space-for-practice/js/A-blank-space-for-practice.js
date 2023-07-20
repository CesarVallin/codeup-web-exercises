"use strict";
console.log(`hello from A-blank-space-for-practice.js, external JS`);


// ========================================================================================================


/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    let emptyString = " ";
    let hash = '#';
    let counter = 0;
    for (let i = n; i > 0; i--) {
        counter += 1;
        if (i <= n) {
            console.log(emptyString.repeat(n - counter) + hash.repeat(counter));
        }
    }
}
staircase(6);
staircase(10);
staircase(15);



