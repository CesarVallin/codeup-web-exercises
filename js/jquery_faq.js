"use strict";
console.log(`hello from jquery_faq.js`);



// =========================================================================================================
// JS :
// ================================================
// Create a button:
// Create a new element and store it in a variable:
const buttonEl = document.createElement('button');
// Create a text node and store it in a variable:
let buttonText = document.createTextNode('Display Toggle');
// Attach the new text node to the new element:
buttonEl.appendChild(buttonText);
// Find the position where the new element should be added:
const toggleDiv = document.querySelector('.DefButton');
// Insert the new element into its position:
toggleDiv.appendChild(buttonEl);
// logging your created button:
console.log(toggleDiv.innerHTML);

// or:
// crate a new element:
const toggleLinkDiv = document.createElement('a');
// Create innerHTML for the element
toggleLinkDiv.innerHTML = `
    <a href="#">The Toggle Link</a>
`;
// Find the position where the new element should be added:
const bodyElement = document.querySelector('body');
// Insert the new element into its position:
bodyElement.appendChild(toggleLinkDiv);

// =========================================================================================================

// Getting all 'dd' elements
const ddEls = document.querySelectorAll('dd');
console.log(ddEls);
// Using toggle to add the class when it isn't there, and remove it when it is:
buttonEl.addEventListener('click', () => {
    for (let i = 0; i < ddEls.length; i++) {
        ddEls[i].classList.toggle('invisible');
    }
});
/*
Here, we are adding an event listener to 1 item, the 'button'.  It will conduct an action (the handler function) on a node list WHICH CONTAINS all 'dd' elements, thus the reason to loop within the handler function.
 */
//------------------------------------------------

// Getting all 'dt' elements
const dtEls = document.querySelectorAll('dt');
console.log(dtEls);
// Using toggle to add the class when it isn't there, and remove it when it is:
for (let i = 0; i < dtEls.length; i++) {
    dtEls[i].addEventListener('click', () => {
        dtEls[i].classList.toggle('highlighted');
    });
}
/*
Here, we are adding an event listener on a node list, WHICH CONTAINS all 'dt' elements.  Since we want to add an event listener to each one, the loop will be in the outer scope, and each event listener is delegated to each iteration of the loop.
 */

// =========================================================================================================
// JS Event delegation:
// Getting the 'dl' element
const dlElement = document.querySelector('dl');
console.log(dlElement);
// This one is a general for you to understand what is going on in the DOM: ---------------
dlElement.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.localName === 'dt') {
        e.target.classList.toggle('fancy');
    }
    if (e.target.localName === 'dd') {
        e.target.classList.toggle('fancy2');
    }
});
// No need for a loop, you are using e, e.target
// ----------------------------------------------------





// =========================================================================================================

// jQuery:

// const defTerms = $('dt');
// for (let def of defTerms) {
//     $(def).on('click', () => {
//         $(def).css({
//             color: "red"
//         });
//     });
//     $(def).on('dblclick', () => {
//         $(def).css({
//             color: "unset"
//         });
//     });
// }

// // // This is the other way, targeting each w/o a loop:
// $('dt').on('click', (e) => {
//     $(e.target).css('background-color', 'green');
// });
// $('dt').on('dblclick', (e) => {
//     $(e.target).css('background-color', 'unset');
// });

// ----------------------------------------------------------------------------------
// From walk through:

// jQuery...

// $('body').append(`
//     <a href="#">Toggle Invisibility</a>
// `);
//
// $('a').on('click', () => {
//     $('dd').toggleClass('invisible');
// });
//
// // BONUS
// $('dt').on('click', function() {
//     $(this).toggleClass('highlighted')
// });



