"use strict";
console.log(`hello from div-sauce-timer.js`);


const randomValue = () => {
    return Math.floor(Math.random() * 256)
};
const randomRGBstring = () => {
    return `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
};

const circleColorJS = document.getElementById('div-sauce-circle');

const funBtn = document.getElementById('funButton');
funBtn.addEventListener('click', () => {
    circleColorJS.innerHTML = '';
    circleColorJS.style['background-color'] = randomRGBstring();
    circleColorJS.style['border-radius'] = '50%';
    circleColorJS.style.border = 'solid black 0.3rem';
});

const noFunBtn = document.getElementById('notFunButton');
noFunBtn.addEventListener('click', () => {
    circleColorJS.innerHTML = 'No Fun :(';
    circleColorJS.style['background-color'] = 'grey';
    circleColorJS.style['border-radius'] = 'unset';
    circleColorJS.style.border = 'unset';
});