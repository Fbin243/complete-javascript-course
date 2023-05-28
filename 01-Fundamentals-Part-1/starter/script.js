'use strict';
function calcSum(ope1, ope2) {
  return ope1 + ope2;
}

console.log(calcSum(2, 3));

// Function expression
const calcSum2 = function (ope1, ope2) {
  return ope1 + ope2;
}

calcSum2(4, 5);

console.log(typeof calcSum2);

// Array
const arr = [1, 2, 3, 'Hihi'];
const arr2 = new Array(1, 2, 3, 'Hihi');


// Object
const jonas = {
  firstName: 'Jonas',
  lastname: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  hasDriverLicense: true,
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    this.calcAge();
    console.log(`${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`);
  }
}

jonas.getSummary();


const array = [];
array[2] = 'Hihi';
console.log(array);
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}