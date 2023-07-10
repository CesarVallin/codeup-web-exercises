"use strict"
console.log(`hello from runners.js`);

// / You are given an array of runner objects, where each object represents a
// runner with properties name, age, and lapTimes (in seconds). Write a
// function called getTopRunners that takes the runners array as input and
// returns an array of top runners. A runner is considered top if their
// average lap time is 50 seconds or faster. If there are no top runners in
// the input array, the function should return an empty array


// HINT: You might want to create a function called calculateLapTimeAverage
// that takes in an array of numbers and returns the average


// Input:
const runners = [
    { name: "Alice", age: 25, lapTimes: [50.5, 45.2, 48.8, 47.1] },
    { name: "Bob", age: 28, lapTimes: [55.2, 50.7, 53.3, 52.9] },
    { name: "Charlie", age: 24, lapTimes: [48.9, 46.3, 50.1, 49.5] },
    { name: "David", age: 27, lapTimes: [51.4, 50.2, 49.8, 52.3] },
    { name: "Eve", age: 26, lapTimes: [47.7, 45.9, 46.6, 48.3] },
];


// Function to calculate average time:
const calculateLapTimeAverage = (arrParam) => {
    let result = 0;
    for (let i = 0; i < arrParam.length; i++) {
        result += arrParam[i];
    }
    return result / arrParam.length;
};
console.log(calculateLapTimeAverage([50.5, 45.2, 48.8, 47.1]));



// Looping :
const getTopRunners = (runners) => {
    let topRunners = [];
    runners.forEach(runner => {
        console.log(runner.lapTimes);
        if (calculateLapTimeAverage(runner.lapTimes) <= 50) {
            topRunners.push(runner);
        }
    });
    return topRunners;
};
console.log(getTopRunners(runners));

// // Expected Output:
// [
//     { name: 'Alice', age: 25, lapTimes: [50.5, 45.2, 48.8, 47.1] },
//     { name: 'Charlie', age: 24, lapTimes: [48.9, 46.3, 50.1, 49.5] },
//     { name: 'Eve', age: 26, lapTimes: [47.7, 45.9, 46.6, 48.3] }
// ]



// BONUS: Each runner in the resulting array should be represented as an
// object containing only the name and age properties.

    // Try by establishing the actual object you want to push

// const getTopRunners1 = (param1) => {
//     for (let key in param1) {
//
//     }
// }

// // Expected Bonus Output:
//         [
//         { name: "Alice", age: 18 },
//             { name: "Charlie", age: 19 },
//             { name: "Eve", age: 17 }
//         ]