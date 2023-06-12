"use strict";
console.log(`hello from Loop-html-N-CSS.js`);

let html = '';


// Referencing the total colors up to 256
const randomValue = () => {return Math.floor(Math.random() * 256)};

function randomRGB() {
    const color = `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
    return color;
}

for (let i = 1; i <= 10; i++) {
    html += `<div style="background-color: ${randomRGB()}">${i}</div>`;
}

document.querySelector('main').innerHTML = html;