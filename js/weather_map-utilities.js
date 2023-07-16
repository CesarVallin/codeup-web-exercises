// WEATHER_MAP-UTILITIES

// Define a variable to store the previous marker
    // To be used to check and remove previous markers
let previousMarker = null;
// Define a variable to store the current marker coordinates.
    // To be used to update ajax request
let markerLatLng = null;

// Define variable to clear five-dayParent div before next search
const fiveDayParentDiv = document.querySelector('#five-dayParent');



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
        // Clear fiveDayParentDiv before next search...
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
            // Clear fiveDayParentDiv before next search...
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
    fiveDayParentDiv.innerHTML = '';
    $.ajax(`https://api.openweathermap.org/data/2.5/forecast?lat=${markerLatLng.lat.toString()}&lon=${markerLatLng.lng.toString()}&units=imperial&appid=${OPEN_WEATHER_APPID}`).done((weatherAPI) => {
        console.log(weatherAPI);
        console.log(weatherAPI.city.name, weatherAPI.city.country, `from weatherAPI`);
        renderWeather(weatherAPI);

    })
}

// ------------------------------------------------------------------------------------------------
// Function rendering weatherAPI, 'render function'...
function renderWeather(weatherAPI) {
    // Rendering city name and image...
    const dynamicName = document.querySelector('#dynamic-city');
    dynamicName.innerHTML = '';
    const dynamicNameDiv = document.createElement('div');
    dynamicNameDiv.innerHTML = `
        <div>
            <div>
                <p>${weatherAPI.city.name}, ${weatherAPI.city.country}... temp: ${weatherAPI.list[0].main.temp}</p>
            </div>
            <div>
                <img src="../img/kids-meditate-removebg-preview-thisone.png" class="kids-image">
            </div>
        </div>
    `;
    dynamicName.appendChild(dynamicNameDiv);

    // Rendering 5 day forecast...
    const fiveDayParentDiv = document.querySelector('#five-dayParent');
    // ------------------------------
    let date, min, max;
    const minMaxTemps = returnMinMaxTemps(weatherAPI);
        minMaxTemps.forEach(singleDay => {
            // console.log(singleDay.date, `--- date`);
            date = singleDay.date;
            // console.log(singleDay.min, `--- min`, singleDay.max, `--- max`);
            min = singleDay.min;
            max = singleDay.max;
            console.log(date, `--- date`);
            console.log(min, `--- min`, max, `--- max`);
            let singleDayDivParent = document.createElement('div');
            singleDayDivParent.classList.add('col-2')
            singleDayDivParent.innerHTML = `
                <div id="single-day" class="text-center">
                    <p>${date}</p>
                    <p>${min} / ${max}</p>
                </div>
            `;
            fiveDayParentDiv.appendChild(singleDayDivParent);


        });


    let descrpt, descrptMain, windSpeed, humiditee, psi;
    weatherAPI.list.forEach((day, index) => {
        if (index % 8 === 0) {
            // general weather...
            // console.log(day.weather[0]);

            // description...
            // console.log(day.weather[0].main, day.weather[0].description);
            descrpt = day.weather[0].description;
            descrptMain = day.weather[0].main;
            // wind speed...
            // console.log(day.wind.speed, `--- wind speed`);
            windSpeed = day.wind.speed;
            // humidity...
            // console.log(day.main.humidity, `--- humidity`);
            humiditee = day.main.humidity;
            // pressure
            // console.log(day.main.pressure, `--- pressure`);
            psi = day.main.pressure;

            console.log(descrpt);
            console.log(descrptMain);
            console.log(windSpeed);
            console.log(humiditee);
            console.log(psi);
        }
    })



}
