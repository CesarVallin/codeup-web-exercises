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

// ------------------------------------------------------------------------------------------------------------
// 2 Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
function atLeast3Languages(arrParam) {
    const filterAtLeast3Langs = arrParam.filter(user => {
        return user.languages.length > 2;
    });
    return filterAtLeast3Langs;
}
console.log(atLeast3Languages(users));
// Outside of a function equivalent..
const threeLangs = users.filter(user => {
    return user.languages.length > 2;
});
console.log(threeLangs);
// ------------------------------------------------------------------------------------------------------------
// 3 Use .map to create an array of strings where each element is a user's email address
function arrOfUsersEmails(arrParam) {
    const usersEmails = arrParam.map(user => {
        return user.email;
    });
    return usersEmails;
}
console.log(arrOfUsersEmails(users));
// Outside of a function equivalent..
const userEmailArr = users.map(user => {
    return user.email;
});
console.log(userEmailArr);
// ------------------------------------------------------------------------------------------------------------
// 4 Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
function avgYearsExperience(arrParam) {
    const total = arrParam.reduce((accumulator, currentVal) => {
        return accumulator + currentVal.yearsOfExperience;
    }, 0);
    return total / arrParam.length;
}
console.log(avgYearsExperience(users));
// Outside of a function equivalent..
const avgExperience = users.reduce((accumulator, user, index) => {
    accumulator += user.yearsOfExperience;
    if ( (index + 1) === users.length ) {
        accumulator = accumulator / users.length;
    }
    return accumulator;
}, 0);
console.log(avgExperience);
// ------------------------------------------------------------------------------------------------------------
// 5 Use .reduce to get the longest email from the list of users.
function getLongestEmail (arrParam) {
    const longestEmail = arrParam.reduce((accumulator, user) => {
        console.log(accumulator, user);
        if (user.email.length > accumulator.length) {
            accumulator = user.email
        }
        return accumulator;
    }, '');
    return longestEmail;
}
console.log(getLongestEmail(users));
const longestEmail = users.reduce((accumulator, user) => {
    if (user.email.length > accumulator.length) {
        accumulator = user.email;
    }
    return accumulator;
}, '');
console.log(longestEmail);
// ------------------------------------------------------------------------------------------------------------
// 6 Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
function getListOfUsernamesAsString(arrParam) {
    let userNameString = arrParam.reduce((accumulator, person) => {
        if (person === arrParam[arrParam.length - 1]) {
            accumulator += `and ${person.name}.`
        } else {
            accumulator += `${person.name}, `; // You could just return the user here
        }
        return accumulator;
    }, "Your teachers are: ");
    console.log(arrParam[arrParam.length - 1]);
    return userNameString;
}
console.log(getListOfUsernamesAsString(users));
const usersListString = users.reduce((accumulator, user) => {
    if (user === users[users.length - 1]) {
        accumulator += `and ${user.name}.`
    } else {
        accumulator += `${user.name}, `
    }
    return accumulator;
}, "Your instructors are: ");
console.log(usersListString);
// ------------------------------------------------------------------------------------------------------------
// BONUS Use .reduce to get the unique list of languages from the list of users.
function getUniqueListofLanguages(arrParam) {
    const uniqueLanguageList = arrParam.reduce((accumulator, user) => {
        for (let language of user.languages) {
            accumulator.add(language);
        }
        return accumulator;
    }, new Set([]));
    return Array.from(uniqueLanguageList);
}
console.log(getUniqueListofLanguages(users));

function getUniqueListofLanguages2(arrParam) {
    const uniqueLanguages = arrParam.reduce((accumulator, user) => {
        for (let language of user.languages) {
            if (!accumulator.includes(language)) {
                accumulator.push(language);
            }
        }
        return accumulator;
    }, []);
    return uniqueLanguages;
}
console.log(getUniqueListofLanguages2(users));

function getUniqueListofLanguages3(arrParam) {
    const uniqueLanguages = arrParam.reduce((accumulator, user) => {
        for (let language of user.languages) {
            if(accumulator.includes(language)) {
                continue;
            } else {
                accumulator.push(language);
            }
        }
        return accumulator;
    }, []);
    return uniqueLanguages;
}
console.log(getUniqueListofLanguages3(users));

