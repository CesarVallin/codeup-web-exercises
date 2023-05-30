"use strict";
console.log(`hello from Updated_exercise_2-3.js`);
// ------------------------------------------------------------------------------------------------------------------

console.log(`Exercise 2 -------------------------------`);
let sample = "Hello Codeup";
console.log(sample, sample.length);
console.log(sample.toUpperCase());
console.log(sample.toLowerCase());
sample += " Students";
console.log(sample);
sample = sample.replace("Students", "Class");
console.log(sample);
console.log(sample.indexOf("c"));
console.log(sample.indexOf("C"));
console.log(sample.substring(sample.indexOf("C"), sample.indexOf("p") + 1)); // indexOf('p') + 1 , is an expression
console.log(sample.substring(sample.indexOf("C"), 12));

// ------------------------------------------------------------------------------------------------------------------

console.log(`Exercise 3 -------------------------------`);
console.log(`movies exercise --- --- ---`);
const moviesTotalPrice = (pricePerDayDollars, mermaidDays, bearDays, herculesDays) => {
    return pricePerDayDollars * (mermaidDays + bearDays + herculesDays);
};
moviesTotalPrice(3, 3, 5, 1);
console.log(moviesTotalPrice(3, 3, 5, 1));
console.log(`$ ${moviesTotalPrice(3, 3, 5, 1)}`);

console.log(`movies exercise (a) --- --- ---`); // same as above, w/o arrow function
let moviesPricePerDayDollars = 3;
let littleMermaidDays = 3;
let brotherBearDays = 5;
let herculesDaysA = 1;
let theTotalPrice = moviesPricePerDayDollars * (littleMermaidDays + brotherBearDays + herculesDaysA);
console.log(theTotalPrice);
console.log(`$ ${theTotalPrice}`);

// ------------------------------------------------------------------------------------------------------------------

console.log(`Exercise 3 -------------------------------`);
console.log(`contractor, 3 companies --- --- ---`);

// parameters in pair: gHour, gRate, aHour, aRate, fHour, fRate
// gHour - aHour - fHour : hours/week
// gRate - aRate - fRate : default parameters, rate/hour
const weeklyIncome = (gHour, gRate = 400, aHour, aRate = 380, fHour, fRate = 350) => {
    let totalWeeklyIncome = 0;
    let googleWeeklyIncome = gHour * gRate;
    totalWeeklyIncome += googleWeeklyIncome;
    let amazonWeeklyIncome = aHour * aRate;
    totalWeeklyIncome += amazonWeeklyIncome;
    let facebookWeeklyIncome = fHour * fRate;
    totalWeeklyIncome += facebookWeeklyIncome;
    return totalWeeklyIncome;
};
weeklyIncome(6, undefined, 4, undefined, 10, undefined);
console.log(weeklyIncome(6, undefined, 4, undefined, 10, undefined));
console.log(`$ ${weeklyIncome(6, undefined, 4, undefined, 10, undefined)}`);

console.log(`contractor, 3 companies (a) --- --- ---`);
let googleWeekRate = 6 * 400;
let amazonWeekRate = 4 * 380;
let facebookWeekRate = 10 * 350;
let totalWeeklyIncome = googleWeekRate + amazonWeekRate + facebookWeekRate;
console.log(totalWeeklyIncome);
console.log(`$ ${totalWeeklyIncome}`);

// ------------------------------------------------------------------------------------------------------------------

console.log(`Exercise 3 -------------------------------`);
console.log(`student enrollment --- --- ---`);
console.log(`random student enrollment. You can enroll if ((student count is < 20) && student conflict is 1)`);
const studentEnrollment = () => {

    // create a random number between 1 through 25
    // to be used as a comparison value on enrollment block conditional
    let randomStudentCount = Math.floor(Math.random() * 25) + 1;
    console.log(`random student count is : ${randomStudentCount}`);
    console.log(randomStudentCount);

    // create a random number between 0 or 1, to evaluate to true or false
    // to be used as a comparison value on enrollment block conditional
    let randomScheduleConflict = Math.floor(Math.random() * 2);
    console.log(`random schedule conflict is: ${randomScheduleConflict}`);
    console.log(!!randomScheduleConflict, randomScheduleConflict); // !!-to see boolean evaluation


    /* Omitted, better comparison choice above! same purpose below!

        // create a random number between 1 or 2 (two choices, -no schedule conflict- or -conflict-)
        // to be used as a comparison value on enrollment block conditional
        let randomScheduleConflict = Math.floor(Math.random() * 2) + 1;
        console.log(`random schedule conflict is: ${randomScheduleConflict}`);
        console.log(randomScheduleConflict);
        if (randomScheduleConflict === 1) {
            randomScheduleConflict = true;
            console.log(randomScheduleConflict);
        } else {
            randomScheduleConflict = false;
            console.log(randomScheduleConflict);
        }

    */


    // enrollment block conditional
    // conditional statment: student count -and- student conflict
    if ((randomStudentCount < 20) && randomScheduleConflict) { // randomScheduleConflict: number data-type evaluation to true or false
        console.log(`Looks like you can enroll in class`)
    } else {
        console.log(`Sorry you can't enroll at the moment`);
    }
};
studentEnrollment();


// ------------------------------------------------------------------------------------------------------------------





















