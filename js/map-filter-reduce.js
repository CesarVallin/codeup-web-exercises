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
function arrOfUsersEmails(arrParam) {
    const usersEmails = arrParam.map(person => {
        return person.email;
    });
    return usersEmails;
}
console.log(arrOfUsersEmails(users));

// 4 Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
function totalYearsExperience(arrParam) {
    const total = arrParam.reduce((accum, currentVal) => {
        return accum + currentVal.yearsOfExperience;
    }, 0);
    return total;
}
console.log(totalYearsExperience(users));

// 5 Use .reduce to get the longest email from the list of users.
function getLongestEmail (arrParam) {
    const longestEmail = arrParam.reduce((champ, user) => {
        console.log(champ, user);
        if (user.email.length > champ.length) {
            champ = user.email
        }
        return champ;
    }, '');
    return longestEmail;
}
console.log(getLongestEmail(users));

// 6 Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
function getListOfUsernamesAsString(arrParam) {
    let userNameString = arrParam.reduce((user, person) => {
        user += `\n${person.name}`; // You could just return the user here
        return user;
    }, "Your teachers are: ");
    return userNameString;
}
console.log(getListOfUsernamesAsString(users));

// BONUS Use .reduce to get the unique list of languages from the list of users.
// function getUniqueListofLanguages(arrParam) {
//
// }

