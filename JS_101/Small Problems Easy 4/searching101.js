/*  - ask user to input 6 numbers, one by one
 - store the first 5 numbers in an array
 - store the 6th num in a variable
 - check if array includes the 6th num
 - if it is included, return the string The number x appears in 25,15,20,17,23.
 - if it is not included, return The number x does not appear in 25,15,20,17,23
  */

let rlsync = require('readline-sync');

let num1 = Number(rlsync.question('Please input num1: '));
let num2 = Number(rlsync.question('Please input num2: '));
let num3 = Number(rlsync.question('Please input num3: '));
let num4 = Number(rlsync.question('Please input num4: '));
let num5 = Number(rlsync.question('Please input num5: '));
let num6 = Number(rlsync.question('Please input num6: '));

let arr = [num1, num2, num3, num4, num5];

if (arr.includes(num6)) {
  console.log(`The number ${num6} appears in ${arr.join(', ')}`);
} else {
  console.log(`The number ${num6} does not appear in ${arr.join(', ')}`);
}