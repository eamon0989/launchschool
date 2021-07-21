//Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only.

// Example 1:

//Input: 'abab'
//Output: true
//Explanation: It's the substring 'ab' twice.
//Example 2:

//Input: 'aba'
//Output: False

// input: string
// output: boolean

// rules:
// if the string is made up of a a repeating substring, return true
// otherwise return false
// min length is 2
// only lowercase
// string is always non empty

// algorithm
// 
// loop through the string, selecting first the first char,
// checking if there rest of the string is that char 
// if not, try the first 2 chars, 3 etc
// stop iterating halfway through the string + 1
// if str length is 3, split the rest of the string into 3 char strs
// check if they are all identical
// if true return true, otherwise return false

function repeatedSubstringPatterm(string) {
  let subStr = '';

  for (let i = 1; i < string.length; i += 1) {
    subStr = string.slice(0, i);
    let substrings = [];
    [...string].reduce((str, char) => {
      if (str !== subStr) {
        str += char;
      } else {
        substrings.push(str)
        str = ''
        str += char;
      }

      return str;
    }, '');

    let regex = new RegExp(subStr, 'g')
    if (substrings.every(word => word === subStr)) {
      let array = [subStr, string.match(regex).length];
      console.log(array);
      return array;
  }

  return [string, 1];
  }
}
//[subStr, substrings.length]
// function repeatedSubstringPatterm(string) {
//   for (let index = 0; index < string.length / 2; index++) {
//     let substring = string.slice(0, index);
//     let regex = new RegExp(substring, 'g');
//     // let array = string.match(regex) || [];
//     // let array = string.match(regex) || [];
//     // console.log(string.replace(regex, ''));
//     if (string.replace(regex, '').length === 0) {
//       return true;
//     }
//   }
//   return false;

// }

console.log(repeatedSubstringPatterm('abab'));
console.log(repeatedSubstringPatterm('aa'));
console.log(repeatedSubstringPatterm('aba'));
console.log(repeatedSubstringPatterm('aabaaba'));
console.log(repeatedSubstringPatterm('abaababaab'));
console.log(repeatedSubstringPatterm('abcabcabcabc'));

// console.log(repeatedSubstringPatterm('abab') === true);
// console.log(repeatedSubstringPatterm('aa') === true);
// console.log(repeatedSubstringPatterm('aba') === false);
// console.log(repeatedSubstringPatterm('aabaaba') === false);
// console.log(repeatedSubstringPatterm('abaababaab') === true);
// console.log(repeatedSubstringPatterm('abcabcabcabc') === true);

