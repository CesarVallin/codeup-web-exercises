"use strict";
console.log(`hello from arrayLecture.js, external JS`);

const names = ["Laura", "Sofia", "Raleigh", "Cesar"];

// Same thing to access last element of an array:
console.log(names.at(-1));
console.log(names[names.length - 1]);
//

for (let i = 0; i < names.length; i++) {
    console.log(i, names[i]);
}

// forEach method, uses a function, we are just passing an arrow fucntion here
names.forEach((name, i) => {
    console.log(name, i);
});


for (const name of names) {
    console.log(name);
}
