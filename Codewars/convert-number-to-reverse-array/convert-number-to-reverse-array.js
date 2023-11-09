console.log(`hello from convert-number-to-reverse-array.js`);

function digitize(n) {
    //code here
    let numberString = n.toString();
    let numberArray = numberString.split("");
    let realNumbers = numberArray.map(Number);
    return realNumbers.reverse();
}