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
export function renderPersonInfo (events) {
    const pushEvents = events.filter(event => {
        return event.type === "PushEvent";
    })
    console.log(pushEvents);
    console.log(pushEvents[0].actor);
    console.log(`The date & time of your last commit was:` )
    console.log(`Your last commit =>`, pushEvents[0].payload.commits[0].message);
}
