/* 
// Write a function that takes two or more objects and returns 
// a new object which combines all the input objects.

// Objects are combined together so that the values of matching keys are added together.

// An example:

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }

// The combine function should not mutate the input objects.

Input: 2 or more objects
Output: a new object that is all other objs combined

Requirements:
do not mutate input objects
objects with matching keys are combined e.g. a:10, a:3 = a:13

Edge cases:
  - 0 or 1 objects?
  - empty objects?
  - Non numeric values?

Mental model:
  - loop over objects
    - add keys and values to new obj
      - if key already exists, add value to value
  - return obj

Algorithm:
  - initialize an empty object
  - iterate over the objects
    - if return obj doesn't have the same key, add the key and value
      - otherwise sum the value to the existing value
  - return obj


*/

function combine(...objects) {
  let result = {};

  objects.forEach(obj => {
    Object.keys(obj).forEach(key => {
      result[key] ? result[key] += obj[key] : result[key] = obj[key];
    })
  })

  return result;
}


const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
console.log(combine(objA, objB)); // Returns { a: 13, b: 20, c: 36, d: 3 })