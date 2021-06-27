/*
Input = a string of numeric characters
Output = integer

Overview = analyze the characters in the string
2 ways, for loop or split to array

i
1 i = 0
10 i = 1
100 i = 2
1000 i = 3


*/

// function stringToInteger(string) {
//   return string % Infinity;
// }

// let stringToInteger = (string) => string * 1;

// function stringToInteger(string) {
//   let number = string - 1;
//   // console.log(number += 1, typeof number);
//   return number += 1;
// }

// function stringToInteger(string) {
//   const DIGITS = {
//     0: 0,
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9
//   };
//   let arrayOfDigits = string.split('').map(char => DIGITS[char]);
//   let value = 0;
//   arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
//   console.log(value);
//   return value;
// }

// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true

/*

input hexadecimal
output integer

hexadecimal system

0
1
2
3
4
5
6
7
8
9
A = 10
B = 11
C = 12
D = 13
E = 14
F = 15

3B16 = 3×161+11×160 = 48+11 = 59

*/


function hexadecimalToInteger(string) {
  const HEXES = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
  };
  let arrayOfDigits = string.split('').map(digit => HEXES[digit.toLowerCase()]);
  let value = 0;
  arrayOfDigits.forEach(element => ( value = (value * 16) + element));
  return value;
}

hexadecimalToInteger('4D9f') === 19871;
hexadecimalToInteger('3B') === 59;

