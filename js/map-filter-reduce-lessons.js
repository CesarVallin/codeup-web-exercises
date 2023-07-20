"use strict";
console.log(`hello from map-filter-reduce-lessons`);

(() => {

    const url = './data/houses.json'
    const options = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }
    fetch(url, options)
        .then(response => {
            return response.json();
        })
        .then(houses => { // or data
            console.log(houses); // or data
            // working with the houses array while it's available in this scope:
            // ------------------------------------------------------------------------------------------
            // Loop method
            // const housesTwoBedsPlus = [];
            // for (let house of houses) {
            //     const nmrOfBeds = parseFloat(house.beds);
            //     if (nmrOfBeds >= 2) {
            //         housesTwoBedsPlus.push(house);
            //     }
            // }
            // console.log(housesTwoBedsPlus);
            // ------------------------------------------------------------------------------------------
            let housesTwoBedsPlus = houses.filter(house => {
                // const nmrOfBeds = parseFloat(house.beds); // You could have also passed this variable below
                return parseFloat(house.beds) >= 5;
            });
            housesTwoBedsPlus = housesTwoBedsPlus.filter(house => {
                const nmrOfBaths = parseFloat(house.baths);
                return nmrOfBaths >= 2;
            })
            console.log(housesTwoBedsPlus);
        });



})();