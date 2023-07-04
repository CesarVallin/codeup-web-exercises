"use strict";
console.log(`hello from div-party-intervalTimers.js`);

// Generating random number to use as rgb below in code.
const randomValue = () => {
    return Math.floor(Math.random() * 256);
};

// Generating a random color now.
const randomRgb = () => {
    return `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
};

// Declaring variable to target circle divs & button
const partyCircles = document.getElementsByClassName('div-party-circle');
console.log(partyCircles); //
const noFunBtn = document.getElementById('noFunBtn');

// funBtn.addEventListener('click', () => {
//     for (let i = 0; i < partyCircles.length; i++) {
//         partyCircles[i].style['border-radius'] = '50%';
//         partyCircles[i].style['background-color'] = randomRgb();
//     }
// });


// Setting an interval timer:
let counter = 0;
function colorful(){
    for (let i = 0; i < partyCircles.length; i++) {
        partyCircles[i].style['border-radius'] = '50%';
        partyCircles[i].style['background-color'] = randomRgb();
        if (counter % 5 === 0) {
            partyCircles[i].style['border-radius'] = '10%';
        }
    }
    counter ++;
}
let intervalId = setInterval(colorful, 200);

// Cancelling timer!:
noFunBtn.addEventListener('click', () => {
    clearTimeout(intervalId);
});


