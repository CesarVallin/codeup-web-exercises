(() => {
    "use strict";
    console.log(`hello from count-characters-in-string.js`);



// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
//
// What if the string is empty? Then the result should be empty object literal, {}.

    console.log(`String parameter: aba`);

    function count(string) {
        let disObject = {};
        let splitToArr = string.split("");
        for (let split of splitToArr) {
            console.log(split, typeof split); // Very important HERE!!!! see notes below
            if (typeof disObject[split] === 'undefined') { // Remember, you are iterating here!!! see notes below
                disObject[split] = 1;
            } else {
                disObject[split] += 1;
            }
        }
        return disObject;
    }
    console.log(count('aba'));
    console.log(count(''));

    let car = {};
    console.log(car);
    car["model"] = "camry";
    console.log(car);

    /*
    Declare your object{}, disObject{}
    You are first splitting the string into an array
    Then looping over your array.  Your array contents are strings.
    As you are looping, you are dynamically setting properties on disObject{}
    The properties are being set as follows:
        disObject[split]
            remember, `split` is a string, so bracket notation actually follows standards.
            The variable `split` represents the current character being processed.
        disObject[split] === 'undefined'
            during the loop, the function checks weather the current character `split` already exists as a key in the disObject{} object, using typeof disObject[split] === 'undefined'.
    If the character has not been defined within the disObject{} object, then it gets an initial value of 1.
    Else, it increases in value by 1.
     */




})();