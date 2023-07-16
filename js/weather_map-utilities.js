// WEATHER_MAP-UTILITIES


// Define a variable to store the previous marker
let previousMarker = null;

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
// Searchbox function 'getter function'
export function searchBox(map, searchBoxInput) {
    geocode(searchBoxInput.value, MAPBOX_TOKEN).then((data) => {
        console.log(data);

        // Remove the previous marker (if it exists)
        if (previousMarker) {
            previousMarker.remove();
        }

        let marker = new mapboxgl.Marker({
            draggable: true
        })
            .setLngLat(data)
            .addTo(map)
        data = marker.getLngLat();
        console.log(data, `Yay, typed`);

        // Update the previousMarker variable to the current marker
        previousMarker = marker;

        map.flyTo({
            center: data,
            zoom: 10
        });
        // AJAX request on search input...
        $.ajax(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.lat.toString()}&lon=${data.lng.toString()}&units=imperial&appid=${OPEN_WEATHER_APPID}`).done((weatherAPI) => {
            console.log(weatherAPI);
            console.log(weatherAPI.city.name, weatherAPI.city.country, `from input`);
            renderWeather(weatherAPI);



        })
        // -----------------------------------------------------------
        marker.on('dragend', function () {
            data = marker.getLngLat();
            map.flyTo({
                center: data,
                zoom: 10
            });
            data = marker.getLngLat();
            console.log(data, `Yay, dragged`);

            // AJAX request within dragged marker...
            $.ajax(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.lat.toString()}&lon=${data.lng.toString()}&units=imperial&appid=${OPEN_WEATHER_APPID}`).done((weatherAPI) => {
                console.log(weatherAPI);
                console.log(weatherAPI.city.name, weatherAPI.city.country, `from dragged`);
                renderWeather(weatherAPI);



            })
        })
        // ----------------------------------------------------------
    });
}

// ------------------------------------------------------------------------------------------------

// Function rendering weatherAPI, 'render function'...
function renderWeather(weatherAPI) {

    const dynamicName = document.querySelector('#dynamic-city');
    dynamicName.innerHTML = '';
    const dynamicNameDiv = document.createElement('div');
    dynamicNameDiv.innerHTML = `
        <div>
            <p>${weatherAPI.city.name}... temp: ${weatherAPI.list[3].main.temp}</p>
            <p>${weatherAPI.city.country}</p>
        </div>
    `;
    dynamicName.appendChild(dynamicNameDiv);
}

