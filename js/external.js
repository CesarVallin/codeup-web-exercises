
"use strict";

console.log(`Hello from external JavaScript`);

alert(`Welcome to my Website!`);

const userFavColor = prompt(`What is your favorite color?`);
alert(`Great, ${userFavColor} is my favorite color too!`);

// Movie Rental: ------------------------------------------------------------------------------------------------------
/*You have rented some movies for your kids: The little mermaid (for 3 days),
Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
If price for a movie per day is $3, how much will you have to pay?
 */

alert(`Movie Rental exercise`);

// capture input for little mermaid days rented:
const littleMermaidDays = prompt("Please enter the number of days little mermaid was rented");
let littleMermaidDaysNumber = Number(littleMermaidDays);
console.log(littleMermaidDaysNumber, typeof littleMermaidDaysNumber);

// capture input for Brother Bear days rented:
const brotherBearDays = prompt("Please enter the number of days Brother Bear was rented");
let brotherBearDaysNumber = Number(brotherBearDays);
console.log(brotherBearDaysNumber, typeof brotherBearDaysNumber);

// capture input for Hercules days rented:
const herculesDays = prompt("Please enter the number of days Hercules was rented");
let herculesDaysNumber = Number(herculesDays);
console.log(herculesDaysNumber, typeof herculesDaysNumber);

const dailyRentalRate = 3;
const calculateTotalMovieCharge = (mermaidDaysParam, brotherBearDaysParam, herculesDaysParam) => {
    let total = dailyRentalRate * (mermaidDaysParam + brotherBearDaysParam + herculesDaysParam);
    alert(`The total charge for the movies is: $${total}`);
};
calculateTotalMovieCharge(littleMermaidDaysNumber, brotherBearDaysNumber, herculesDaysNumber);

// Contractor: ------------------------------------------------------------------------------------------------------
/*
Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
 */

alert(`Contractor Exercise`);
// Google hours input -------------------- --------------------
const googleWeeklyHours = prompt(`GOOGLE- please enter the weekly hours for google`);
let googleWeeklyHoursNumber = Number(googleWeeklyHours);
console.log(googleWeeklyHoursNumber, typeof googleWeeklyHoursNumber);
// Google rate input
const googleRate = prompt(`GOOGLE- please enter your hourly rate`);
let googleRateNumber = Number(googleRate);
console.log(googleRateNumber, typeof googleRateNumber);
// Google weekly total
const googleWeeklyTotal = googleWeeklyHoursNumber * googleRateNumber;
console.log(googleWeeklyTotal);

// Amazon hours input -------------------- --------------------
const amazonWeeklyHours = prompt(`AMAZON- please enter the weekly hours for amazon`);
let amazonWeeklyHoursNumber = Number(amazonWeeklyHours);
console.log(amazonWeeklyHoursNumber, typeof amazonWeeklyHoursNumber);
// Amazon rate input
const amazonRate = prompt(`AMAZON- please enter your hourly rate`);
let amazonRateNumber = Number(amazonRate);
console.log(amazonRateNumber, typeof amazonRateNumber);
// Amazon weekly total
const amazonWeeklyTotal = amazonWeeklyHoursNumber * amazonRateNumber;
console.log(amazonWeeklyTotal);

// facebok hours input -------------------- --------------------
const facebookWeeklyHours = prompt(`FACEBOOK- please enter the weekly hours for facebook`);
let facebookWeeklyHoursNumber = Number(facebookWeeklyHours);
console.log(facebookWeeklyHoursNumber, typeof facebookWeeklyHoursNumber);
// Amazon rate input
const facebookRate = prompt(`FACEBOOK- please enter your hourly rate`);
let facebookRateNumber = Number(facebookRate);
console.log(facebookRateNumber, typeof facebookRateNumber);
// Amazon weekly total
const facebookWeeklyTotal = facebookWeeklyHoursNumber * facebookRateNumber;
console.log(facebookWeeklyTotal);

// function
function totalWeeklyIncomeCalc (company1, company2, company3) {
    return company1 + company2 + company3;
}
console.log(totalWeeklyIncomeCalc(googleWeeklyTotal, amazonWeeklyTotal, facebookWeeklyTotal));
alert(`Your weekly income is: $${totalWeeklyIncomeCalc(googleWeeklyTotal, amazonWeeklyTotal, facebookWeeklyTotal)}`);


// Student Enrollment: ------------------------------------------------------------------------------------------------------
/*
A student can be enrolled to a class only if the class is not full and the class schedule does not
conflict with her current schedule.
 */

alert(`Student Enrollment exercise`);

// create a random number between 1-25 to represent student's enrolled
let randomStudentCount = Math.floor(Math.random() * 25) + 1;
console.log(randomStudentCount);
alert(`There are ${randomStudentCount} students currently enrolled`);

// create a random number, either 0 or 1 to represent a conflicting schedule or not
let randomScheduleConflict = Math.floor(Math.random() * 2);
console.log(randomScheduleConflict, !!randomScheduleConflict);
alert(`The "no-schedule conflict" is: ${randomScheduleConflict}, ${!!randomScheduleConflict}`);

// conditional statement:
// studentCount parameter, to use with randomStudentCount variable, or your provided number
// fullclass parameter is a default parameter set to 20
// noScheduleConflict tests our truthy or falsy values from randomScheduleConflict variable,
    // or your provided values of 0 or 1.
const studentEnrollment = (studentCount, fullclass = 20, noScheduleConflict) => {
    if ((studentCount <= fullclass) && noScheduleConflict) {
        console.log(`looks like you can enroll in class`);
        alert(`looks like you can enroll in class`);
    } else {
        console.log(`Sorry you can't enroll at the moment`);
        alert(`Sorry you can't enroll at the moment`);
    }
};
studentEnrollment(randomStudentCount, undefined, randomScheduleConflict);


// Product Offer: -------------------------------------------------------------------------------------------------
/*
A product offer can be applied only if people buy more than 2 items, and the offer has not expired.
Premium members do not need to buy a specific amount of products.
Use the following code to follow the instructions below
*/
alert(`Product offer exercise`);
const itemCount = prompt(`Number of items purchased?`);
let itemCountNumber = Number(itemCount);
console.log(itemCountNumber, typeof itemCountNumber);

let itemCountForDiscount = 2;

// for offer active or expired. Random number either 1 or 2.
// boolean assignments within conditional statement
let active = Math.floor(Math.random() * 2) + 1;
console.log(active, `value before boolean conversion`);
if (active === 1) {
    active = !!active;
} else {
    active = !active;
}
console.log(active, typeof active);

let premCustomer = Math.floor(Math.random() * 2) + 1;
console.log(premCustomer, `value before boolean conversion`);
if (premCustomer === 1) {
    premCustomer = !!premCustomer;
} else {
    premCustomer = !premCustomer;
}
console.log(premCustomer, typeof premCustomer);

if (itemCount > itemCountForDiscount && active) {
    console.log(`More than 2 items, and discount is active: Discount applied`);
} else if (premCustomer) {
    console.log(`Premium member: Discount applied`);
} else {
    console.log(`No discount applied`);
}





















