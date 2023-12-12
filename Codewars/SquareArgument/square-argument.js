console.log(`hello from square-argument.js`);


/**
 *  Function Definitions:
 * */
function squareArgument (numberArgument) {
    return numberArgument * numberArgument;
}

// or

/**
 *  Function Expressions:
 * */
const squareArgumentExpressionResult = function (numberArgument) {
    return numberArgument * numberArgument;
};

// or

/**
 *  Function Constructor:
 * */
const squareArgumentFunction = new Function("numberArgument", "return numberArgument * numberArgument");

// or

/**
 *  Arrow function
 * */
const squareArgumentFunctionArrow = (numberArgument) => {
    return numberArgument * numberArgument;
}


console.log(`Function Definition: `, squareArgument(3));
console.log(`Function Expression: `, squareArgumentExpressionResult(3));
console.log(`Function Constructor: `, squareArgumentFunction(3));
console.log(`Arrow function: `, squareArgumentFunctionArrow(3));



