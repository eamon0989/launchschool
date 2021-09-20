/*
LINK: 

"Write a function called doubler that doubles every value in an array".

START TIME: 08:02
END TIME: 
INPUT(S): an array of values
  - 
CLARIFICATIONS:
  INPUT Data type(s) (string, boolean, number, null, undefined, collection)
  - Do I have to worry about any other input types?
  VALUES
  - Normal (string, boolean...)
  - Special (NaN, +/- Infinity, .567, -3, [1,,3], [1, 2, a: 'A'], +0, -0)
  EDGE CASES:
  - Invalid Input or Values (data types or values) are numbers floats?
  - Emptiness (null/nil, '', [], {})
  - Boundary conditions (max 20 chars & add in 21 chars)
  - Repetition/duplication
  - Uppercase/Lowercase strings/chars
  - Too few/many args, no arguments?
  RETURN VALUE(s): (same or new object, same or different data types, duplicates, order)
  - 
  FAILURES/BAD INPUT:
  - Return a special value (null/nil, '', [], {})
  - Raise exceptions or report errors
REQUIREMENTS:
  - Double every value in an array
  - Strings - concatinate each string onto itself
  - Numbers - multiply the number by 2
  - Boolean - duplicate the element
  - Null or undefined - duplicate the element
  - empty string - duplicate it
  - NaN or Infinity - duplicate it
  - 0 or -0 - multiply by 2
  - Array - duplicate the array
  - Object - duplicate the object
  - non array inputs - put them in an array
  - Empty array elements - add another empty array element
  - 
TEST CASES:
  console.log(**name**() === ); // 
  console.log(**name**() === ); // 
  console.log(**name**() === ); // 
DESCRIBE THE PROBLEM:
  - double every element in an input array
  - if it is a non empty string, concat the string to itself
  - otherwise, duplicate the elements
DATA STRUCTURE:
  - Arrays
ALGORITHM (break into problems + guard clauses):
  - If input is not an array, add all arguments to an array
  - if there is no input, return an empty array
  - if input is Infinity or NaN, duplicate the element
  - if it is another number, double the number
  - if it is an empty string, duplicate the empty string
  - if it is an non empty string, concat the string to itself
  - if it is an array or object, duplicate it
  - if it is a boolean value, duplicate it
  - if it is null or undefined, duplicate it
*/

// CODE:


// **TEST CASES:**
// HAPPY PATHS:

// EDGE CASES:

// FAILURES/BAD INPUTS:

function doubler(array) {
  if (arguments.length === 0) return [];
  if (!Array.isArray(array)) array = [...arguments];
  let keysLen = Object.values(array).length;
  let length = array.length;
  let empties = length - keysLen;

  array = Object.values(array);
  for (let i = 0; i < length; i += 1) {
    if (typeof array[i] === 'number') {
      array[i] = numberDoubler(array[i], array);
    } else if (typeof array[i] === 'string') {
      array[i] = stringDoubler(array[i], array);
    } else if (typeof array[i] === 'boolean') {
      array.push(array[i]);
    } else if (array[i] === undefined || array[i] === null) {
      array.push(array[i]);
    } else if (Array.isArray(array[i])) {
      array.push(array[i]);
    } else if (typeof array[i] === 'object') {
      array.push(array[i]);
    }
  } 

  array = addEmptyItems(array, empties)

  return array;
}

function addEmptyItems(array, empties) {
  array.length = array.length + (empties * 2);
  return array;
}

function numberDoubler(num, array) {
  if (Number.isNaN(num) || num === Infinity) {
    array.push(num);
    return num;
  } else {
    return num * 2;
  }
}

function stringDoubler(string, array) {
  if (string === '') {
    array.push(string);
    return string;
  } else {
    return string.repeat(2);
  }

}

console.log(doubler(['', 'abc', 'testing', '0', '']));
console.log(doubler([1, 150, 0, -50, -0, Infinity, NaN, 1.5, 154.98, -21.5]));
console.log(doubler([null, , undefined, NaN, , '', [], {}, 0, -0]));
console.log(doubler([true, false]));
console.log(doubler('not an array', 5432, 'testing'));
console.log(doubler([]));
console.log(doubler());
console.log(doubler({}));
console.log(doubler(''));
console.log(doubler(undefined));