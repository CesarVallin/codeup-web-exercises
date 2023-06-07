"use strict";
console.log(`hello from Array-ppl-likes.js`);

let namesLiked = ["Laura", "Sofia", "Raleigh", "Cesar", "Nana", "Grandpa"];

function likes(names) {
    let counter = 0;
    for (let i = 0; i < names.length; i++) {
        counter += 1;
    }
    if (counter === 0) {
        return `no one likes this`;
    } else if (counter === 1) {
        return `${names[0]} likes this`;
    } else if (counter === 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else if (counter === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else if (counter > 3) {
        return `${names[0]}, ${names[1]} and ${counter - 2} others like this`
    }
}
console.log(likes(namesLiked));

//============================================================================================================
// Sample Test:
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;
//
// describe('example tests', function() {
//     it('should return correct text', function() {
//         assert.strictEqual(likes([]), 'no one likes this');
//         assert.strictEqual(likes(['Peter']), 'Peter likes this');
//         assert.strictEqual(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
//         assert.strictEqual(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
//         assert.strictEqual(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
//     });
// });