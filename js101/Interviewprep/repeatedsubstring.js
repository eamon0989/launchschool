/*
Input: string

Output: boolean

Rules:
string is only lowercase english letters
if a string consists of the same substring repeated over and over return true
otherwise return false
min length is 2
substring must be at most 50% of the string

Algorithm:
  - iterate over the string
    - take a substing starting with 1st char, then 1st and 2nd,
    then 1st, 2nd and 3rd etc
    - check if the rest of the string consists of that substring repeated
      - if it is, return true
    - repeat until substring is more than half the length of string
  - return false

*/
function repeatedSubstringPattern(string) {
  let substring = '';
  for (let index = 1; index <= string.length / 2; index += 1) {
    substring = string.slice(0, index);
    let regex = new RegExp(substring, 'gi');
    if (string.replace(regex, '') === '') {
      return true;
    }
  }

  return false;
}

console.log(repeatedSubstringPattern('abab'));
console.log(repeatedSubstringPattern('aba'));
console.log(repeatedSubstringPattern('aabaaba'));
console.log(repeatedSubstringPattern('abaababaab'));
console.log(repeatedSubstringPattern('abcabcabcabc'));
console.log(repeatedSubstringPattern('ab'));
console.log(repeatedSubstringPattern('aa'));