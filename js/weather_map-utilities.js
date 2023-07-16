// WEATHER_MAP-UTILITIES

// Define a variable to store the previous marker
    // To be used to check and remove previous markers
let previousMarker = null;
// Define a variable to store the current marker coordinates.
    // To be used to update ajax request
let markerLatLng = null;

// -------------------------------------------------------------------------------------------------
// Test function:
export function sayHello() {
    console.log(`hello from weather_map-utilities.js`);
}

// -------------------------------------------------------------------------------------------------
// Initialize map function:
export function initializeMap() {
    mapboxgl.accessToken = MAPBOX_TOKEN;

    const mapOptions = {
        container: 'map',
        style: 'mapbox://styles/mapbox/satellite-streets-v12',
        zoom: 3,
        center: [-95.712891, 37.09024],
    }
    return new mapboxgl.Map(mapOptions);
}

// ------------------------------------------------------------------------------------------------
// Searchbox function... enables search data for 'getter' function
export function searchBox(map, searchBoxInput) {
    geocode(searchBoxInput.value, MAPBOX_TOKEN).then((data) => {
        console.log(data);
        // EXECUTES weatherAPI based on searchBoxInput ////////////////////////////////////////////////////////
        // Remove the previous marker (if it exists)
        if (previousMarker) {
            previousMarker.remove();
        }
        // Create one marker
        let marker = new mapboxgl.Marker({
            draggable: true
        })
            .setLngLat(data)
            .addTo(map)
        console.log(marker.getLngLat(), `Yay, typed`);

        // Update the previousMarker variable to the current marker
        previousMarker = marker;

        map.flyTo({
            center: data,
            zoom: 10
        });
        // ----------------------------------------------------
        // AJAX request based on 'markerLatLng' - (current marker positioning)
        markerLatLng = marker.getLngLat();
        getMapAndWeather(markerLatLng);
        // ----------------------------------------------------
        // weatherAPI executed based on searchBoxInput ////////////////////////////////////////////////////////
        // -----------------------------------------------------------
        // EXECUTES weatherAPI based on marker drag /-/-/-/-/-/-//-/-/-/-/-/-//-/-/-/-/-/-//-/-/-/-/-/-/
        marker.on('dragend', function () {
            // data = marker.getLngLat();
            map.flyTo({
                center: marker.getLngLat(),
                zoom: 10
            });
            console.log(marker.getLngLat(), `Yay, dragged`);
            // ----------------------------------------------------
            // AJAX request based on 'markerLatLng' - (current marker positioning)
            markerLatLng = marker.getLngLat();
            getMapAndWeather(markerLatLng);
            // ----------------------------------------------------
        })
        // weatherAPI executed based on marker drag  /-/-/-/-/-/-//-/-/-/-/-/-//-/-/-/-/-/-//-/-/-/-/-/-/
        // ----------------------------------------------------------
    });
}

// ------------------------------------------------------------------------------------------------
// Function getting map from Mapbox and weather from OpenWeatherMap ... 'GETTER FUNCTION'
function getMapAndWeather (markerLatLng) {
    $.ajax(`https://api.openweathermap.org/data/2.5/forecast?lat=${markerLatLng.lat.toString()}&lon=${markerLatLng.lng.toString()}&units=imperial&appid=${OPEN_WEATHER_APPID}`).done((weatherAPI) => {
        console.log(weatherAPI);
        console.log(weatherAPI.city.name, weatherAPI.city.country, `from weatherAPI`);
        renderWeather(weatherAPI);

    })
}
// ------------------------------------------------------------------------------------------------
// Function rendering weatherAPI, 'render function'...
function renderWeather(weatherAPI) {

    const dynamicName = document.querySelector('#dynamic-city');
    dynamicName.innerHTML = '';
    const dynamicNameDiv = document.createElement('div');
    dynamicNameDiv.innerHTML = `
        <div>
            <img>
            <p>${weatherAPI.city.name}... temp: ${weatherAPI.list[3].main.temp}</p>
            <p>${weatherAPI.city.country}</p>
        </div>
    `;
    dynamicName.appendChild(dynamicNameDiv);
}

