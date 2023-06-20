"use strict";
console.log(`hello from JavaScript-Classes.js`);

// Write a function, returnUserObject, that takes in three
// String arguments: a username, password, and email. The function should
// return a user object with username, password and email properties.
//
// returnUserObject('jreich', 'password123', 'jreich@email.com') // returns...
//
// {
//     username: 'jreich',
//         password: 'password123',
//     email: 'jreich@email.com'
// }
//
// Assume all inputs are non-empty strings. The order of the properties does not matter.

const returnUserObject = (username, password, email) => {
    return {
        username: username,
        password: password,
        email: email,
    }
};
console.log(returnUserObject('jreich', 'password123', 'jreich@email.com'));


/*
Check out mdn on JavaScript classes:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */

class User {
    constructor(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
}
let Cesar = new User('cesvallin', 'password', 'cesar.vallin@gmail.com');
console.log(Cesar);