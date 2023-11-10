console.log(`hello from needle-in-haystack.js`);

function findNeedle(haystack) {
    // your code here
    let message = `found the needle at position `;
    let index;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === "needle") {
            index = i;
            break;
        }
    }
    return message + index;
}

console.log(findNeedle())