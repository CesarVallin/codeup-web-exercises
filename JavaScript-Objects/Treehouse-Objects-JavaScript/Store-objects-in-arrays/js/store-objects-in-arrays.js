"use strict";
console.log(`hello from store-objects-in-arrays.js`);

// 1. Create an array to hold quiz questions and answers
    // index 0 of each array within the questions array is the question.
    // index 1 of each array within the questions array is the answer.

        // const questions = [
        //     ['How many planets are in the Solar System?', '8'],
        //     ['How many continents are there?', '7'],
        //     ['How many legs does an insect have?', '6'],
        //     ['What year was JavaScript created?', '1995']
        // ];

        /*
        One of the best parts about using objects is that they let you use distinct names to identify individual items.
        This makes objects more efficient to work with than arrays

        So let's convert this array of arrays into an array of objects,
                that way you can use property names to identify the data
         */

        // now turn it into an array of objects:
const questions = [
        { question: 'How many planets are in the Solar System?', answer: '8'},
        { question: 'How many continents are there?', answer: '7'},
        { question: 'How many legs does an insect have?', answer: '6'},
        { question: 'What year was JavaScript created?', answer: '1995'}
];
        // Notice all are separated by commas, just like an array.

console.log(questions);



// 2. Store the number of questions answered correctly
const correct = [];
const incorrect = [];
let correctAnswers = 0;

for ( let i = 0; i < questions.length; i++ ) {
        let question = questions[i].question; // used to be: questions[i][0];
        let answer = questions[i].answer; // used to be: questions[i][1];
        let response = prompt(question); // as you can see, the program is accessing each question, which comes from the questions array, which holds objects within it.        We have declared a variable, and assigned a value to it.  As we are looping, the variable -question- holds the value of -questions[i].question- , which basically holds the value of each question key*value's value.

        if ( response === answer ) {
                correctAnswers++;
                correct.push(question);
        } else {
                incorrect.push(question);
        }
}




