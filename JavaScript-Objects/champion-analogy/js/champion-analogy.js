"use strict";
console.log(`hello from champion-analogy`);

// ================================= WARM UP
//
//
// Write a function, returnLargestStudentCount, that takes in an array of classes returns
// the number of students in the largest class.
// Assume at least one class object will be present in the input array with students
// property set to a valid positive integer.

let classes = [
    {class: "6th grade history", students: 18},
    {class: "7th grade history", students: 20},
    {class: "8th grade history", students: 22},
    {class: "4th grade history", students: 30},
    {class: "10th grade history", students: 25}
];

// const returnLargestStudentCount = (classes) => {
//     const inOrder = classes.sort((a, b) => {
//         return b.students - a.students;
//     })
//     return inOrder[0].students;
// }
//
// console.log(returnLargestStudentCount(classes)); // returns 30

// =======================================================================================
/*
Champion analogy!
 */
const returnLargestStudentCount1 = (classes) => {
    let champion = 0;
    for (let i = 0; i < classes.length; i++) {
        if (champion < classes[i].students) {
            champion = classes[i].students;
        }
    }
    return champion;
}
console.log(returnLargestStudentCount1(classes));