'use strict';

// Let and Const
// use let if the variables value is going to change
// use const if the variables value is not going to change (constant)

let age = 17;
age = 18;

const birthYear = 2005;
console.log(age);
console.log(birthYear);

// Arrow FUnctions
const calcAge = (bYear) => 2023 - bYear;
console.log(calcAge(2005));

// Imports and Exports
// import { anotherPerson } from "./io";
// console.log(calcAge(anotherPerson.bYear))

// Classes
class Person {
    constructor() {
        this.name = "Tejas";
    }

    printMyName() {
        console.log(this.name);
    }
}

class Engineer extends Person {
    constructor() {
        super()
        this.profession = "Engineer";
    }

    printProfession() {
        console.log(this.profession);
    }

}

const tejas = new Person();
tejas.printMyName();

const rntejas = new Engineer();
rntejas.printProfession();

// Spread and Rest Operators
// Spread
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

// Rest and desstructuring
const [one, two, ...otherNumbers] = newNumbers;
console.log(one, two, otherNumbers);

// Array Methods
const nums = [1, 2, 3, 4, 5];
const doubleNums = nums.map(num => num * 2);
const evenNumbers = doubleNums.filter(num => num % 2 == 0);
const sumEvenNumbers = evenNumbers.reduce((num, acc) => num + acc, 0);
