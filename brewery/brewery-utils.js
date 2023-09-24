
export class BreweryUtils {

    static async helloFromHere(){
        return `hello from BreweryUtils`;
    }

    static async getBrewryObject() {
        const url = `https://api.openbrewerydb.org/v1/breweries?by_state=texas`;
        const optionsBreweryObject = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        };
        try {
            const response = await fetch(url, optionsBreweryObject);
            const data = response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }

}