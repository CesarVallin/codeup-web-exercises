
$(() => {

    // Global Variables
    const map = initializeMap();
    const marker = createMarker();
    const popup = createPopup();

    // ----------------------------------------------------------------------------------
    // Functions
    // Function that initializes the map
    function initializeMap() {
        mapboxgl.accessToken = MAPBOX_TOKEN;

        const mapOptions = {
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            zoom: 10,
            center: [-98.4916, 29.4252],
        }
        return new mapboxgl.Map(mapOptions);
    }
    // Function that creates a marker at Codeup
    function createMarker() {
        return new mapboxgl.Marker()
            .setLngLat([-98.4916, 29.4252])
            .addTo(map);
            // Instance methods of the Marker class
    }
    // Function that creates a popup
    function createPopup() {
        return new mapboxgl.Popup()
            .setLngLat([-98.4916, 29.4252])
            .setHTML(`
                <div>
                    <h1>Codeup</h1>
                    <p>We can pu anyting we want</p>
                </div>
            `);
    }
    // Function that brings me to Paris
    function goToParis () {
        geocode('Paris', MAPBOX_TOKEN).then((data) => {
            console.log(data);
            map.setCenter(data);
        })
    }

    // Function that uses reverses geocode
    // Takes the coordinates from the center of the map
    // and print on the sreen the address
    function findAndPrintAddress() {
        const coords = map.getCenter()
        // console.log(coords);
        reverseGeocode(coords, MAPBOX_TOKEN).then((data) => {
            console.log(data);
            document.querySelector('h1').innerHTML = `${data}`;
        })
    }

    // Function that uses geocode to take the string 'The Alamo, San Antonio'
    //
    function markAlamo () {
        geocode('The Alamo, San Antonio', MAPBOX_TOKEN).then((data) => {
            const alamoPopup = new mapboxgl.Popup()
                .setHTML(`<p>Remember the Alamo!</p>`);
            const alamoMarker = new mapboxgl.Marker()
                .setLngLat(data)
                .addTo(map)
                .setPopup(alamoPopup)
            alamoPopup.addTo(map);
        })
    }
    // ----------------------------------------------------------------------------------

    // Events
    document.querySelector('#geocode-button').addEventListener('click', goToParis)
    document.querySelector('#reverse-geocode-button').addEventListener('click', findAndPrintAddress);
    document.querySelector('#mark-alamo').addEventListener('click', markAlamo);


    // Runs when the program loads
    map.setZoom(1);
    marker.setPopup(popup);







});