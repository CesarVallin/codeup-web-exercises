"use strict";
console.log(`hello from dom-warmups.js`);

(() => {
    // -------------------------------------------------------------------------------
    const bkgColorBtn = document.querySelector('#backg-color');
    // JS: set background-color to green... event listener click on button
    bkgColorBtn.addEventListener('click', () => {
        document.querySelector('body').style["background-color"] = 'green';
    })
    // jQuery: unset background.... on method , dblclick on button
    $('#backg-color').on('dblclick',() => {
        $('body').css('background-color', 'unset');
    })
    // -------------------------------------------------------------------------------


})();