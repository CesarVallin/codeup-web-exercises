"use strict";
console.log(`hello from brainstorm.js`);

// ===============================================================================================
/*
Sorting coffees by id property on each individual object within the array.
Probably will not need the function.
 */
function renderCoffees1(coffees) {
    let html = '';
    let idSorted = coffees.sort((a, b) => {
        return a.id - b.id;
    });
    return idSorted;
}

console.log(renderCoffees1(coffees));

// ===============================================================================================
/*
Event listener within the search bar.
Also logic to conduct a fast search based on the first two typed letters.

 */

const searchBar = document.getElementById('search');
function updatedSearch() {
    let currentSearch = searchBar.value;
    console.log(currentSearch, currentSearch.length, typeof currentSearch);

    let fastSearchResults = [];

    coffees.forEach(coffee => {
        if (currentSearch.toLowerCase().substring(0, 1) === coffee.name.toLowerCase().substring(0, 1)) {
            fastSearchResults.push(coffee);
        }

        // This one works, with a little too much trouble!!:
        // if (coffee.name.toLowerCase().split(" ")[0] === currentSearch.toLowerCase() || coffee.name.toLowerCase().split(" ")[1] === currentSearch.toLowerCase()) {
        //     fastSearchResults.push(coffee);
        // }

        // This one works best:
        // if (coffee.name.toLowerCase().includes(currentSearch.toLowerCase())) {
        //     fastSearchResults.push(coffee);
        // }

    });
    console.log(fastSearchResults);
}

searchBar.addEventListener('input', updatedSearch);

console.log(coffees[2].name, typeof coffees[2].name, coffees[2].name.substring(0, 2));
console.log(coffees[1].name.split(" "));
console.log(coffees[2].name.split(" "));


