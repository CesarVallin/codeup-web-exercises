console.log(`hello from planets-string.js`);
(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
     let planetsStringA;
     planetsStringA = planetsArray.join("<br>");
     console.log(planetsStringA);
     document.write(planetsStringA);

     // to pass -planetsArray- variable, which stores an array.
     const undorderedPlanetList = (arrayParam) => {
         let planetStringB = arrayParam.join("</li><li>");
         return `<ul><li>${planetStringB}</li></ul>`;
     };
     console.log(undorderedPlanetList(planetsArray));
     document.write(undorderedPlanetList(planetsArray));

})();