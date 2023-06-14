"use strict";
console.log(`hello from Loop-with-divs.js`);

let html = '';

const randomValue = () => {return Math.floor(Math.random() * 256)};

function randomRGB() {
    const color = `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
    return color;
}

for (let i = 1; i <= 10; i++) {
    html += `<div style="background-color: ${randomRGB()}">${i}</div>`;
}

document.querySelector('main').innerHTML = html;