"use strict";
console.log(`hello from bonus1.js, external JS`);

/*
Bonus 1
Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
- Catch any invalid inputs.
- Write the logic using if/else ifs and then refactor using a switch case
 */
/* NOTES:
Note the difference between the return values of:
    a -cancel- in prompt() - yields null
        an -ok- in prompt() - captures your input for storage
    a -cancel- in confirm() - yields boolean false
        an -ok- in confirm() - yields a boolean true

Compare with codeup-web-exercises > js/conditionals.js
 */

/** useDayInput(dayParam) function declaration
 *  This function will later be used in the userInteraction() function, inside a conditional statement
 *  It will await an argument to take on its parameter, and execute or not based on conditions established there
 */

// Don't convert dayParam.toUpperCase() before (condition-statement). It will modify dayParam for the rest of the code
function useDayInput(dayParam) {
        switch (dayParam.toUpperCase()) {
            case `MONDAY`:
                console.log(`Mondays are tough!`);
                break;
            case `TUESDAY`:
                console.log(`Well, at least is Taco Tuesday!`);
                break;
            case `WEDNESDAY`:
                console.log(`Wednesdays are fine, halfway through the week!`);
                break;
            case `THURSDAY`:
                console.log(`Thursdays are great!`);
                break;
            case `FRIDAY`:
                console.log(`Fridays is when it all starts getting fun!`);
                break;
            case `SATURDAY`:
                console.log(`Saturdays are for fun, go outside & unwind!`);
                break;
            case `SUNDAY`:
                console.log(`Sunday is fun, right before the week starts!`);
                break;
            default:
                console.log(`I don't know about ${dayParam}, sounds like an interesting day...`);
        }
}

/** userInteraction() arrow function
 *  declare userInput, NO VALUE ASSIGNED
 *  prompt() asks user for input -variable favDay-
 *  ternary Operator:
 *      if favDay is clicked on -cancel- , favDay holds a value of null
 *      ternary Operator:
 *          conditional check for a favDay null value, assigns a boolean value to userInput
 *
 *  (favDay.length === 0) condition, checks to see if the user typed anything in the prompt()
 *
 *  Conditional statement w/ userInput boolean assigned value:
 *      if true {execute userDayInput(favDay) function}
 *      else {execute a message}
 */

const userInteraction = () => {
    let userInput;
    const favDay = prompt(`What is your favorite day of the week?`);
    console.log(favDay);
    (favDay === null) ? userInput = false : userInput = true;

    if (favDay.length === 0) { // checks to see if the user typed anything on the prompt()
        console.log(`Looks like you didn't type anything`);
    } else if (userInput) { // checks if the prompt() input is not null (if the user clicked -cancel-)
        useDayInput(favDay);
    } else {
        console.log(`Maybe next time, have a great day!`);
    }
};
userInteraction();