import Building from "./5-building";

class SkyHighBuilding extends Building{
    constructor(sqft, floors){
        this._sqft = sqft;
        this._floors = floors;
    }
    get sqft(){
        return this._sqft;
    }
    get floors(){
        return this._floors;
    }
    evacuationWarningMessage(){
        return Evacuate `slowly the ${this._floors} floors`;
    }
}