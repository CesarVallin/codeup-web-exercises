"use strict";
console.log(`hello from functions-lecture.js, external JS`);

// let name1 = "Bob";
// function sayBye(name) {
//     return `bye ${name}`;
// }
// const functionRespon = sayBye(name1);
// console.log(functionRespon);

// function w/ parameter
// function sayHelloUser(usersUserName) {
//     console.log("wassup " + usersUserName);
// }
//
// // Invoking with an argument
// sayHelloUser("Kobe");
// sayHelloUser("Isaac");

// Global scope example:
// const username = "bobby";
// function sayBye(){
//     console.log("You will always see me " + username);
// }
// sayBye();

// local scope:
function sayBye(){
    const username = "bobby";
    console.log("You will always see me " + username);
}
sayBye();

console.log(username); // error, this is only local


