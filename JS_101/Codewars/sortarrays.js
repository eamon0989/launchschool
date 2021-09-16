// input: names - unsorted strings
// output: case-agnostic sort

/*
Input: an array of strings
Output: a sorted array of strings

Rules:
array must be sorted in dictionary order
ignore case

Algorithm:
  - make a copy of the array
  - loop through the copy, converting all the strings to lowercase
  - sort the copy
  - create a new array
  - iterate through the sorted array, searching for a match in the input
      array
    - push the match to the return array
    - repeat until finished
  - return the array

*/

// let sortme = function(names) {
//   let copy = names.slice();
//   copy = copy.map(string => string.toLowerCase());
//   copy.sort();
//   let results = [];
//   copy.forEach(string => {
//     let regex = new RegExp(string, 'gi');
//     results.push(names.join('').match(regex)[0]);
//   });

//   return results;
// }

// let sortme = function(names) {
//   return names.sort((a, b) => {
//     if (a.toLowerCase() > b.toLowerCase()) {
//       return 1;
//     } else if (a.toLowerCase() < b.toLowerCase()) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
// };

// let sortme = function(names) {
//   return names.sort((a, b) => {
//     return a.toLowerCase().localeCompare(b.toLowerCase());
//   });
// };

// function caseInsensitiveSort(names) {
//   return names.sort((a, b) => {
//     return a.toLowerCase().localeCompare(b.toLowerCase());
//   });
// }

function caseInsensitiveSort(names) {
  return names.sort((a,b) => {
    return a.toLowerCase() > b.toLowerCase() ? 1 : -1;
  });
}


console.log(caseInsensitiveSort(["Hello","there", "I'm","fine"]));//, ["fine", "Hello", "I'm", "there"]))
console.log(caseInsensitiveSort(["C", "d", "a", "B"]));//, ["a", "B", "C", "d"])
console.log(caseInsensitiveSort(["CodeWars"]));//, ["CodeWars"])
console.log(caseInsensitiveSort([]));//, [])