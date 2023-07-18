"use strict";
console.log(`hello from assessment-takeaways.js`);


// Write a function named isNegative that accepts a number and returns true or false based on whether the input is negative.
//
// isNegative(-1) // true
// isNegative(-5) // true
// isNegative(0) // false
// isNegative(6) // false

const isNegative = (number) => {
    return number < 0;
}

// Write a function named isTen that accepts a number and returns a boolean that indicates whether or not that number is equal to 10.
//
// isTen(1) // false
// isTen(10) // true
// isTen('10') // false

const isTen = (number) => {
    return number === 10;
}

// Write a function named double that accepts a number and returns the number doubled.
//
// double(5) // 10
// double(20) // 40

const double = (number) => {
    return number * 2;
}

// Write a function named remove9s that accepts an array of numbers and returns an array with all the same numbers except for 9.
//
//     remove9s([7, 8, 9, 10]) // [7, 8, 10]
// remove9s([1, 2, 3])     // [1, 2, 3]
// remove9s([9, 9, 9])     // []

function remove9s(arrParam) {
    let result = [];
    for (const arr of arrParam) {
        if (arr !== 9) {
            result.push(arr);
        }
    }
    return result;
}

// Write a function named average that accepts an array of numbers and returns the average of those numbers.
//
// average([1, 2, 3]) // 2
// average([4, 6, 8, 10, 12]) // 8
// average([1, 2]) // 1.5

function average(arrParam) {
    let added = arrParam.reduce((accum, currentVal) => {
        return accum + currentVal;
    })
    return added / arrParam.length;
}

// Write a function named countOdds that accepts an array of numbers and returns the number of odd numbers in the array.
//
// countOdds([1, 2, 3]) // 2
// countOdds([4, 6, 8, 10]) // 0
// countOdds([1, 2, 1, 1]) // 3

function countOdds(arrParam) {
    let counter = 0;
    for (const arr of arrParam) {
        if (arr % 2 !== 0) {
            counter += 1;
        }
    }
    return counter;
}

// Write a function named averageSales that accepts an array of objects where each object represents a person, and has a sales property. The function should return the average of every object's sales property.
//
// averageSales([
//     {name: 'Jim Halpert', sales: 100},
//     {name: 'Dwight Schrute', sales: 50},
//     {name: 'Andy Bernard', sales: 150},
// ])
// // 100

function averageSales(arrParam) {
    let total = [];
    arrParam.forEach(person => {
        total.push(person.sales);
    });
    return average(total);
}

// 8 Write a function named convertNameToObject that accepts a string that contains a first name and last name separated by a space character, and returns an object with properties firstName and lastName.
//
// convertNameToObject('Harry Potter') // {firstName: 'Harry', lastName: 'Potter'}
// convertNameToObject('Ron Weasley') // {firstName: 'Ron', lastName: 'Weasley'}

function convertNameToObject(stringParam) {
    let split = stringParam.split(" ");
    let personObject = {
        firstName: split[0],
        lastName: split[1]
    }
    return personObject;
}

// 9 Write a function named countVowels that accepts a string and returns the number of vowels in that string. (Don't worry about or count "y" as a vowel)
//
// countVowels('Hello, Codeup!') // 5
// countVowels('ABCDE!') // 2

function countVowels(stringParam) {
    let counter = 0;
    let stringToArray = stringParam.toLowerCase().split("");
    for (const string of stringToArray) {
        if (string === 'a'|| string === 'e'|| string === 'i'|| string === 'o'|| string === 'u') {
            counter += 1;
        }
    }
    return counter;
}

// 10 Write a function named analyzeWord. It should take in a string and return an object with information about the input word. The object returned should have the following properties:
//
//     word: the original word that was passed into the function
// numberOfLetters: the number of letters in the word
// numberOfVowels: the number of vowels in the word
// analyzeWord('codeup')
// // { word: 'codeup', numberOfLetters: 6, numberOfVowels: 3 }

function analyzeWord(stringParam) {
    let split = stringParam.split("");
    let wordObject = {
        word: stringParam,
        numberOfLetters: split.length,
        numberOfVowels: countVowels(stringParam)
    }
    return wordObject;
}



// =======================================================================================================

//11 Write a function named capitalizeName that accepts a string that is a first and last name separated by a space, and returns a string that that has the first and last names capitalized.
//
//     For this problem, you may assume that the function will only ever be called with a string that has two words separated by a single space.

// capitalizeName('ron weasley') // "Ron Weasley"
// capitalizeName('Harry Potter') // "Harry Potter"
// capitalizeName('Nathan drake') // "Nathan Drake"

function capitalizeName(stringParam) {
    let split1 = stringParam.split(" ");
        console.log(split1);
    // const firstName = split1[0];
    //     console.log(firstName.charAt(0), firstName.charAt(0).toUpperCase(), firstName.slice(1));
    // const firstNameCap = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    //     console.log(firstNameCap);
    // const lastName = split1[1];
    //     console.log(lastName.charAt(0), lastName.charAt(0).toUpperCase(), lastName.slice(1));
    // const lastNameCap = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    //     console.log(lastNameCap);
    // // return `${firstNameCap} ${lastNameCap}`;
    // for (let item of split1) {
    //     item = item.charAt(0).toUpperCase() + item.slice(1);
    // }
    return (loopArrAndCapitalize(split1));

}
capitalizeName('ron weasley');

console.log(capitalizeName('harry potter'));


function loopArrAndCapitalize(arrParam) {
    let result = [];
    for (let item of arrParam) {
        result.push(item.charAt(0).toUpperCase() + item.slice(1));
    }
    return result.join(" ");
}

console.log(loopArrAndCapitalize(["harry", "potter"]));

// =======================================================================================================

let frontEndLogic = "JavaScript";
console.log(frontEndLogic.charCodeAt(0)); // Not to get confused with charAt
console.log(frontEndLogic.charAt(0));
console.log(frontEndLogic[0]); // This is not an array, it is still a string, however strings are still indexable, using this syntax will allow you to replace calls such as charAt().  It can be more concise and readable.
console.log(frontEndLogic);
console.log(Array.prototype.join.call(frontEndLogic, " "));

