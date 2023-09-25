import{BreweryUtils} from './brewery-utils.js';

(async() => {

    const test = await BreweryUtils.helloFromHere();
    console.log(test);

    const breweryObject = await BreweryUtils.getBrewryObject();
    console.log(breweryObject);
    

})();