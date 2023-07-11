"use strict";
console.log(`hello from jquery_faq.js`);

const descriptionEls = document.querySelectorAll('.invisible');
console.log(descriptionEls);

// for (let i = 0; i < descriptionEls.length; i++) {
//     descriptionEls[i].style.visibility = 'hidden';
// }

for (let description of descriptionEls) {
    description.style.visibility = 'hidden';
}


// Create a new element and store it in a variable:
const buttonEl = document.createElement('button');
// Create a text node and store it in a variable:
let buttonText = document.createTextNode('Display Definitions');
// Attach the new text node to the new element:
buttonEl.appendChild(buttonText);
// Find the position where the new element should be added:
const toggleDiv = document.querySelector('.DefButton');
// Insert the new element into its position:
toggleDiv.appendChild(buttonEl);
// logging your created button:
console.log(document.querySelector('button'));

const toggle = document.querySelector('button');
toggle.addEventListener('click', () => {
    for (let description of descriptionEls) {
        description.style.visibility = 'visible';
    }
});


for (let description of descriptionEls) {
    description.addEventListener('click', () => {
        description.style.visibility = 'hidden';
    })
}



// // jQuery:
//
// const defTerms = $('dt');
// for (let def of defTerms) {
//     $(def).on('click', () => {
//         $(def).css({
//             background: "yellow"
//         });
//     });
//     $(def).on('dblclick', () => {
//         $(def).css({
//             background: "unset"
//         });
//     });
// }

// // This is the other way, targeting each w/o a loop:
$('dt').on('click', (e) => {
    $(e.target).css('background-color', 'green');
});
$('dt').on('dblclick', (e) => {
    $(e.target).css('background-color', 'unset');
});



