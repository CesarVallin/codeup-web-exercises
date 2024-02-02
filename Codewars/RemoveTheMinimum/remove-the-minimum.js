(() => {
    console.log(`Hello from remove-the-minimum.js`);

    function removeSmallest(numbers) {

        if (numbers.length == 0) {
            let emptyResult = [];
            return emptyResult;
        }

        let min = Math.min(...numbers);
        let resultArr = [];
        let minCounter = 0;

        for (let i = 0; i < numbers.length; i++) {

            if(numbers[i] === min) {
                minCounter ++;
            }
            if (numbers[i] !== min) {
                resultArr.push(numbers[i]);
            }
            if (numbers[i] === min && minCounter > 1) {
                resultArr.push(numbers[i]);
            }

        }

        return resultArr;
    }

    let arr1 = [2,2,1,2,1];
    let arr2 = [5,3,2,1,4];
    let arr3 = [];

    console.log(removeSmallest(arr1));
    console.log(removeSmallest(arr2));
    console.log(removeSmallest(arr3));

})();