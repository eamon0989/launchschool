/* The goal of this exercise is to convert a string to a new string where
each character in the new string is "(" if that character appears only once
in the original string, or ")" if that character appears more than once in the
original string. Ignore capitalization when determining if a character is a
duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("

Input: string
Output: string

Rules:
ignore case
if a char only appears once, replace with '('
otherwise replace with ')'

Algorithm:
 - count instances of each char in the string
 - store each char in an object with the number of instances
 - if count is 1, replace with '('
 - otherwise replace with ')'

*/

// function duplicateEncode(string) {
//   string = string.toLowerCase();
//   // console.log(string);
//   let count = [...string.toLowerCase()].reduce((object, char) => {
//     object[char] = object[char] ? object[char] + 1 : object[char] = 1;
//     return object;
//   }, {});
//   // console.log(count);
//   for (let i = 0; i < string.length; i += 1) {
//     let char = string[i];
//     let regex = new RegExp(`[${char}]`);
//     let str1 = string.slice(0, i);
//     let str2 = string.slice(i);
//     // console.log(char, count[char], regex);
//     str2 = count[char] > 1 ? str2.replace(regex, ')') : str2.replace(regex, '(');
//     string = str1 + str2;
//   }

//   return string;
// }

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split('')
    .map((char, _, array) => {
      return array.indexOf(char) === array.lastIndexOf(char) ? '(' : ')';
    })
    .join('');
}

console.log(duplicateEncode("din"));// ,"(((");
console.log(duplicateEncode("recede"));// ,"()()()");
console.log(duplicateEncode("Success"));// ,")())())","should ignore case");
console.log(duplicateEncode("(( @"));// ,"))((");
console.log(duplicateEncode('(@v@@c@T@)@@ye'));// ,"()())()()())((");
console.log(duplicateEncode(' ( ( )'));// ,')))))(';