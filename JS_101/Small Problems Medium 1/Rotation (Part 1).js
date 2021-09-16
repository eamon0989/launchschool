/*

Write a function that rotates an array by moving the first element
to the end of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.
Review the test cases below, then implement the solution accordingly.

Input: array, other
Output: a new array


Rules:

if input is an empty array return an empty array
if the input is not an array, return undefined
do not modify the orignal array (make a copy)

Algorithim

 - check if input is an array, if not return undefined
 - check if array is empty, if so return empty array
 - create a copy of the array
   - take off the first element, append it to the end of the array (the copy)

*/

// function rotateArray(array) {
//   if (!Array.isArray(array)) {
//     return undefined;
//   }

//   if (array.length < 1) {
//     return [];
//   }

//   let copy = array.slice();
//   let first = copy.shift();
//   copy.push(first);

//   return copy;
// }

// function rotateArray(array) {
//   if (!Array.isArray(array)) {
//     return undefined;
//   }

//   if (array.length < 1) {
//     return [];
//   }

//   let copy = array.slice();
//   let [first] = copy.slice(0, 1);
//   copy.push(first);

//   return copy;
// }

// function rotateArray(array) {
//   if (!Array.isArray(array)) {
//     return undefined;
//   }

//   if (array.length < 1) {
//     return [];
//   }

//   return array.slice(1).concat(array[0]);
// }

function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  let copy = [...array];
  if (copy.length > 0) {
    copy.push(copy.shift());
  }

  return copy;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]

// time 10:30