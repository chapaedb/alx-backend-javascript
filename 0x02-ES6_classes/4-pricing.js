import Currency from "./3-currency";

 class Pricing{
    constructor(amount,currency){
        if (typeof amount !== 'number') {
            throw new TypeError('Amount must be a number.');
        }
        if (!(currency instanceof Currency)) {
            throw new TypeError('Currency must be an instance of the Currency class.');
        }
        this._amount = amount;
        this._currency = currency;
    }
    get amount(){
        return this._amount;
    }
    set amount(amount){
        if(typeof amount === 'number'){
            this._amount = amount;
        }
        else{
            throw new TypeError("Amount must be number.")
        }
    }
    get currency(){
        return this._currency;
    }
    set currency(currency){
        if( currency  instanceof Currency){
            this._currency = currency;
        }
        else{
            throw new TypeError("Currency must be number.")
        }
    }
    displayFullPrice(){
        return `${this._amount} ${this._currency._name} (${this.currency._code})`;
    }
    static convertPrice(amount,conversionRate){
        if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
            throw new TypeError('Both amount and conversion rate must be numbers.');
        }
        return amount * conversionRate;
    }
}
