"use strict";
console.log(`hello from split()-reverse()-join().js`);

/*
To reverse a string, use this code:
    split("").reverse().join(");
*/
// ================================================================================================================
/*
split("") WITH DELIMETER!!! even if blank!!
    Remember, the split method converts a string into an array, with the delimeter of your choice.
        This is a delimeter of where to split.
        If you just want to split every index-element of your string, simply pass this method with dot notation with
        a delimeter of empty string ""
 */

let stringy1 = "Cesar";
let stringyToArray = stringy1.split("");
console.log(stringyToArray);

// ================================================================================================================
/*
reverse()
    reverses the order of the array!
 */
console.log(stringyToArray.reverse());
// ================================================================================================================
/*
join("") WITH DELIMETER!!! even if blank!!
    join() joins/converts the array into a string with the delimeter of your choice.
    You have used this to join <li> elements.
    The delimeter is your choice, once again.  If you wish to simply join the array without any delimeter, simply
    pass this method with dot notation with a delimeter of empty string "".
 */
console.log(stringyToArray.join(""));
// ================================================================================================================
// Examples:

const str = "Apple";

let backwards = str.split("").reverse().join("");

console.log(backwards);

// ============================================================

const isPalindrome = (parameter1) => {
    let backwards = parameter1.split("").reverse().join("");
    if (parameter1.toLowerCase() == backwards.toLowerCase()) {
        return true;
    } else {
        return false;
    }
};
console.log(isPalindrome('Bob'));
console.log(isPalindrome('Apple'));
// ================================================================================================================
// This is more like the test example!!
const isPalindromeA = (parameter1) => {
    if (typeof parameter1 !== "string" || !isNaN(parameter1)) {
        return false;
    } else {
        const reverseParameter1 = parameter1.split("").reverse().join("");
        if (parameter1 == reverseParameter1) {
            return true;
        } else {
            return false;
        }
    }
};

console.log(isPalindrome('Bob'));
console.log(isPalindrome('Apple'));
