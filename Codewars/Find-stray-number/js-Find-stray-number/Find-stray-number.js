"use strict";
console.log(`Find-stray-number.js`);

const arrayAA = [1, 1, 2];
const arrayBB = [1, 2, 1];
const arrayCC = [2, 1, 1];
const arrayDD = [7, 12, 12];

const strayNum = (arrayParam) => {
    let misteryNumber;
    const sortedArr = arrayParam.sort((a, b) => {
        return a - b;
    });
    if (sortedArr.at(0) === sortedArr.at(1)) {
        misteryNumber = sortedArr.at(-1);
    } else if (sortedArr.at(-1) === sortedArr.at(-2)) {
        misteryNumber = sortedArr.at(0);
    }
    return misteryNumber;
};


console.log(strayNum(arrayAA), `Expected output is 2`);
console.log(strayNum(arrayBB), `Expected output is 2`);
console.log(strayNum(arrayCC), `Expected output is 2`);
console.log(strayNum(arrayDD), `Expected output is 7`);

// this variation is pretty similar to what you did:
/*
function stray(numbers) {
  numbers = numbers.sort();
  return numbers[0] == numbers[1] ? numbers[numbers.length-1] : numbers[0];
}
 */
// this one too:
/*
let stray = numbers => {
  numbers.sort();
  let result = numbers[0] === numbers[1] ? numbers[numbers.length - 1] : numbers[0]
  return result;
}
 */

// this one was good:
/*
function stray(numbers) {
		numbers.sort();
		if(numbers[0] == numbers[1]){
			return numbers.pop();
		}else{
			return numbers.shift();
		}
	  }
 */