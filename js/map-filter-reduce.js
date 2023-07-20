"use strict";
console.log(`hello from map-filter-reduce.js`);

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// 2 Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
function atLeast3Languages(arrParam) {
    const filterAtLeast3Langs = arrParam.filter(person => {
        return person.languages.length > 2;
    });
    return filterAtLeast3Langs;
}

console.log(atLeast3Languages(users));

// 3 Use .map to create an array of strings where each element is a user's email address
// function arrOfUsersEmails()
