"use strict"
console.log(`hello from Friend-or-Foe.js`);

// Friend or Foe?

// Make a program that filters a list of strings and returns a list with only your friends name in it.
//
//     If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can
//     be sure he's not...
//
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
//
// i.e.
//
//     friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

console.log(`forEach loop & new Set() ===================================================`);
// Solved with function declaration:
function friend(friends){
        const friendsObj = new Set ();
        friends.forEach(friend => {
                if (friend.length === 4) {
                        friendsObj.add(friend);
                }
        });
        return Array.from(friendsObj);
}
console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]), `Expect Ryan & Yous`);

console.log(`forEach loop =============================================================`);
// Solved with a forEach loop:
        // Will push duplicates
const friendA = (friends) => {
        let friendsArr = [];
        friends.forEach(person => {
                if (person.length === 4) {
                        friendsArr.push(person);
                }
        });
        return friendsArr;
};
console.log(friendA(["Ryan", "Kieran", "Jason", "Yous"]), `Expect Ryan & Yous`);

console.log(`for loop =============================================================`);
// Solved with a for loop:
        // Will push duplicates
const friendAA = (friends) => {
        let friendsArr = [];
        for (let i = 0; i < friends.length; i++) {
                if (friends[i].length === 4) {
                        friendsArr.push(friends[i]);
                }
        }
        return friendsArr;
};
console.log(friendAA(["Ryan", "Kieran", "Jason", "Yous"]), `Expect Ryan & Yous`);

console.log(`reduce() ===============================================================`);
// Solved with reduce() method:
        // FYI... Your given input is an array
        // Will push duplicates
const friendBB = (friends) => {
        let friendsArr = [];
        friends.reduce((p, c) => {
                if (c.length === 4) {
                        friendsArr.push(c);
                }
        }, 0);
        return friendsArr;
}
console.log(friendBB(["Ryan", "Kieran", "Jason", "Yous"]), `Expect Ryan & Yous`);

console.log(`forEach & new Set() ========================================================`);
// Solved with new Set () -- object method:
        // Remember, only issue with this one is that it will not add duplicates to the new Set ();
        // Try it, any duplicates of the same string (data-type) will not be added.
const friendCC = (friends) => {
        const friendsObj = new Set ();
        friends.forEach(friend => {
                if (friend.length === 4) {
                        friendsObj.add(friend);
                }
        });
        return Array.from(friendsObj);
};
console.log(friendCC(["Ryan", "Kieran", "Jason", "Yous"]), `Expect Ryan & Yous`);

console.log(`for..of loop =============================================================`);
const friendDD = (friends) => {
        let friendsArr = [];
        for (const element of friends) {
                if (element.length === 4) {
                        friendsArr.push(element);
                }
        }
        return friendsArr;
};
console.log(friendDD(["Ryan", "Kieran", "Jason", "Yous"]), `Expect Ryan & Yous`);


console.log(`filter() ONLY ================================================================`);
// try replacing filter with map, it returns booleans.
const friendEE = (arrayParam) => {
        const friendsArray = arrayParam.filter(friend => {
                return friend.length === 4;
        });
        return friendsArray;
};
console.log(friendEE(["Ryan", "Kieran", "Jason", "Yous"]), `Expect Ryan & Yous`);


console.log(`for learning: incorrect use of map: ===============================================`);
const friendFF = (arrayParam) => {
        const friendsArray = arrayParam.map(friend => {
                if (friend.length === 4) {
                        return friend;
                }
        });
        return friendsArray;
};
console.log(friendFF(["Ryan", "Kieran", "Jason", "Yous"]), `Expect Ryan & Yous`);

/*
Great learning opportunity here:

Remember:
map():  transforms each element in the collection
filter(): filters our values, that is makes sure each element in the collection meets
        some criteria or passes some test.

 */






