"use strict";
console.log(`hello from JavaScript-filter.js`);

// Friend or Foe?

// Make a program that filters a list of strings and returns a list with only your friends name in it.
//
//     If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours!
//     Otherwise, you can be sure he's not...
//
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
//
// i.e.
//
//     friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.


console.log(`only used filter() ==============================`);
/*
friends is the param
 */
const friend = (friends) => {
    const fourLetter = friends.filter(function(friend) {
        return friend.length === 4;
    });
    return fourLetter;
};

console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]), `Expect ['Ryan', 'Yous']`);

console.log(`using for..of loop ==============================`);

const friend1 = (friends) => {
    let fourLetter = [];
    for (const peekaboo of friends) {
        if (peekaboo.length === 4) {
            fourLetter.push(peekaboo);
        }
    }
    return fourLetter;
};
console.log(friend1(["Ryan", "Kieran", "Jason", "Yous"]), `Expect ['Ryan', 'Yous']`);