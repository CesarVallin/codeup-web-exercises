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
            // Filter Method
            /*
            When do you use filter?
            WHEN YOU WANT TO FILTER OUT ELEMENTS FROM AN ARRAY BASED ON A CONDITION
            //  */
            let housesTwoBedsPlus = houses.filter(house => {
                // const nmrOfBeds = parseFloat(house.beds); // You could have also passed this variable below
                return parseFloat(house.beds) >= 5;
            });
            housesTwoBedsPlus = housesTwoBedsPlus.filter(house => {
                const nmrOfBaths = parseFloat(house.baths);
                return nmrOfBaths >= 2;
            })
            console.log(`Filtered houses: `,housesTwoBedsPlus);
            // ------------------------------------------------------------------------------------------
            // Map Method
            /*
            When do you use a map?
            WHEN YOU WANT TO TRANSFORM EACH ELEMENT IN AN ARRAY AND RETURN A NEW ARRAY WITH THE TRANSFORMED ELEMENTS
             */
            let housesPriceRange = houses.map(house => {
                const priceRange = 200_000;
                const canBuy = parseFloat(house.price) > priceRange ? 'Nope' : 'Yes!';
                const newValue = `Address: ${house.address} \nCan I afford it: ${canBuy}`;
                return newValue;
            });
            for (let house of housesPriceRange) {
                console.log(house);
            }

            // ------------------------------------------------------------------------------------------


        });



})();