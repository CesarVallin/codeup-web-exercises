"use strict";
console.log(`hello from loop-with-html.js`);

const displayLoop = () => {
    const main = document.querySelector(`main`);
    let htmlSpace = '';
    for (let i = 1; i <=10; i++) {
        htmlSpace += `<div>${i}</div>`;
        console.log(htmlSpace);
    }
  main.innerHTML = htmlSpace;
};

displayLoop();