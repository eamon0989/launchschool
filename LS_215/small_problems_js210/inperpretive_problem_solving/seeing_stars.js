/*
LINK: 
START TIME: 
END TIME: 
INPUT(S):
  - an odd int greater than 7
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
  - a string containing a star
  FAILURES/BAD INPUT:
  - Return a special value (null/nil, '', [], {})
  - Raise exceptions or report errors
REQUIREMENTS:
  - 
  - 
  - 
TEST CASES:
  console.log(**name**() === ); // 
  console.log(**name**() === ); // 
  console.log(**name**() === ); // 
DESCRIBE THE PROBLEM:
  - 
DATA STRUCTURE:
  - an array to hold each string
  - strings to hold spaces and stars
ALGORITHM (break into problems + guard clauses):
  - create an empty array
  - loop from 0 to n / 2 rounded down
    - create a string containing ls, *, ms, *
    - left spaces starts at 0, increments up by one each loop
    - middle space starts at n - 3 / 2 and decrements by one each loop
    - push each string to the array
  - push a string containing n / 2 rounded up *'s
  - loop over array, concat each string to itself reversed with the last char removed
  - concat a slice of all the strings - 1 reversed to the array
  - print each row of the array
*/

// CODE:


// **TEST CASES:**
// HAPPY PATHS:

// EDGE CASES:

// FAILURES/BAD INPUTS:

// Write a function that displays an 8-pointed star in an nxn grid,
// where n is an odd integer that is supplied as an argument to the
// function. The smallest such star you need to handle is a 7x7 grid
// (i.e., when n is 7).

/* 
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

0, *, 2, *
1, *, 1, *
2, *, 0, *

*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *

0, *, 3, *
1, *, 2, *
2, *, 1, *
3, *, 0, *

top row n char
3 *'s
spaces = n - 3
middle spaces = n - 3 / 2
left space = 0
rows before middle = n / 2 rounded down

*/
function star(num) {
  let rows = [];

  let middleSpaces = (num - 3) / 2;
  for (let leftSpaces = 0; leftSpaces < Math.floor(num / 2); leftSpaces += 1) {
    rows.push(`${' '.repeat(leftSpaces)}*${' '.repeat(middleSpaces)}*`);
    middleSpaces -= 1;
  }

  // duplicate the string, reverse it and concatenate it to the end of itself
  rows = rows.map(row => `${row}${row.slice(0, row.length - 1)
    .split('').reverse().join('')}`);
  // generate middle row
  rows.push('*'.repeat(num));
  // slice the array, reverse the slice, and concatenate it to the end
  rows = rows.concat(rows.slice(0, rows.length - 1).reverse());
  // print each row
  rows.forEach(row => console.log(row));
}

// function star(num) {
//   let strings = [];
//   let midSpaces = (num - 3) / 2;
//   for (let row = 0; row < Math.floor(num / 2); row += 1) {
//     strings.push(`${' '.repeat(row)}*${' '.repeat(midSpaces)}*`);
//     midSpaces -= 1;
//   }

//   strings.push('*'.repeat(Math.ceil(num / 2)));
//   strings = strings.map(row => stringExpander(row));
//   strings = strings.concat(strings.slice(0, strings.length - 1).reverse());
//   strings.forEach(row => console.log(row));
// }

// function stringExpander(string) {
//   return `${string}${string.slice(0, string.length - 1)
//     .split('').reverse().join('')}`;
// }

star(7);
star(9);