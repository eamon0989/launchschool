/* Write a function that takes a string as an argument and returns
true if all parentheses in the string are properly balanced, false otherwise.
To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

Input: string
Output: boolean

Rules:
for each ( there must be a matching )
if a ) appears before (, return false
if there are an uneven number of parentheses, return false

Algorithm:
  - initialize a count variable
  - iterate through the string, for each ( + 1
    - for each ) - 1
  - if the count goes below 0, return false

*/
// function isBalanced(string) {
//   let count = 0;
//   for (let i = 0; i < string.length; i += 1) {
//     if (string[i] === '(') {
//       count += 1;
//     } else if (string[i] === ')') {
//       count -= 1;
//     }

//     if (count < 0) {
//       return false;
//     }
//   }
//   return count === 0;
// }


console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);