// MAPBOX-UTILITIES
export function initializeMap () {
    mapboxgl.accessToken = MAPBOX_TOKEN;

    const mapOptions = {
        container: 'map',
        style: 'mapbox://styles/mapbox/satellite-streets-v12',
        zoom: 5,
        center: [-103.349609, 20.659698],
    }
    return new mapboxgl.Map(mapOptions);
}
// -------------------------------------------------------------------------------------------------
// ZOOM FUNCTIONS:

// Function to zoom in:
export function zoomIn(map) {
    // need to pass map as parameter
    // console.log(`zoomIn clicked`);
    let currentZoom = map.getZoom();
    // console.log(currentZoom);
    map.setZoom(++currentZoom);
}
// -----------------------------------

// Function for zoom out:
export function zoomOut(map) {
    // need to pass map as parameter
    let currentZoom = map.getZoom();
    map.setZoom(--currentZoom);
}
// --------------------------------------

// Function reset zoom:
export function resetZoom(map) {
    // need to pass map as parameter
    map.setZoom(5);
}
// -------------------------------------------------------------------------------------------------
// Function to center and zoom on El Parian (restaurant)
export function elParianRest (map) { // need to pass map as parameter
    geocode('C. Juárez 68, Centro, 45500 San Pedro Tlaquepaque, Jal., Mexico', MAPBOX_TOKEN).then((data) => {
        console.log(data);
        map.setCenter(data);
        map.setZoom(17);
    });
}
// --------------------------------------
// Function to center and zoom on Cooper's BBQ
export function coopersBBQ (map) {
    geocode('604 W Young St, Llano, TX 78643, United States', MAPBOX_TOKEN).then((data) => {
        console.log(data);
        map.setCenter(data);
        map.setZoom(17);
    });
}

// --------------------------------------
// Function to center and zoom on Mattenga's Pizzeria
export function mattengasPizza (map) {
    geocode('6044 FM3009 Ste 290, Schertz, TX 78154, United States', MAPBOX_TOKEN).then((data) => {
        console.log(data);
        map.setCenter(data);
        map.setZoom(17);
    });
}

// ------------------------------------------------------------------------------------------------
// Functions to create markers and popups

// Ajax request -- With JS // 'getter function'
// request to map-restaurants.json
export function getRestaurants (map) {
    $.ajax(`data/map-restaurants.json`).done((restaurants) => {
        console.log(restaurants);

        renderRestaurants(restaurants, map);
    });
}

// Function rendering favorite restaurants // 'render function'

export function renderRestaurants (restaurants, map) {
    restaurants.forEach(restaurant => {
        const createDiv = document.createElement('div');
        createDiv.innerHTML = `
            <h1>${restaurant.name}</h1>
            <p>${restaurant.address}</p>
            <p>${restaurant.coordinates}</p>
            <p>Type : ${restaurant.type}</p>
        `;
        let popup =  new mapboxgl.Popup()
            .setLngLat(restaurant.coordinates)
            .setHTML(createDiv)
            .addTo(map)
    });
}