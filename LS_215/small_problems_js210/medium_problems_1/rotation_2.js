/*
LINK: 
START TIME: 
END TIME: 
INPUT(S):
  - number, n
CLARIFICATIONS:
  INPUT Data type(s) (string, boolean, number, null, undefined, collection)
  - Do I have to worry about any other input types?
  VALUES
  - Normal (string, boolean...)
  - Special (NaN, +/- Infinity, .567, -3, [1,,3], [1, 2, a: 'A'])
  EDGE CASES:
  - Invalid Input or Values (data types or values) are numbers floats?
  - Emptiness (null/nil, '', [], {})
  - Boundary conditions (max 20 chars & add in 21 chars)
  - Repetition/duplication
  - Uppercase/Lowercase strings/chars
  - Too few/many args

  If n is greater than num length? Wrap around?
  if n is 0?
  if either number is a special number or not a number?
  If there are not enough arguments or too many?
  RETURN VALUE(s): (same or new object, same or different data types, duplicates, order)
  - 
  FAILURES/BAD INPUT:
  - Return a special value (null/nil, '', [], {})
  - Raise exceptions or report errors
REQUIREMENTS:
  - take the nth number starting from the end, and append it to the end of the number
  - 
  - 
TEST CASES:
  rotateRightmostDigits(735291, 1);      // 735291
  rotateRightmostDigits(735291, 2);      // 735219
  rotateRightmostDigits(735291, 3);      // 735912
  rotateRightmostDigits(735291, 4);      // 732915
  rotateRightmostDigits(735291, 5);      // 752913
  rotateRightmostDigits(735291, 6);      // 352917

DESCRIBE THE PROBLEM:
  - given 2 numbers, take the nth number of the first number and append it to the end
       of the first number
DATA STRUCTURE:
  - strings, array
ALGORITHM (break into problems + guard clauses):
  - coerce the num to an string
  - split it into an array
  - splice out the nth number from the end
  - append it to the end of the string
  - coerce the string back to a number
  - return it
*/

// CODE:

function rotateRightmostDigits(num, n) {
  let numArray = String(num).split('');
  let removed = numArray.splice(-n, 1)[0];
  numArray.push(removed);
  return Number(numArray.join(''));
}


// **TEST CASES:**
// HAPPY PATHS:

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

// EDGE CASES:

// FAILURES/BAD INPUTS: