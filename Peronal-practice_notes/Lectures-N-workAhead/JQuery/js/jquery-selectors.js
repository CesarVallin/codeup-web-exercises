"use strict";
console.log(`hello from jquery-selectors.js`);

$(() => {
    // =======================================================================================================
    // Selecting an id:
    // jQuery equivalent:
    let $idContainer = $("#id-container");
    $idContainer.css('background-color', 'red');
    //
    // // JS equivalent:
    // let idContainer = document.querySelector("#id-container")
    // idContainer.style.backgroundColor = "blue";


    // =======================================================================================================
    // Selecting a class:
    // ======================================================
    // You can type it like this, or assign it to a variable.
    // $(".title").css('color', 'purple');
    // ======================================================
    let $classTitle = $(".title");
    $classTitle.css('color', 'purple');

    // Same thing with JS:
    let titleElements = document.querySelectorAll('.title');
    console.log(titleElements);
    titleElements.forEach(titleElements => {
        titleElements.style.color = 'blue';
    });

    // =======================================================================================================
    // Use jQuery to select all 'li' elements
    $("li").css('color', 'pink');


    // =======================================================================================================
    // Use jquery to select multiple selectors
    $('h1, p, .highlight').css('font-weight', 'bold');

    // =======================================================================================================
    // Select everythihng, chaining ...
    $('*')
        .css('outline', '1px solid lightblue')
        .css('font-weight', 'bold')
    ;







    // =======================================================================================================
    // Using jquery to check for a value
    // $('[data-id="5"]')
});



