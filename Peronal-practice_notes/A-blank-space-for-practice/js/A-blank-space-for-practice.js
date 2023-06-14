"use strict";
console.log(`hello from A-blank-space-for-practice.js, external JS`);


// ========================================================================================================
// Build Tower

function towerBuilder(nFloors) {
    let maxFloor = (nFloors * 2) - 1;
   let pyramid = [];
    let arr = [];
    for (let i = 0; i < maxFloor; i ++) {
        arr.push(`*`);
    }
    for (let i = 0; i < nFloors; i++) {
        pyramid.push(arr.join(""));
    }
    pyramid.forEach(function(value){
        console.log(value);
    });
}

towerBuilder(6);


