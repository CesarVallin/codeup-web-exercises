console.log(`hello from promises.js`);

import {getPerson, renderPersonInfo} from './promises-utilities.js'


(() => {
    // Variables ...
    const searchBar = document.querySelector('#search-input');


    // Event listeners ...
    searchBar.addEventListener('keyup' ,(e) => {
        if (e.keyCode === 13) {
            console.log(searchBar.value);
            getPerson(searchBar).then(events => {
                renderPersonInfo(events);
            })
            searchBar.value = '';
        }
    })


})();