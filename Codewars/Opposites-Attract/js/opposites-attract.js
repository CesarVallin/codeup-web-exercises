console.log(`hello from opposites-attract.js`);

(() => {
    function lovefunc(flower1, flower2){
        // moment of truth
        if ((flower1 % 2 === 1 && flower2 % 2 === 0) || (flower1 % 2 === 0 && flower2 % 2 === 1)) {
            return true;
        }
        return false;
    }

})();