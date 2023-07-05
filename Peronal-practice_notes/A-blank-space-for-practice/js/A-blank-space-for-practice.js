"use strict";
console.log(`hello from A-blank-space-for-practice.js, external JS`);


// ========================================================================================================

var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

let disArray = [];
// coffees.forEach(coffee => {
//     coffee.name = coffee.name.split(" ");
//     console.log(coffee);
//     coffee.name.forEach(name => {
//         console.log(name);
//     })
//     coffee.name = coffee.name.join(" ");
//     console.log(coffee);
// });
console.log(disArray);

coffees.forEach(coffee => {
    // coffee.name = coffee.name.split(" ");
    coffee.name.split(" ").forEach(name => {
        console.log(name);

    });
});



