(() => {

    console.log(`hello from return-negative.js`);

    function makeNegative(num) {
        // Code?

        // let numToString = num.toString();
        // let negativeStringSign = "-";
        // let numberStringPlaceholder = ``;

        if(num === 0) {
            return 0;
        }

        // if (num > 0) {
        //     numberStringPlaceholder = negativeStringSign + numToString;
        //     return Number(numberStringPlaceholder);
        // }
        //
        // if (num < 0) {
        //     numberStringPlaceholder = numToString.substring(1);
        //     return  Number(numberStringPlaceholder);
        // }

        if (num < 0) {
            return Math.abs(num);
        }

        if (num > 0) {
            return -num;
        }

    }

    console.log(makeNegative(9), `Expected -9`);

})();