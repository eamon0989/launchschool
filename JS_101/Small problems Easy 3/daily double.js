/*
Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

Examples:
*/
/* 
Problem: in my own words, write a short description of what the problem is about



input: string

Intermediary convert to an array

output: string

rules: list anything specific that the problem is asking for 
or any edge cases to look out for

if a character is repeated 2 or more times in a row, remove all instances except for the first
no characters returns an empty string


Examples: list some provided examples


rules:

Algorithm: write down your pseudo code
Try listing different possible solution options to the problem first 
in plain English

convert to an array of characters
declare a new array
loop over array of chars, if char is not included in the last index
of the new array, push to new array then convert back to string and return


*/
// function crunch(string) {
//   let chars = string.split('');
//   let returnArray = [];
//   chars.forEach(char => {
//     if (returnArray[returnArray.length - 1] !== char.toLowerCase()) {
//       returnArray.push(char);
//     }
//   });

//   return console.log(returnArray.join(''));
// }

function crunch(string) {
  let returnString = '';
  for (let i = 0; i < string.length; i += 1) {
    if (returnString[returnString.length - 1] !== string[i]) {
      returnString += string[i];
    }
  }

  return console.log(returnString);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""