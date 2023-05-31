"use strict";
console.log(`hello from login-form.js, external JS`);
// The variables below were used to test out access to form inputs:
    // let usernameInput = document.forms.login.username.value;
    // console.log(usernameInput);
    // let passwordInput = document.forms.login.password.value;
    // console.log(passwordInput);



// register the listener to record username input
document.addEventListener("input", updatedUsernameInput);
// Create handler function:
function updatedUsernameInput (){
    let usernameInput = document.forms.login.username.value;
    console.log(usernameInput, usernameInput.length);
    if (usernameInput.length < 5){
        console.log(`Username must be greater than 5 characters`);
    } else if (usernameInput.length > 20) {
        console.log(`Username must not exceed 20 characters`);
    }else {
        console.log(`Username meets length criteria`);
    }

    //
    let blankSpace = usernameInput.includes(" ");
    if (blankSpace) {
        console.log(`Username input must not include a whitespace`);
    }
}
updatedUsernameInput();


// register the listener to record password input
document.addEventListener("input", updatedPasswordInput);
// Create handler function:
function updatedPasswordInput (){
    let passwordInput = document.forms.login.password.value;
    console.log(passwordInput);

    let usernameInput = document.forms.login.username.value;
    const regex = new RegExp(usernameInput);
    const passContainsUser = regex.test(passwordInput);

    if (passContainsUser){
        console.log(`password must not include the username`);
    }

    //
    let blankSpace = passwordInput.includes(" ");
    if (blankSpace) {
        console.log(`Password input must not include a whitespace`);
    }
}
updatedPasswordInput();



// NOTES:
/*
Instead of creating your a RegExp , a simpler approach would have been to utilize something like:
    password.includes(username)
 */





