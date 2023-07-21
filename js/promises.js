console.log(`hello from promises.js`);

import {getPerson, renderPersonInfo} from './promises-utilities.js'


// (() => {
//     // Variables ...
//     const searchBar = document.querySelector('#search-input');

//     // Event listeners ...
//     searchBar.addEventListener('keyup' ,(e) => {
//         if (e.keyCode === 13) {
//             console.log(searchBar.value);
//             getPerson(searchBar).then(events => {
//                 renderPersonInfo(events);
//             })
//             searchBar.value = '';
//         }
//     })
// })();
// =====================================================================================================
// promises- async
(async () => {
    // Variables...
    const searchBar = document.querySelector('#search-input');

    // Event listeners...
    searchBar.addEventListener('keyup' ,async(e) => {
        if (e.keyCode === 13) {
            console.log(searchBar.value);
            const events = await getPerson(searchBar);
            renderPersonInfo(events);
            searchBar.value = '';
        }
    })
})();