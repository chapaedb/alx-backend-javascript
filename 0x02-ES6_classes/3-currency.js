// /alx-backend-javascript/0x02-ES6_classes/3-currency.js

export default  class Currency {
constructor(code, name) {
    if (typeof code !== 'string' || typeof name !== 'string') {
    throw new TypeError('Both code and name must be strings.');
    }
    this._code = code;
    this._name = name;
}

// Getter for code
get code() {
    return this._code;
}

// Setter for code
set code(code) {
    if (typeof code === 'string') {
    this._code = code;
    } else {
    throw new TypeError('Code must be a string.');
    }
}

// Getter for name
get name() {
    return this._name;
}

// Setter for name
set name(name) {
    if (typeof name === 'string') {
    this._name = name;
    } else {
    throw new TypeError('Name must be a string.');
    }
}

// Method to display the full currency
displayFullCurrency() {
    return `${this._name} (${this._code})`;
}
}

