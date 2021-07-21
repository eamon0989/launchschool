// function longestSubstringOf(string) {
//   let subs = [];
//   [...string].map((_, index) => subs.push(subsOfsubs(string.slice(index))));

//   let longest = '';
//   let unique = subs.flat().filter(string => {
//     let count = string.split('').reduce((obj, char) => {
//       obj[char] = obj[char] ? obj[char] + 1 : obj[char] = 1;
//       return obj;
//     }, {});
//     if (Object.values(count).every(num => num === 1)) {
//       return true;
//     }
//   });

//   unique.forEach(string => {
//     if (string.length > longest.length) {
//       longest = string;
//     }
//   });

//   return longest;
// }

// function subsOfsubs(string) {
//   return [...string].map((_, index) => string.slice(0, index + 1));
// }

function longestSubstringOf(string) {
  console.log(string.match(/(?:([\w])(?!.*\1))*$/g));
}


console.log(longestSubstringOf("baacab")); //,3,"cab is the longest substring.")
console.log(longestSubstringOf("abcd")); //,4,"abcd is the longest substring.")
console.log(longestSubstringOf("hchzvfrkmlnozjk")); //,11,"chzvfrkmlno is the longest substring.")
console.log(longestSubstringOf("!@#$%^&^%$#@!")); //,7,"!@#$%^& is the longest substring.")
console.log(longestSubstringOf("abcd".repeat(10000) + "abcde" + "abcd".repeat(10000)));//,5,"abcde is the longest substring. Don't try to write a brute force solution ;-)")
