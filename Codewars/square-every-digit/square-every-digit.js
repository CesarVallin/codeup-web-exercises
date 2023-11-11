console.log(`hello from square-every-digit.js`);

function squareDigits(num){
    let digitString = num.toString();
    let digitArray = digitString.split("");
    let realNumberArray = digitArray.map(Number);

    let answer = ``;
    let additionalInteger = 0;
    for (const integer of realNumberArray) {
        let addition = 0;
        additionalInteger = integer * integer;
        answer += additionalInteger;
    }

    return Number(answer);
}