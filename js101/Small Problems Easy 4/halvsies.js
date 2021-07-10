/* - initialize a new array with 2 empty arrays
- iterate through the array, if element's index is less or equal to than the 
    array length divided by 2 rounded up, push to first nested array
  - otherwise push to second nested array
- return nested arrays

Examples:
*/

function halvsies(array) {
  let returnArray = [[],[]];

  array.forEach((element, index) => {
    let halfLength = Math.ceil(array.length / 2) - 1;
    if (index <= halfLength) {
      returnArray[0].push(element);
    } else {
      returnArray[1].push(element);
    }
  });

  return returnArray;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]