/*
Stringy Strings

Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

Examples:
*/

/* 
Problem: in my own words, write a short description of what the problem is about

input: number

output: string of 1s and 0s matching num length

rules: list anything specific that the problem is asking for 
or any edge cases to look out for



Examples: list some provided examples


rules:


Data structures

input types:: 
expected output types: 
intermediary: 


Algorithm: write down your pseudo code
Try listing different possible solution options to the problem first 
in plain English

initialize an empty string
array with [1, 0]
for loop string with 1
odd numbers concat 0 to string
even numbers concat 1
stop at num length - 1

*/

function stringy(num) {
  let returnString = '';
  for (let index = 0; index < num; index += 1) {
    if (index % 2 === 0) {
      returnString += '1';
    } else {
      returnString += '0';
    }
  }

  return console.log(returnString);
}


stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"