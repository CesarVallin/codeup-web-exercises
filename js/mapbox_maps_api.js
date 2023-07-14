import {
    initializeMap,
    zoomIn,
    zoomOut,
    resetZoom,
    elParianRest,
    getRestaurants,
    coopersBBQ, mattengasPizza, searchBox
} from './mapbox-utilities.js'

(() => {
    // Variables...
    const map = initializeMap(); // declaring what map is!! Very important to go first!!
// Zoom btns:
    const zoomInBtn = document.querySelector('#zoom-in');
    const zoomOutBtn = document.querySelector('#zoom-out');
    const zoomResetBtn = document.querySelector('#zoom-reset');
// Restaurant btns:
    const elParianBtn = document.querySelector('#el-parian');
    const coopersBtn = document.querySelector('#coopers');
    const mattengasBtn = document.querySelector('#mattengas');
// Search btn:
    const searchBtn = document.querySelector('#searchBtn');
// Search box:
    const searchBoxInput = document.querySelector('#searchBox');

    // -------------------------------------------------------------------------------------------------
    // Events:
// Zoom events:
    zoomInBtn.addEventListener('click', ()=>{
        zoomIn(map); // need to pass map as parameter
    });

    zoomOutBtn.addEventListener('click', ()=>{
        zoomOut(map); // need to pass map as parameter
    });

    zoomResetBtn.addEventListener('click', () => {
        resetZoom(map); // need to pass map as parameter
    });

// Restaurant events:
    elParianBtn.addEventListener('click', () => {
        elParianRest(map); // need to pass map as parameter
    });

    coopersBtn.addEventListener('click', () => {
        coopersBBQ(map);
    });

    mattengasBtn.addEventListener('click', () => {
        mattengasPizza(map);
    })

// Search event:
        // Experimental, it works!!!
//     searchBoxInput.addEventListener('input', (e) => {
//         console.log(e.target.value);
//     })
//         // Experimental, it works!!!
//         searchBtn.addEventListener('click', (e) => {
//             console.log(searchBoxInput.value);
//         })

    searchBtn.addEventListener('click', (e) => {
        searchBox (map, searchBoxInput);
    })

    // -------------------------------------------------------------------------------------------------

    // Function imported from mapbox-utilities.js
    getRestaurants(map);


})();