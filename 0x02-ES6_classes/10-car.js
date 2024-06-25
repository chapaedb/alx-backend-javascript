// 10-car.js

const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

export default class Car {
constructor(brand, motor, color) {
this[_brand] = brand;
this[_motor] = motor;
this[_color] = color;
}

get brand() {
return this[_brand];
}

get motor() {
return this[_motor];
}

get color() {
return this[_color];
}

cloneCar() {
const constructor = this.constructor; // Get the current class constructor
return new constructor(this[_brand], this[_motor], this[_color]); // Create new instance of current class
}
}
