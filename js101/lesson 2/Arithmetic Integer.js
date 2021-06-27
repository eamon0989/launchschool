/*
Data Structures

numbers and number manipulation

High Level Overview

Prompt user for 2 integers using realsync
add both numbers and print the result
subtract one from the other and print the result
multiply both and print the result
divide one by the other and print the result
show the remainder
show one to the power of the other
*/

const readline = require('readline-sync');
console.log('Enter the first number: ');
let num1 = readline.question();

console.log('Enter the second number: ');
let num2 = readline.question();

console.log(`${num1} + ${num2} = ${Number(num1) + Number(num2)}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);
console.log(`${num1} % ${num2} = ${num1 % num2}`);
console.log(`${num1} ** ${num2} = ${num1 ** num2}`);
