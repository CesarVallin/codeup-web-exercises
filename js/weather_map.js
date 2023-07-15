

console.log(`hello from weather_map.js`);
import {sayHello, initializeMap, searchBox, getWeather} from './weather_map-utilities.js'

(() => {
    // Test exported function:
    sayHello();
    // -------------------------------------------------------------------------------------------------
    // Variables...
    const map = initializeMap();
    // Search input:
    const searchBoxInput = document.querySelector('#search-input');
    // Search button:
    const searchBtn = document.querySelector('#button-addon1');

    // -------------------------------------------------------------------------------------------------
    // Events:
    searchBtn.addEventListener('click', (e, ) => {
        searchBox(map, searchBoxInput);
        getWeather(map, searchBoxInput);
    })






})();