import { stringify } from "jest-matcher-utils";

export default class HolbertonCourse{
    constructor(name,length,students){
            this._name = _name;
        
            this._length = _length;
        
            this._students = [];
        
    }
    get name(){
        return this._name;
    }
    get length(){
        return this._length;
    }
    get students(){
        return this._students;
    }
    set name(newName){
        if(typeof newName === 'string'){
            this._name = newName;
        }
        else{
            throw new TypeError("Lenght must be a string.");
        }
    }
    set length(newLen){
        if(typeof newLen === 'number'){
            this._length = newLen;
        }
        else{
            throw new TypeError("Lenght must be a number.");
        }
    }

    set students(newStud){
        if(typeof newStud === 'string'){
            this._students.push(newStud); 
        }
        else{
            throw new TypeError("Student must be stringify.") ;  
        }
    }

}