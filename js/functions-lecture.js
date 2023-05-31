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

// // local scope:
// function sayBye(){
//     const username = "bobby";
//     console.log("You will always see me " + username);
// }
// sayBye();
//
// console.log(username); // error, this is only local

// --------------------------------------------------------------------------------------------------------------------

// // Function delcaration
// function sayHello(){
//     console.log(`hello - function declaration`);
// }
// sayHello();
//
// // Function expression
// const sayHello1 = function(){
//     console.log(`hello - function expression`);
// };
// sayHello1();
//
// // arrow function
// const sayHello2 = () => {
//     console.log(`hello - arrow function`);
// };
// sayHello2();

// -------------------------------------------------------------------------------------------------------------------

// IIFE

// (function(){
//     const name = "Cesar";
//     console.log(`Hello ${name}`);
//
//     sayBye(name);
// })();
//
// function sayBye(parameter1){
//     console.log(`Bye ${parameter1}`);
// }


// const userTipPercentage = (parseFloat(prompt("How much would you like to tip as a whole percentage number?")))/100;
// const userBillTotal = parseFloat(prompt("How much does your bill cost?"));
// console.log(userTipPercentage, userBillTotal);



