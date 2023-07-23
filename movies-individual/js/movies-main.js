"use strict";
console.log(`hello from movies-main.js`);

// =======================================================================================================
// Async and await
// Functions
// async function getMovies (queryParam){
//     try {
//         const baseUrl = 'https://api.themoviedb.org/3/search/movie';
//         const queryString = `?query=${encodeURIComponent(queryParam)}&api_key=${TMDB_API}`;
//         const url = baseUrl + queryString;
//         const options = {
//             method: 'GET',
//             headers: {
//                 accept: 'application/json',
//                 Authorization: TMDB_API
//             }
//         }
//         const response = await fetch(url, options)
//         const movies = await response.json();
//         // const filteredMovies = movies.results.filter(movie => {
//         //     return movie.original_language === 'en' && movie.backdrop_path !== null;
//         // })
//         // HTML here??
//         return movies;
//     } catch(error) {
//         console.log(error);
//     }
// }
//
// // IIFE
// (async () => {
//     // Variables ......
//     const searchBar = document.querySelector('#search-bar');
//
//     // Event Listeners .....
//     searchBar.addEventListener('keyup', async(e) => {
//         if (e.keyCode === 13) {
//             console.log(searchBar.value);
//             const movies = await getMovies(searchBar.value);
//             searchBar.value = '';
//             console.log(`async & await, ALL keyup =>`, movies);
//             const filteredMovies = movies.results.filter(movie => {
//                 return movie.original_language === 'en' && movie.backdrop_path !== null;
//             });
//             console.log(`Filtered Results => `, filteredMovies);
//
//         }
//     });
//
// })();

// =======================================================================================================
// Fetch & .then

// GETTER
// Get Movies by Search function:
function getMoviesBySearch (queryParam) {
    const baseUrl = 'https://api.themoviedb.org/3/search/movie';
    const queryString = `?query=${encodeURIComponent(queryParam)}&api_key=${TMDB_API}`;
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
// IIFE...
(() => {
    // Variables
    const searchBar = document.querySelector('#search-bar');

    searchBar.addEventListener('keyup', (e) => {
        if(e.keyCode === 13) {
            console.log(searchBar.value);
            getMoviesBySearch(searchBar.value).then(moviesData => {
                searchBar.value = '';
                console.log(`Fetch & then => `, moviesData);
                const firstFilter = moviesData.results.filter((movie) => {
                    return movie.original_language === 'en' && movie.backdrop_path !== null;
                });
                console.log(`firstFilter => `, firstFilter);
            })
        }
    })

})();


// ---------------------------------------------------------------------------------------------------
// This gives me access to all the movies
// It was done with the discover filter, and the read access token
const urlDiscover = 'https://api.themoviedb.org/3/discover/movie';
const optionsDiscover = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TMDB_API_READ_ACCESS_TOKEN}`
    }
}

fetch(urlDiscover, optionsDiscover)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error);
    })
// ----------------------------------------------------------------------------------------------------

// This gives me access to all genres, genre id & genre name
// Turn this into a function? Declare it as a variable to use and map() corresponding genres?
const urlGenreList = 'https://api.themoviedb.org/3/genre/movie/list';
const optionsGenreList = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TMDB_API_READ_ACCESS_TOKEN}`
    }
}
fetch(urlGenreList, optionsGenreList)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error);
    })










