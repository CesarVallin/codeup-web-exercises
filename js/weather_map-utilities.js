// WEATHER_MAP-UTILITIES


// Initial attempt for markers...
let markers = [];
console.log(markers, markers.length);


// -------------------------------------------------------------------------------------------------
// Test function:
export function sayHello () {
    console.log(`hello from weather_map-utilities.js`);
}
// -------------------------------------------------------------------------------------------------
// Initialize map function:
export function initializeMap() {
    mapboxgl.accessToken = MAPBOX_TOKEN;

    const mapOptions = {
        container: 'map',
        style: 'mapbox://styles/mapbox/satellite-streets-v12',
        zoom: 4,
        center: [-95.712891, 37.09024],
    }
    return new mapboxgl.Map(mapOptions);
}
// ------------------------------------------------------------------------------------------------
// Searchbox function:
export function searchBox (map, searchBoxInput) {
    geocode(searchBoxInput.value, MAPBOX_TOKEN).then((data) => {
        console.log(data);

            // $.ajax(`https://api.openweathermap.org/data/2.5/forecast?lat=${data[1].toString()}&lon=${data[0].toString()}&units=imperial&appid=${OPEN_WEATHER_APPID}`).done((weatherAPI) => {
            //     console.log(weatherAPI);
            // });

        let marker = new mapboxgl.Marker()
            .setLngLat(data)
            .addTo(map)
        markers.push(marker);
        console.log(markers, markers.length);
        map.flyTo({
            center: data,
            zoom: 10
        });
    });

}
// ------------------------------------------------------------------------------------------------
// Ajax request, 'getter'
export function getWeather (map, searchBoxInput) {
    geocode(searchBoxInput.value, MAPBOX_TOKEN).then((data) => {
        console.log(data);
        $.ajax(`https://api.openweathermap.org/data/2.5/forecast?lat=${data[1].toString()}&lon=${data[0].toString()}&units=imperial&appid=${OPEN_WEATHER_APPID}`).done((weatherAPI) => {
            console.log(weatherAPI);
        });
    })
}


