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