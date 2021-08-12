/*
Input: 2 strings

Output: boolean

Rules:
substrings must be 2 chars minimum
if the same substring appears in both strings, return true
otherwise return false
ignore case
if both strings are empty return true
if either string is empty return false

Mental model
  - get all possible substrings
  - check if one is the same

Algorithm:
  - define a helper function called getSubstrings
    - take a string, use a nested loop to loop over and
        get all possible substrings, returning them in an array

  - pass both strings to the helper function
  - loop over one array of substrings, checking if each string is present
      in the other array (converting both to lowercase)
    - if there is a match return true
  - if there are no matches, return false
*/

function substringTest(string1, string2) {
  let str1SubStrs = getSubstrings(string1.toLowerCase());
  let str2SubStrs = getSubstrings(string2.toLowerCase());

  for (let index = 0; index < str1SubStrs.length; index += 1) {
    if (str2SubStrs.includes(str1SubStrs[index])) {
      return true;
    }
  }

  return false;
}

function getSubstrings(string) {
  let subStrings = [];
  for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
    for (let endIndex = startIndex + 2; endIndex < string.length;
      endIndex += 1) {
      subStrings.push(string.slice(startIndex, endIndex));
    }
  }

  return subStrings;
}


console.log(substringTest('Something', 'Fun')); //false
console.log(substringTest('Something', 'Home'));//true
console.log(substringTest('Something', 'Fun'));//false
console.log(substringTest('Something', ''));//false
console.log(substringTest('', 'Something'));//false
console.log(substringTest('BANANA', 'banana'));//true
console.log(substringTest('test', '111t'));//false
console.log(substringTest('', ''));//false
console.log(substringTest('1234567', '541265'));//true
console.log(substringTest('supercalifragilisticexpialidocious', 'SoundOfItIsAtrociou'));//true