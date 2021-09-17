/*
LINK: 
START TIME: 
END TIME: 
INPUT(S):
  - number
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
  RETURN VALUE(s): (same or new object, same or different data types, duplicates, order)
  - a number
  FAILURES/BAD INPUT:
  - Return a special value (null/nil, '', [], {})
  - Raise exceptions or report errors
REQUIREMENTS:
  - rotate the number num.length number of times
  - return a number
  - 
TEST CASES:
  console.log(**name**() === ); // 
  console.log(**name**() === ); // 
  console.log(**name**() === ); // 
DESCRIBE THE PROBLEM:
  - given a number, move the first number to the end
  - then leave the first number, move the second number to the end
  - then leave the first 2 numbers, move the third number to the end
  - repeat until all num.length rotations have been performed
DATA STRUCTURE:
  - strings or array
ALGORITHM (break into problems + guard clauses):
  - coerce the number to a string
  - iterate over the string
    -  for each iteration, slice the string starting at i
    - pass the slice to rotateRightmostDigits
    - cocat the result back onto the first part of the string
    - repeat until the iterations are complete
  - coerce back to a number and return


 735291
3 52917
32 9175
321 759
3215 97
32157 9

105
051
0 15
01 5


35
53
3 5

*/

// CODE:
function rotateRightmostDigits(num, n) {
  let numArray = String(num).split('');
  let removed = numArray.splice(-n, 1)[0];
  numArray.push(removed);
  return numArray.join('');
}

// function maxRotation(num) {
//   num = String(num);

//   for (let i = 0; i < num.length; i += 1) {
//     let start = num.slice(0, i);
//     let end = String(rotateRightmostDigits(num.slice(i)));
//     num = start + end;
//   }

//   return Number(num);
// }

function maxRotation(num) {
  num = String(num);

  for (let i = num.length; i > 1; i -= 1) {
    num = rotateRightmostDigits(num, i)
  }

  return Number(num);
}

// **TEST CASES:**
// HAPPY PATHS:

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845

// EDGE CASES:

// FAILURES/BAD INPUTS: