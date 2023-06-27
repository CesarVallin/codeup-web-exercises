"use strict";
console.log(`hello from Categorize-New-Member.js`);

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open.
// They would like your help with an application form that will tell prospective members which
// category they will be placed.
//
//     To be a senior, a member must be at least 55 years old and have a handicap
//     greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player
//     the lower the handicap.
//
//     Input
// Input will consist of a list of pairs. Each pair contains information for a single
// potential member. Information consists of an integer for the person's age and an
// integer for the person's handicap.
//
//     Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating
// whether the respective member is to be placed in the senior or open category.

// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

console.log(`for..of loop ==========================================================`);
function openOrSenior(data){
    let output = [];
    for (const element of data) {
        if (element[0] >= 55 && element[1] > 7) {
            output.push("Senior");
        } else {
            output.push("Open");
        }
    }
    return output;
}

console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]));

console.log(`map() loop ==========================================================`);
const openOrSenior1 = (data) => {
    const output = data.map(element => {
        if (element[0] >= 55 && element[1] > 7) {
            return "Senior";
        } else {
            return "Open";
        }
    });
    return output;
};
console.log(openOrSenior1([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]));

console.log(`Object practice, this one is for learning ==========================================`);

const memberData = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]];
console.log(memberData);

const openOrSenior2 = (data) => {
    let members = {};
    for(let i = 0; i < data.length; i++) {
        console.log(i, data[i]);
            if (data[i][0] >= 55 && data[i][1] > 7) {
                members.senior = data[i];
            } else {
                members.open = data[i];
            }
    }
    return members;
};
/*
FOR LEARNING PURPOSES, YOU CANNOT HAVE ONE OBJECT - with a repeating property name.
    At this point, you will need an array of objects.
 */
console.log(openOrSenior2(memberData));

console.log(`Object practice, this one is right =================================================`);
const openOrSenior3 = (data) => {
    let members = [];
    for(let i = 0; i < data.length; i++) {
        console.log(i, data[i]);
        if (data[i][0] >= 55 && data[i][1] > 7) {
            members.push({senior: data[i]});
        } else {
            members.push({open: data[i]});
        }
    }
    return members;
};
console.log(openOrSenior3(memberData));






