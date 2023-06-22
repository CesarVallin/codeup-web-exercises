"use strict";
console.log(`hello from UserScore-example1.js`);

// Sum Numbers

let array1 = [1, 5.2, 4, 0, -1];
let array2 = [2, 5.2, 0, 0, -1];
// function sum (numbers) {
//     "use strict";
//     return numbers.reduce((accum, current) => {
//         return accum + current;
//     }, 0);
// }

class UserScore {
    constructor(userName, array) {
        this.userName = userName;
        this.TotalScore = this.sum(array);
    }
    sum (numbers) {
        "use strict";
        return numbers.reduce((accum, current) => {
            return accum + current;
        }, 0);
    }
}

let cesar = new UserScore ('Cesar', array1);
let steve = new UserScore('Steve', array2);
console.log(cesar);
console.log(steve);
console.log(cesar.userName);
console.log(cesar.sum(array1));
console.log(steve.userName)
console.log(steve.sum(array2));