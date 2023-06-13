"use strict";
console.log(`hello from Loop-html-N-CSS.js`);


// Referencing the total colors up to 256
const randomValue = () => {return Math.floor(Math.random() * 256)};

function randomRGB() {
    const color = `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
    return color;
}

class ColorCircle {
    constructor(number, target){
        this.number = number;
        this.color = randomRGB();
        this.render(target);
    }
    render(target){
        const box = document.createElement('div');
        box.style.backgroundColor = this.color;
        box.innerHTML = `
        <span>
            ${this.number}
        </span>
        <button>Click Me!</button>
    `;
        box.addEventListener('click', ()=>{
            console.log(`you clicked circle #${this.number}`)
        });
        target.appendChild(box);
    }
}
let boxes = [];
for (let i = 1; i <= 10; i++) {
    const target = document.querySelector('main')
    let box = new ColorCircle(i, target);
    boxes.push(box);
}
console.log(boxes);

