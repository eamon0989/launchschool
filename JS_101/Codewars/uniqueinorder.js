/* Implement the function unique_in_order which takes as argument a sequence
and returns a list of items without any elements with the same value next to
each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

Input: String or array
Output: Array

Rules:
Return an array where each element is different from the element beside it
each char from the string or array must be in the return array
a is different from A
numbers are included

Edge cases:
Symbols?
Spaces?

Human solution:
Take the input, get each character and append it in an array if the last element
of the array is not the same character

Algorithm:
  - initialize an empty array
  - iterate over the input
  - if the current char is not the same as the last char in the return array,
      append it
    - if the current char is the same as the last char in the return array,
        skip it
  - return the array when the loop finishes iterating


*/
// function uniqueInOrder(argument) {
//   let answers = [];
//   [...argument].forEach(char => {
//     if (answers[answers.length - 1] !== char) {
//       answers.push(char);
//     }
//   });

//   return answers;
// }

function uniqueInOrder(argument) {
  return [...argument].filter((char, index) => char !== argument[index - 1]);
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')); //== ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'));         //== ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3]));       //== [1,2,3]