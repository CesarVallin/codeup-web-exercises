"use strict";
console.log(`hello from movies-main.js`);

// =======================================================================================================
// Async and await
async function getMovies (queryParam){
    try {
        const baseUrl = 'https://api.themoviedb.org/3/search/movie';
        const queryString = `?api_key=${TMDB_API}&query=${encodeURIComponent(queryParam)}`;
        const url = baseUrl + queryString;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: TMDB_API
            }
        }
        const response = await fetch(url, options)
        const movies = await response.json();
        return movies;
    } catch(error) {
        console.log(error);
    }
}

(async () => {
    const searchTerm = 'Alien';
    const movies = await getMovies(searchTerm);
    console.log(`async & await =>`, movies);
})();
// =======================================================================================================
// Fetch & .then
// GETTER
function getMovies1 (queryParam) {
    const baseUrl = 'https://api.themoviedb.org/3/search/movie';
    const queryString = `?api_key=${TMDB_API}&query=${encodeURIComponent(queryParam)}`;
    const url = baseUrl + queryString;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: TMDB_API
        }
    }
    return fetch(url, options)
        .then(response => {
            return response.json();
        })
        .catch(error => {
            console.log(error);
        })
}

(() => {
    const searchTerm = 'The Lord of the Rings';
    getMovies1(searchTerm).then(movies => {
        console.log(`Fetch & then =>`, movies);
    })

})();










