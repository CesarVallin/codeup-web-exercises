$(function () {
    // alert("the DOM is loaded");


    // =======================================================================================================
    // ID selectors
    // You can use .text() to specifically get the 'innerText' version of jQuery
    // let idContainer = $('#id-container').html();
    // alert(idContainer);
    //
    // let idCesar = $('#cesar').html();
    // alert(idCesar);
    // =======================================================================================================

    // =======================================================================================================
    // class selectors
    // jQuery version:
    // let codeUp = $('.codeup');
    // codeUp.css('border', '1px solid red');

    // // JS vanilla version:
    // Use querySelector & querySelectorAll instead of .getElementsByClass
    // const codeUp = document.querySelectorAll(".codeup");
    // codeUp.forEach(singleCodeUp => {
    //     singleCodeUp.style.border = '1px solid red';
    // });
    // =======================================================================================================

    // let listItems = $('li');
    // listItems.css('font-size', '20px');
    //
    // // Highlighting the following elements:
    // // $('h1').css('background-color', 'yellow');
    // // $('p').css('background-color', 'yellow');
    // // $('li').css('background-color', 'yellow');
    //
    //
    //
    // // jQuery statement to alert contents of <h1>
    // let heading1 = $('h1').html();
    // alert(heading1);
    //
    // Multiple selectors:
    // $('h1, p, li').css('background-color', 'yellow');

    // =======================================================================================================

    // -------------------------------------------------------------------------------------------------------
    // Handler functions:
    // function changeH1Color (e) {
    //     $(e.target).css('background-color', 'green');
    // }
    //
    // function paragraphFontSize () {
    //     $(this).css('font-size', '18px');
    // }
    //
    // // ==================================
    // // li's
    // function liToRed (e) {
    //     $(e.target).css('color', 'red');
    // }
    // function liNormal () {
    //     $(this).css('color', 'unset');
    // }
    // // ==================================
    //
    //
    // // Event listeners:
    // $('h1')
    //     .on('click', changeH1Color)
    //
    // $('p')
    //     .on('dblclick', paragraphFontSize)
    //
    // $('li')
    //     .on('mouseenter', liToRed)
    //     .on('mouseleave', liNormal)

    // -------------------------------------------------------------------------------------------------------

    // Same but All included in one function:

    $('h1').on('click', (e) => {
        $(e.target).css('background-color', 'green');
    });

    $('p').on('dblclick', (e) => {
        $(e.target).css('font-size', '18px');
    });

    $('li').on('mouseenter', (e) => {
        $(e.target).css('color', 'red');
    });

    $('li').on('mouseleave', (e) => {
        $(e.target).css('color', 'unset');
    });





});

