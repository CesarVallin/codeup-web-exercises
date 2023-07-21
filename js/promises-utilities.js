"use strict";
console.log(`hello from promises-utilities.js`);

// -----------------------------------------------------------------------------
// GETTER FUNCTION
export function getPerson(searchBar) {
    const userId = searchBar.value;
    const url = `https://api.github.com/users/${userId}/events`;
    const options = {
        method: 'GET',
        headers: {
            'Authorization': GIT_HUB,
        }
    }
    return fetch(url, options)
        .then(response => {
            return response.json()
        })
        .catch(error => {
            console.log(error);
        })
}
// -----------------------------------------------------------------------------
// RENDER FUNCTION
export function renderPersonInfo (user) {
    console.log(user);
    console.log(user[0].actor);
    console.log(`Your last commit =>`, user[0].payload.commits[0].message);
}
