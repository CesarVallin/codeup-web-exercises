import {
    initializeMap,
    zoomIn,
    zoomOut,
    resetZoom,
    elParianRest,
    getRestaurants,
    coopersBBQ, mattengasPizza
} from './mapbox-utilities.js'

(() => {
    // Variables...
    const map = initializeMap(); // declaring what map is!!
// Zoom btns:
    const zoomInBtn = document.querySelector('#zoom-in');
    const zoomOutBtn = document.querySelector('#zoom-out');
    const zoomResetBtn = document.querySelector('#zoom-reset');
// Restaurant btns:
    const elParianBtn = document.querySelector('#el-parian');
    const coopersBtn = document.querySelector('#coopers');
    const mattengasBtn = document.querySelector('#mattengas');
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

    // -------------------------------------------------------------------------------------------------

    // Function imported from mapbox-utilities.js
    getRestaurants(map);
})();