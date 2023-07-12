"use strict";
console.log(`hello from runners2.js`);

// / You are given an array of runner objects, where each object represents a
// runner with properties name, age, and lapTimes (in seconds). Write a
// function called getTopRunners that takes the runners array as input and
// returns an array of top runners. A runner is considered top if their
// average lap time is 50 seconds or faster. If there are no top runners in
// the input array, the function should return an empty array


// HINT: You might want to create a function called calculateLapTimeAverage
// that takes in an array of numbers and returns the average


const runners = [
    { name: "Alice", age: 25, lapTimes: [50.5, 45.2, 48.8, 47.1] },
    { name: "Bob", age: 28, lapTimes: [55.2, 50.7, 53.3, 52.9] },
    { name: "Charlie", age: 24, lapTimes: [48.9, 46.3, 50.1, 49.5] },
    { name: "David", age: 27, lapTimes: [51.4, 50.2, 49.8, 52.3] },
    { name: "Eve", age: 26, lapTimes: [47.7, 45.9, 46.6, 48.3] },
];
//===================================================================================================
// Function to calculate average time:
const calculateLapTimeAverage = (arrParam) => {
    let result = 0;
    for (let i = 0; i < arrParam.length; i++) {
        result += arrParam[i];
    }
    return result / arrParam.length;
};
// console.log(calculateLapTimeAverage([50.5, 45.2, 48.8, 47.1]));
//===================================================================================================
const getTopRunners = (runnersArr) => {
    let topRunners = [];
    runnersArr.forEach(runner => {
        // console.log(runner.lapTimes);
        if (calculateLapTimeAverage(runner.lapTimes) <= 50) {
            topRunners.push(runner);
        }
    });
    return topRunners;
};
console.log(getTopRunners(runners));
console.log(runners);
// // Expected Output:
// [
//     { name: 'Alice', age: 25, lapTimes: [50.5, 45.2, 48.8, 47.1] },
//     { name: 'Charlie', age: 24, lapTimes: [48.9, 46.3, 50.1, 49.5] },
//     { name: 'Eve', age: 26, lapTimes: [47.7, 45.9, 46.6, 48.3] }
// ]
//===================================================================================================


// Refactor your code from yesterday's warmup to return just the
// top runner

// Expected output:
// { name: 'Eve', age: 26, lapTimes: [47.7, 45.9, 46.6, 48.3] }
// console.log(runners)
const getTopRunner = (runnersArr) => {
    let champion = runnersArr[0];
    for (let i = 0; i < runnersArr.length; i++) {
        if (calculateLapTimeAverage(runnersArr[i].lapTimes) < calculateLapTimeAverage(champion.lapTimes)) {
            champion = runnersArr[i];
        }
    }
    return champion;
};
console.log(getTopRunner(runners));

// ----------------------------------------------------------------
const sortRunnersFastSlow = (runnersArray) => {
    let runnersFastestToSlowest = [];
    runnersArray.forEach(runner => {
        runner.lapTimes = calculateLapTimeAverage(runner.lapTimes);
        runnersFastestToSlowest.push(runner);
    });
    const first = runnersFastestToSlowest.sort((a, b) => {
        return a.lapTimes - b.lapTimes;
    });
    return runnersFastestToSlowest;
};
// console.log(sortRunnersFastSlow(runners));