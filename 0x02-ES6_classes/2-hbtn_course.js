// /alx-backend-javascript/0x02-ES6_classes/2-hbtn_course.js

class HolbertonCourse {
constructor(name, length, students) {
    if (typeof name !== 'string') {
    throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
    throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) {
    throw new TypeError('Students must be an array of strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
}

// Getter and setter for name
get name() {
    return this._name;
}

set name(newName) {
    if (typeof newName !== 'string') {
    throw new TypeError('Name must be a string');
    }
    this._name = newName;
}

// Getter and setter for length
get length() {
    return this._length;
}

set length(newLength) {
    if (typeof newLength !== 'number') {
    throw new TypeError('Length must be a number');
    }
    this._length = newLength;
}

// Getter and setter for students
get students() {
    return this._students;
}

set students(newStudents) {
    if (!Array.isArray(newStudents) || !newStudents.every(student => typeof student === 'string')) {
    throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
}
}
export default HolbertonCourse;