"use strict";
console.log(`hello from konami.js`);

// Generating random number to use as rgb below in code.
const randomValue = () => {
    return Math.floor(Math.random() * 256);
};


// Generating a random color now.
const randomRgb = () => {
    return `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
};


let circles = $('.circle');
console.log(circles);
let counter = 0;
function colorful() {
    // console.log(counter, `affected by setInterval`);
    if (counter % 2 === 0) {
        $('.top-gap').css('margin-top', '50px');
    }
    if (counter % 2 !== 0) {
        $('.top-gap').css('margin-top', '40px');
    }
    if (counter % 5 === 0) {
        circles.css('border-radius', '10%');
    } else {
        circles.css('border-radius', '50%');
    }
    for (let i = 0; i < circles.length; i++) {
        $(circles[i]).css('background-color', randomRgb());
    }
    counter ++;
}

let intervalId = setInterval(colorful, 200);


// Konami event.keyCode :
/*
Up is 38
Down is 40
Left is 37
Right is 39
b is 66
a is 65
enter is 13
 */

// Practice runs:
// const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
// console.log(konamiCode.length);
// console.log(konamiCode.join(""));


const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
let userCode = [];


$(document).keyup(function(event){
    console.log(event.keyCode);
    userCode.push(event.keyCode);
    console.log(konamiCode);
    console.log(userCode);
    // if (!konamiCode.join("").includes(userCode.join(""))) {
    //     console.log(`not a match`);
    //     userCode = [];
    // }
    for (let i = 0; i < userCode.length; i++) {
        if (userCode[i] !== konamiCode[i]) {
            console.log(`not a match`);
            userCode = [];
        }
        if (konamiCode.join("") === userCode.join("")) {
            console.log(`Yay, matching codes!`);
            alert(`You have added 30 lives!!!`);
            $('#horizontal-rule').css('border', '3px solid red');
            $('body').css('background-color', 'black');
            $('.circle').css('border', 'solid white 0.3rem')
            $('#head-title').css('color', 'red');
            $('#head-title').css('text-shadow', '2px 2px white');
        }
    }
});











