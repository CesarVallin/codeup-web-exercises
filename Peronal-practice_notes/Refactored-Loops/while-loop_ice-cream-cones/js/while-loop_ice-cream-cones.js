"use strict";
console.log(`hello from while-loop_ice-cream-cones.js, external JS`);

function sellMyCones() {
    let allCones = Math.floor(Math.random() * 50) + 50; // Initializer expression
    console.log(`I have ${allCones} at the start of my day`);
    do{
        const customerCones = Math.floor(Math.random() * 5) + 1;
        if(allCones - customerCones < 0) {
            console.log(`I can't sell ${customerCones} cones, I only have ${allCones}`);
            continue;
        } else if(allCones - customerCones === 0) {
            console.log('Yay! I sold them all!');
            break;
        } else {
            console.log(`${customerCones} cones sold.`);
            allCones -= customerCones; // iteration-modifier expression
        }
        console.log(`I now have ${allCones} cones left`);
    } while(true); // condition expression.
}
sellMyCones();
/*
Notice that there are conditional paths before the iteration-modifier expression takes place.
Also, in this loop, only one condition kicks you out of it, which is the conditional statement with the -break- keyword.
 */



// ======================================================================================================
/*
As opposed to:
 */
// =========================================================================================================
// Not in use:
// function randomNum50to100(){
//     return Math.floor(Math.random() * ((100 - 50) + 1)) + 50;
// }
/*
Not in use, the example itself executes a new random number with every do-while iteration!
 */
// // =========================================================================================================
// function randomNum1to5A() {
//     return Math.floor(Math.random() * 5) + 1;
// }
// //=========================================================================================================
//
// // allCones is your startIndex expression!!!
// let allCones = Math.floor(Math.random() * ((100 - 50) + 1)) + 50;
// // --- --- --- --- --- --- --- --- ---
// let randomNum1to5;
// do {
//     console.log(`${allCones} cone(s) in stock --- --- ---`);
//     randomNum1to5 = Math.floor(Math.random() * 5) + 1; // used as your iteration-modifier expression further down!!!
//     console.log(`${randomNum1to5} cone order`);
//
//
//     if (allCones < randomNum1to5) {
//         console.log(`Cannot sell you ${randomNum1to5} cones, I only have ${allCones}`);
//         continue;
//         // Meaning this condition is met, continue to the next iteration.
//
//     } else if ((allCones - randomNum1to5) === 0) {
//         console.log(`Yay, I sold them all!`);
//         //Loop will stop at this point anyways, because your while(condition) will resolve to false.
//         // This statement will execute first, then you will exit the loop.
//     }
//
//     allCones -= randomNum1to5; // iteration-modifier expression!!!
//
// } while (allCones > 0); // condition expression, to resolve true or false!!!!
//
//         // Condition set up to keep loop running while you still have more than 0 cones in stock.
//         // Once you no longer have more than 0 cones in stock, loop exits.

//=========================================================================================================
