console.log(`hello from promises.js`);

function getPerson(searchBar) {
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


(() => {
    // Variables ...
    const searchBar = document.querySelector('#search-input');



    // Event listeners ...
    searchBar.addEventListener('keyup' ,(e) => {
        if (e.keyCode === 13) {
            console.log(searchBar.value);
            getPerson(searchBar).then(user => {
                console.log(user);
                console.log(user[0].actor);
                console.log(`Your last commit =>`, user[0].payload.commits[0].message);
            })
            searchBar.value = '';
        }
    })


})();