"use strict";
console.log(`hello from A-blank-space-for-practice.js, external JS`);


// ========================================================================================================





function solution(number){
    let total = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            total += i;
        }
    }
    return total;
}

console.log(solution(10));






