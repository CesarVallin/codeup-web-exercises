const getPerson =(id = 1) => {
    // ------------------------------------------------------------------
    // endpoint in API
    const url = `https://swapi.dev/api/people/${id}/`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
     return fetch(url, options)// return the entire fetch outside of the function
        .then((response) => {
            return response.json();
        })
         .catch(error => { // put catches on every fetch
             console.log(error);
         });
    // ------------------------------------------------------------------
};

const getFilm = (url) => {
    // ------------------------------------------------------------------
    const filmUrl = url;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    }
    return fetch(url, options)// fetch another API for the film
        .then((response) => {
            return response.json();
        })
        .catch(error => {
            console.log(error);
        })
    // ------------------------------------------------------------------
};


(()=>{ // IIFE (Immediately Invoked Function Expression)

        getPerson(1).then((person) => {
            console.log(person);
            getFilm(person.films[0]).then(film => {
                console.log(film);
            })
        });




})();