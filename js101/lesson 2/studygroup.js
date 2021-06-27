// let a = 1;

// function change(a) {
//  a +=1;
// }
// change(a);
// console.log(a);;

// function vowelCount(string) {
//   let array = string.split('');
//   let vowels = 'aeiou';
//   array.forEach(word => word.forEach(char => if (vowels).includes(char)))
/*Problem Description
Given a string of one or more words, return an array that contains
the number of vowels in each word of the argument string.

The returned array should have the same number of
elements as words in the argument string.

Vowels are aeiou.

Test Cases


Problem

input: string
output: array of numbers

rules:
- numbers: vowels per word
- The returned array should have the same number of
elements as words in the argument string.
- vowels are aieou


Examples

- case sensitivity: both lowercase and uppercase vowels are counted
- a word is separated by spaces
- some words do not have any letters (=> !!)
- empty string returns an empty array
- no vowels in a word => return 0 (in the array)


Data structure

input: string
intermediary: array, numbers, string
output: array of numbers


Algorithm

- var with the vowels
- initialize result array
- split string into array of words (space delimited)
- loop over the words:
  - initialize count var at 0
  - loop through each char of the word:
    - check if the vowels include the char
    (pay attention to case => case-insensitive)
    - increment count by 1 if it does include the char
  - push count into the result array
- return result array

Code
*/

function vowelCount(string) {
  let vowelsArray = [];
  if (string === '') {
    return vowelsArray;
  }
  let vowels = 'aeiou';
  let words = string.split(' ');
  for (let i = 0; i < words.length; i += 1) {
    let count = 0;
    vowelsArray[i] = count;
    for (let j = 0; j < words[i].length; j += 1) {
      if (vowels.includes(words[i][j].toLowerCase())) {
        count += 1;
        vowelsArray[i] = count;
      }
    }
  }
  return vowelsArray;
}

// function vowelCount(string) {
//   let vowelsArray = [];
//   if (string === '') {
//     return vowelsArray;
//   }
//   let vowels = 'aeiou';
//   let words = string.split(' ');
//   words.forEach((word, index) => {
//     let count = 0;
//     vowelsArray[index] = count;
//     word.split('').forEach(char => {
//       if (vowels.includes(char.toLowerCase())) {
//         count += 1;
//         vowelsArray[index] = count;
//       }
//     });
//   });
//   return vowelsArray;
// }

console.log(vowelCount('WhaTs yOur enneagram?'));
// [1, 2, 4]
console.log(vowelCount('Colonel Sanders feeds me well !!'));
// [3, 2, 2, 1, 1, 0]
console.log(vowelCount(''));
// []
console.log(vowelCount('ZoInkies!! There are monsters in here.'));
// [4, 2, 2, 2, 1, 2]
console.log(vowelCount('grrr!'));
// [0]