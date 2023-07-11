"use strict";
console.log(`hello from factorials.js`);

function extraLongFactorials(n) {
    let counter = BigInt(1);
    for (let i = BigInt(n); i > 0; i--) {
        counter *= i;
    }
    // console.log(counter);
    return counter.toString();
}

console.log(extraLongFactorials(25));
console.log(`expected: `, BigInt(15511210043330985984000000));
console.log(`expected: `, 15511210043330985984000000n);

