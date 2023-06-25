"use strict";
console.log(`hello from Array-phoneNumber.js`);

let phoneNumberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// =================================================================================================================
const areaCode = (numbers) => {
    let value = numbers.slice(0, 3)
    value.unshift("(");
    value.push(")");
    return value.join("");
};
console.log(areaCode(phoneNumberArr));

const first3 = (numbers) => {
    let value = numbers.slice(3, 6);
    return value.join("");
};
console.log(first3(phoneNumberArr));

const last4 = (numbers) => {
    let value = numbers.slice(-4);
    return value.join("");
};
console.log(last4(phoneNumberArr));

// =================================================================================================================
function createPhoneNumber(numbers){
    return `${areaCode(phoneNumberArr)} ${first3(phoneNumberArr)}-${last4(phoneNumberArr)}`
}
console.log(createPhoneNumber(phoneNumberArr));


