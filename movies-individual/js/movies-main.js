"use strict";
console.log(`hello from movies-main.js`);

// =======================================================================================================
// Async and await

async function getMovies (queryParam){
    try {
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
        const response = await fetch(url, options)
        const movies = await response.json();
        const filteredMovies = movies.results.filter(movie => {
            return movie.original_language === 'en' && movie.backdrop_path !== null;
        })
        // HTML here??
        return filteredMovies;
    } catch(error) {
        console.log(error);
    }
}






(async () => {
    // Variables ......
    const searchBar = document.querySelector('#search-bar');

    // Event Listeners .....
    searchBar.addEventListener('keyup', async(e) => {
        if (e.keyCode === 13) {
            console.log(searchBar.value);
            const filteredMovies = await getMovies(searchBar.value);
            // Function rendering HTML??
            console.log(`async & await, ALL keyup =>`, filteredMovies);

        }
    });

})();













// =======================================================================================================
// Fetch & .then
// GETTER
// Get Movies by Search function:

// function getMoviesBySearch (queryParam) {
//     const baseUrl = 'https://api.themoviedb.org/3/search/movie';
//     const queryString = `?query=${encodeURIComponent(queryParam)}&api_key=${TMDB_API}`;
//     const url = baseUrl + queryString;
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: TMDB_API
//         }
//     }
//     return fetch(url, options)
//         .then(response => {
//             return response.json();
//         })
//         .catch(error => {
//             console.log(error);
//         })
// }
//
//
//
//
// //////////////////////////////////////////////////////////////////////////////////////////////////////////
// (() => {
//     const searchTerm = 'Star Wars';
//     getMoviesBySearch(searchTerm)
//         .then(moviesData => {
//         console.log(`Fetch & then ALL =>`, moviesData);
//
//         // -----------------------------------------------------------------------------------------------------
//         // `firstFilter`: English and backdrop_path
//         const firstFilter = moviesData.results.filter((movie) =>{
//             return movie.original_language === 'en' && movie.backdrop_path !== null;
//         });
//         console.log(`then first filter method =>`, firstFilter);
//
//         const genreIds = firstFilter.map(movie => {
//             return movie.genre_ids.toString();
//         });
//         console.log(genreIds);
//
//     })
//
// })();










