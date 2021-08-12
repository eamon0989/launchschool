// input: names - unsorted strings
// output: case-agnostic sort
// sortme = function( names ){
//   return names.sort((a, b) => { return a.toLowerCase() < b.toLowerCase()})
// }
/*
Input: array of strings
Output: sorted array of strings

Rules:
Sort strings alphabetically, ignoring case

Algorithm:
 */
// sortme = function( names ) {
//   return names.sort((a, b) => {
//     let index = 0;
//     while (a.toLowerCase().charCodeAt(index) -
//     b.toLowerCase().charCodeAt(index) !== 0 && ) {

//       console.log(a.toLowerCase().charCodeAt(index) -
//       b.toLowerCase().charCodeAt(index));
//       index += 1;
//     }

//     return a.toLowerCase().charCodeAt(index) -
//     b.toLowerCase().charCodeAt(index);
//   });
// };

console.log(sortme(["Hello","there","I'm","fine"]));//, ["fine", "Hello", "I'm", "there"]);
console.log(sortme(["C", "d", "a", "B"]));//, ["a", "B", "C", "d"]);

