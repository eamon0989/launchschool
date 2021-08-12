
/*
A palindrome is a word, phrase, number, or other sequence of characters which
reads the same backward as forward. Examples of numerical palindromes are:

2332
110011
54322345
You'll be given 2 numbers as arguments: (num, s). Write a function which
returns an array of s number of numerical palindromes that come after num.
If num is a palindrome itself, it should be included in the count.

Return "Not valid" instead if any one of the inputs is not a number
or is less than 0.

Single digit numbers will NOT be considered numerical palindromes.

Input: 2 numbers
Output: and array of s number of palindromes

Rules:
A palindrome is the same forwards as when reversed
You must return s number of palindromes
num is the minimum valid number for a palindrome
palindrome must be at least 2 digits
if an argument is less than 0, return 'Not valid'
if s is 0, return an empty array
array must contain numbers, not strings

Algorithm:
  - check if any of the arguments are less than 0 or not a number, if not
    return 'Not valid'
  - initialize an array to store palindromes
  - check if s is 0, if so return an empty array
  - create an isPalindrome function
    - convert the number to a string, reverse it, and check if
      it's the same backwards and forwards
    - if the num is a palindrome, push it to the array
  - iterate upwards starting at num, checking if each num is a palindrome
    - push the palindromes to the array
  - when the length of the array is equal to s, return the array
*/
/* 
function palindrome(num, s) {
  if (isValidInput(...arguments) === false) {
    return `Not valid`;
  } else if (s === 0) {
    return [];
  }

  let palindromes = [];
  while (palindromes.length < s) {
    if (isPalindrome(num)) {
      palindromes.push(num);
    }

    num += 1;
  }

  return palindromes;
}

function isValidInput(num, s) {
  if (num < 0 || s < 0) {
    return false;
  } else if (typeof num !== 'number' || typeof s !== 'number') {
    return false;
  }

  return true;
}

function isPalindrome(num) {
  if (num < 10) return false;

  let string = String(num);
  return string === string.split('').reverse().join('');
}

console.log(palindrome(6,4));
// [11,22,33,44]
console.log(palindrome(75,1));
// [77]
console.log(palindrome(101,2));
// [101,111]
console.log(palindrome(20,0));
// []
console.log(palindrome(0,4));
// [11,22,33,44]
console.log(palindrome("ACCDDCCA",3));
// "Not valid"
console.log(palindrome(773,"1551"));
// "Not valid"
console.log(palindrome(-4505,15));
// "Not valid"
console.log(palindrome(4505,-15));
// "Not valid"
 */
/*
Consider the word "abode".
The letter `a` is in position 1 and `b` is in position 2.
In the alphabet, `a` and `b` are also in positions 1 and 2.

The letters `d` and `e` in "abode" occupy the positions they
would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of
letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) // [4, 3, 1]

Input will consist of alphabetic characters, both uppercase and
lowercase.  No spaces.\

Input: array of strings
Output: array of numbers

Rules:
if a letters position in the alphabet is the same as it's index + 1 in the
string, it counts
input is alphabetic chars only, both upper and lowercase

Algorithm:
  - initialize a new array for the results
  - initialize a count variable at 0
  - iterate through the array
    - iterate through each string, checking if the char code of the current
      lowercase char - 96 is equal to the chars index + 1
    - if so, add one to the count
    - when finished iterating through the string, push count to the array
      and reset count to 0
  - return the array


/*
function solve(array) {
  let results = [];


  array.forEach(string => {
    let count = 0;
    for (let index = 0; index < string.length; index += 1) {
      let char = string[index].toLowerCase();
      if ((char.charCodeAt(0) - 96) === (index + 1)) {
        count += 1;
      }
    }

    results.push(count);
  });

  return results;
}

*/
/*
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

function solve(array) {
  let results = [];
  array.forEach(string => {
    let count = 0;
    for (let i = 0; i < string.length; i += 1) {
      if (ALPHABET.indexOf(string[i].toLowerCase()) === i) {
        count += 1;
      }
    }

    results.push(count);
  });

  return results;
}

console.log(solve(["abode","ABc","xyzD"])); // [4,3,1]
console.log(solve(["abide","ABc","xyz"]));  // [4,3,0]
console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"])); // [6,5,7]
console.log(solve(["encode","abc","xyzD","ABmD"])); // [1, 3, 1, 3] */
/*


Problem Description
Given the string of chars alphabetic characters limited to a-z,
do as in the sample cases.
Each character in the string argument should appear in the returned string.
The original character should be repeated as many times as its original
position in the string argument.  (index 0 being position 1, index 1 being
  position 2...)
The repeated sequences of a character should be separated by a hyphen in
the returned string.
In the repeated sequences of a character included in the returned string, the
first instance of the character should be upper-case.  Subsequent instances of
the character should be lowercase.

Input: string
Output:string

Rules:
each character in the input string must appear in the output string
each char must be repeated index number of times
each letter must be separated by a hyphen
The first letter in each sequence (after a hypen) must be lowercase
the rest lowercase

Algorithm:

  - split the string into an array of chars
  - transform each 'string' to its char repeated
    index + 1 number of times
  - iterate over the array, transforming the first char in
    each string to uppercase and the rest to lowercase
  - convert the array of strings to a string, joining them with '-'
  - return the string
*/

/* 
function accum(string) {
  let array = [...string];
  array = array.map((char, index) => char.repeat(index + 1))
    .map(string => `${string.slice(0, 1).toUpperCase()}${string.slice(1).toLowerCase()}`);
  return array.join('-');
}


console.log(accum("abcd"));    // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt"));    // "C-Ww-Aaa-Tttt" */

/*

The objective is to return all pair of numbers from a given array of
numbers that have a difference of 2.
The result array should be sorted in ascending order of values.
Assume there are no duplicate numbers in the array.
The order of the numbers in the input array should not matter.

input:
- array of integers

output:
- nested array
- pairs of integers


Rules:
Return numbers that have a difference of 2 (num + 2)
there are no duplicate numbers
input order does not matter
output order should be in ascending order of value
Numbers are above 0

Algorithm:
  - initialize a return array
  - sort the input array by ascending value
  - loop through the array using a nested loop, checking if
    each num is equal to num + 2
    - if num is equal to num + 2, push both nums in an array to
      the results array
  - when finished, return the array

*/
/* 
function differenceOfTwo(array) {
  let results = [];
  array.sort((a, b) => a - b);
  for (let curNumIdx = 0; curNumIdx < array.length - 1; curNumIdx += 1) {
    for (let checkNumIdx = curNumIdx + 1; checkNumIdx < array.length; checkNumIdx += 1) {
      if (array[curNumIdx] + 2 === array[checkNumIdx]) {
        results.push([array[curNumIdx], array[checkNumIdx]]);
      }
    }
  }

  return results;
}

console.log(differenceOfTwo([1, 2, 3, 4]));
// [[1, 3], [2, 4]]
console.log(differenceOfTwo([4, 1, 2, 3]));
// [[1, 3], [2, 4]]
console.log(differenceOfTwo([1, 23, 3, 4, 7]));
//  [[1, 3]]

console.log(differenceOfTwo([4, 3, 1, 5, 6]));
// [[1, 3], [3, 5], [4, 6]]

console.log(differenceOfTwo([2, 4]));
// [[2, 4]]
console.log(differenceOfTwo([1, 4, 7, 10, 13]));
// [] */

/* Two words are anagrams of each other if they both contain the same letters.
Write a method that will find all the anagrams of a word from a list.
You will be given two inputs a word and an array with words. You should return
an array of all the anagrams or an empty array if there are none.

Input: string, array of strings
Output: array of strings

Rules:
if there are no matches, return an empty array
case does not matter
if a string in the array has the exact same chars as the string,
return it

Algorithm:
  - initialize a results array
  - create a copy of the input array
  - iterate over the string once for each word in the array,
      splitting each word to chars, then
      checking if each char is present in the current string
    - if it is, remove the first instance, continue
    - if when finished iterating over the string, the array string is now
        an empty string, push the original word to the results array
  - when finished, push the results array
*/

// function anagrams(word, array) {
//   let results = [];
//   let copy = array.slice();
//   copy.forEach((string, index) => {
//     string = string.split('');
//     for (let i = 0; i < word.length; i += 1) {
//       if (string.includes(word[i])) {
//         string.splice(string.indexOf(word[i]), 1);
//       }
//     }

//     if (string.length === 0) {
//       results.push(array[index]);
//     }
//   });

//   return results;
// }
/* 

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// ['aabb', 'bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer', 'racee']));
// ['carer', 'racer']
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));
// [] */