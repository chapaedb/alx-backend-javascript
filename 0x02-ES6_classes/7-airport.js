class Airport{
    constructor(name, code){
        if(typeof name !== "string"){
            throw new TypeError("Name must be a string.");

        }
        if(typeof code !== "string"){
            throw new TypeError("Name must be a string.");
        }

        this._name = name;
        this._code = code;
    }

}

const airportSF = new Airport('San Francisco Airport', 'SFO');
console.log(airportSF);
console.log(airportSF.toString());