"use strict";
console.log(`hello from login-form.js, external JS`);
// The variables below were used to test out access to form inputs:
    // let usernameInput = document.forms.login.username.value;
    // console.log(usernameInput);
    // let passwordInput = document.forms.login.password.value;
    // console.log(passwordInput);

// -------------------------------------------------------------------------------------------------------------------
// Create handler function for username <input value>:
/** Handler function for username <input value> event listener
 *  Retrieve and store username <input value>
 *  If username value < 5 characters, display message
 *  If username value > 20 characters, display message
 *  Else username meets length criteria, display message
 *  If username value includes(" ") a white space, display message that it must not
 */
// function updatedUsernameInput (){
//     let usernameInput = document.forms.login.username.value;
//     console.log(usernameInput, usernameInput.length);
//     if (usernameInput.length < 5){
//         console.log(`Username must be greater than 5 characters`);
//     } else if (usernameInput.length > 20) {
//         console.log(`Username must not exceed 20 characters`);
//     }else {
//         console.log(`Username meets length criteria`);
//     }
//
//     //
//     let blankSpace = usernameInput.includes(" ");
//     if (blankSpace) {
//         console.log(`Username input must not include a whitespace`);
//     }
// }
// // register the listener to record username <input value>:
// document.addEventListener("input", updatedUsernameInput);
// // invoke handler function for username <input value>:
// updatedUsernameInput();

/*
If you wanted to test out including white space at the beginning or at the end, try this:
usernameInput.includes(" ").at(0) || usernameInput.includes(" ").at(-1)
 */

// -------------------------------------------------------------------------------------------------------------------
/** Handler function for password <input value> event listener
 *  Retrieve and store password <input value>
 *  Retrieve and store username <input value>
 *  Create RexExp to regex.test() if password contains username - yields boolean value
 *  Utlize regex.test() outcome to create a condition, display message that password must not contain username
 *  If password value includes (" ") a white space, display message that it must not
 */
// Create handler function for password <input value>:
function updatedPasswordInput (){
    let passwordInput = document.forms.login.password.value;
    console.log(passwordInput);

    // let usernameInput = document.forms.login.username.value;
    // const regex = new RegExp(usernameInput);
    // const passContainsUser = regex.test(passwordInput);
    //
    // if (passContainsUser){
    //     console.log(`password must not include the username`);
    // }
    //
    // //
    // let blankSpace = passwordInput.includes(" ");
    // if (blankSpace) {
    //     console.log(`Password input must not include a whitespace`);
    // }


    const coffees = ['americano', 'americanoCharged', 'americanoDoubleCharged', 'latte', 'latte2', 'regular', 'mocha'];
    console.log(coffees);

    const fastSearchList = coffees.filter(coffee => {
        return passwordInput.substring(0, 2) === coffee.substring(0, 2);
    });

    // Do you need to try a more complete path first:
    // if (passwordInput.substring(0, passwordInput.length / 2) ... taking half of the typed input??

    // ============================================================

    console.log(fastSearchList); // Notice nothing displays before typing. can be a good opportunity for an if statement, if (null) {Be creative}
    console.log(fastSearchList.join(" "));

    // ============================================================

    // Also remember, if input is null or input.length === 0, display all.
    // Also consider, display all for select option.

    // for (let i = 0; i < coffees.length; i++) {
    //     if (passwordInput.substring(0, 2) === coffees[i].substring(0, 2)) {
    //         console.log(coffees[i]);
    //     }

        /* for consideration:
        if (passwordInput.substring(0, passwordInput.length - 2) === coffees[i].substring(0, coffees[i].length - 2)) {
            console.log(coffees[i]);
        }
        */

    // }
}
// register the listener to record password <input value>
document.addEventListener("input", updatedPasswordInput);
// invoke handler function for password <input value>:
updatedPasswordInput();



// NOTES:
/*
Instead of creating your a RegExp , a simpler approach would have been to utilize something like:
    password.includes(username)
 */





