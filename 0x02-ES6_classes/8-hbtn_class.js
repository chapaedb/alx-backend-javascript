class HolbertonClass{
constructor(size, location){
    if(typeof size !== 'string'){
        throw new TypeError("Size should be number.");

    }
    if( typeof location !== 'string'){
        throw new TypeError("Location should be string.");
    }
    this._size = size;
    this._location = location;
}

get size() {
    return this._size;
    }

    // Getter for location
    get location() {
    return this._location;
    }

    // Override valueOf to return size
    valueOf() {
    return this._size;
    }

    // Override toString to return location
    toString() {
    return this._location;
    }
}