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