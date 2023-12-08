console.log(`hello from minmax.js`);

(() => {

    function minMax(arr){

        let minimum = arr[0];
        let maximum = arr[0];

        for (const num of arr) {
            if (num <= minimum) {
                minimum = num;
            }
            if (num >= maximum) {
                maximum = num;
            }
        }

        return [minimum, maximum];
    }

})();