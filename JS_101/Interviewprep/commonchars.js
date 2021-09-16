/*
Input: array of strings
Output: array of characters

Rules:
all input is lowercase English letters
if a char occurs multiple times in each string, return it multiple times


Algorithm:
  - split the strings into chars
  - initialize a returnarray
  - define a function that iterates over the strings in an array
      and removes the first instance of the indicated char from each
  - loop over the longest string, checking if the chars in it
      are present in all other strings
      - if they are, remove the char from all strings and add it to
          the return array
      - otherwise continue to the next letter
  - return the answer array

Steps - check if a letter is present in all strings
  - if so, push it to an array
  - remove the char from all strings
  - repeat
*/

function commonChars(array) {
  let resultsArray = [];
  array.sort((a, b) => b.length - a.length);
  let longestString = array[0];
  array = array.map(string => string.split(''));

  for (let index = 0; index < longestString.length; index += 1) {
    let char = longestString[index];
    if (array.every(subArr => subArr.includes(char))) {
      resultsArray.push(char);
      removeChar(array, char);
    }
  }

  return resultsArray;
}

function removeChar(array, charToRemove) {
  for (let index = 0; index < array.length; index += 1) {
    array[index] = array[index].join('').replace(charToRemove, '').split('');
  }

  return array;
}

// function commonChars(array) {
//   let lettersInCommon = [];
//   array.sort((a, b) => b.length - a.length);
//   let longestString = array[0];

//   let count = array.map(string => {
//     let countObj = {};
//     for (let i = 0; i < string.length; i += 1) {
//       countObj[string[i]] ? countObj[string[i]] += 1 : countObj[string[i]] = 1;
//     }

//     return countObj;
//   });

//   for (let i = 0; i < longestString.length; i += 1) {
//     if (count.every(obj => {
//       return obj.hasOwnProperty(longestString[i]);
//     })) {
//       let lowest = 0;

//     }
//   }
// }

console.log(commonChars(['a', 'b']));
console.log(commonChars(['ab', 'bc']));
console.log(commonChars(['bella', 'label', 'roller']));
console.log(commonChars(['cool', 'lock', 'cook']));
console.log(commonChars(['hello', 'goodbye', 'booya', 'random']));
console.log(commonChars(['aabbaaaaa', 'ccddddddd', 'eeffee', 'ggrrrrrr', 'yyyzzzz']));