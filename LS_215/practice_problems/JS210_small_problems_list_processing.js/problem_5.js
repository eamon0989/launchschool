/* 
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . . 
*/

/* 

Input: string of chars, number of rows
Output: code with n rows

Mental model:
remove spaces from string (and punctuation?)
Row numbers increase and decrease to n - 1
e.g. 0, 1, 2, 3, 2, 1, 0, 1, 2 (n = 4)
column numbers increase by 1 every time

25 chars (no spaces)

Data structures

Arrays make the most sense
1 array per row
.'s in between numbers increases by 2 every row
shape like diamonds
row   = inner  = outer (left and right)
row 1 = 5 dots = letter
row 2 = 3 dots = 1 dot
row 3 = 1 dots = 2 dots
row 4 = letter = 3 dots

length = (str.length * 2) separated by spaces

(Test) 4 rows

1 row 0 dots
2 rows 1 dot (col + 2)
3 rows 3 dots (col + 4) letters per row length / 4
4 rows 5 dots (col + 6) letter per row length / 6
5 rows 7 dots (col + 8)
6 rows 9 dots (col + 10)
7 rows 11 dots (col + 12)
8 rows 13 dots (col + 14)

let rows = 0;
let dots = 0;
while (rows <= n) {
  if (rows === 0) {
    dots = 0;
  } else if (rows === 1) {
    dots = 1;
  } else {
    dots += 2;
  }

  rows += 1;
}

Algorithm:

  - clean up the input string removing non alphanumeric chars
  - Create n number of arrays (each array is a row)
  - fill the arrays with str.length number of .'s
  - Figure out the distance between letters based on the number of rows
  - traverse the arrays using nested while loops
    - replace the specified dots with letters
    - add newlines at end
  - join the arrays using spaces as separator
  - then join all the arrays into 1 string and return it



W . . . . . I . . .
. E . . . D . S . .
. . A . E . . . C .
. . . R . . . . . O

n arrays filled with str.length .'s
nested loops
if 4 rows, 

(0,0), (1,1), (2,2), (1,3), 
(0,4), (1,5), (2,6), (1,7)

"WE ARE DISCOVERED FLEE AT ONCE"
WECRLTEERDSOEEFEAOCAIVDEN

The first row has seven spots that can be filled with "WECRLTE".
0, 4, 8, 12, 16, etc (0 + 4)
separated by ' . . . '
Now the 2nd row takes "ERDSOEEFEAOC".
1, 3, 5, 7, 9 etc (1 + 2)
starts with '. ', separated by ' . ', end ' .'
Leaving "AIVDEN" for the last row.
2, 6, 10, 14, 18, 22 etc (2 + 4)
start '. . ', middle ' . . . ', end ' . .'

30 chars

split string into 3 arrays
first every 4 chars starting at 0
second every 2 chars starting at 1
third every 4 chars starting at 2
*/
// console.log("WE ARE DISCOVERED FLEE AT ONCE".length);
// console.log("WECRLTEERDSOEEFEAOCAIVDEN".length);
// let str = ". E . R . D . S . O . E . E . F . E . A . O . C . E .".replace(/\s/g, '');
// // console.log(". E . R . D . S . O . E . E . F . E . A . O . C . E .".length);
// console.log(str.length);
// console.log(str);
// console.log("ERDSOEEFEAOC".length);
// console.log(`
// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .`.length);

// function encode(string) {
//   let row1 = [];
//   let row2 = [];
//   let row3 = [];

//   string.replace(/[^a-z]/gi, '').split('').forEach((char, index) => {
//     if (index % 4 === 0) {
//       row1.push(char);
//     } else if (index % 2 === 1) {
//       row2.push(char);
//     } else {
//       row3.push(char);
//     }
//   })

//   console.log(row1.join(' . . . '));
//   console.log(`. ${row2.join(' . ')} .`);
//   console.log(`. . ${row3.join(' . . . ')} . .`);
// }
// Algorithm:

//   - clean up the input string removing non alphanumeric chars
//   - Create n number of arrays (each array is a row)
//   - fill the arrays with str.length number of .'s
//   - Figure out the distance between letters based on the number of rows
//   - traverse the arrays using nested while loops
//     - replace the specified dots with letters
//     - add newlines at end
//   - join the arrays using spaces as separator
//   - then join all the arrays into 1 string and return it

/* 
I found a pretty simple solution
  - Create an array with 1 nested array for each row needed
  - Each row will be the same length as the input string
    - So fill each subarray array with string.length amount of .'s
  - Iterate along the string, replacing . with the next char
  (columns increase by 1 each time, rows increase and decrease from 0 to row number - 1)
    - start row 0, col 0
    - next row 1, col 1
    - next row 2, col 2
    -then decrement, row 1 col 3
    - row 0 col 4
    - continue until there are no more chars in string
  - Join the arrays together using ' ' as a delimiter
  return result
 */

function encode(string, num) {
  if (num === 1 || !string) return string;
  string = string.replace(/[\W_]/gi, '');

  // adds num empty arrays to the rowContainer array
  let rowContainer = populateRows(num);
  // adds the correct letters to each row (a row being a subarray)
  rowContainer = addLettersToRows(string, num, rowContainer)

  return rowContainer.join('').replace(/[\W_]/g, '');
}

function populateRows(num) {
  let rowContainer = [];

  for (let i = 0; i < num; i += 1) {
   rowContainer.push([]);
  }

  return rowContainer;
}

function addLettersToRows(string, num, rowContainer) {
  let col = 0;
  let currentRow = 0;
  let startRow = 0;
  let endRow = num - 1;

  // iterate over the string
  while (col < string.length) {
    // insert chars from top row to bottom
    while (currentRow < endRow && col < string.length) {
      rowContainer[currentRow].push(string[col]);
      col += 1;
      currentRow += 1;
    }

    // insert chars from bottom row to top
    while (currentRow > startRow && col < string.length) {      
      rowContainer[currentRow].push(string[col]);
      col += 1;
      currentRow -= 1;
    }
  }

  // returns array with num subarrays representing rows
  return rowContainer;
}

// ---------------------------------------------//

function decode(string, num) {
  if (num === 1 || !string) return string;

  // count how many letters go in each row
  let count = {};
  let rowContainer = populateRows(num);
  rowContainer = addLettersToRows(string, num, rowContainer)
  rowContainer.forEach((arr, index) => count[index] = arr.length);

  let rowContainer2 = [];
  let start = 0;
  let end = 0;
  let last = 0;

  // split the string into rows based on count obj
  for (let prop in count) {
    start = last;
    end += count[prop];
    rowContainer2.push(string.slice(start, end).split(''));
    last += count[prop];
  }

  let col = 0;
  let currentRow = 0;
  let endRow = num - 1;
  let startRow = 0;
  let resultStr = '';

  // remove first char from each row, append to resultStr
  while (col < string.length) {
    // remove first char from top to bottom
    while (currentRow < endRow && col < string.length) {
      let char = rowContainer2[currentRow].shift();
      resultStr += char;
      col += 1;
      currentRow += 1;
    }

    // remove first char from bottom to top
    while (currentRow > startRow && col < string.length) { 
      let char = rowContainer2[currentRow].shift();
      resultStr += char;
      col += 1;
      currentRow -= 1;
    }
  }

  return resultStr;
}

console.log(encode('WE ARE DISCOVERED FLEE AT ONCE', 1));
console.log(encode('WE ARE DISCOVERED FLEE AT ONCE', 2));
console.log(encode('WE ARE DISCOVERED FLEE AT ONCE', 3));
console.log(encode('WE ARE DISCOVERED FLEE AT ONCE', 4));
console.log(encode('WE ARE DISCOVERED FLEE AT ONCE', 5));
console.log(encode('EXERCISES', 4));
console.log(encode('WEAREDISCOVEREDFLEEATONCE', 3));
console.log(encode('XOXOXOXOXOXOXOXOXO', 2));
console.log(encode('One rail, only one rail', 1));
console.log(encode('', 4));

console.log(decode('WEAREDISCOVEREDFLEEATONCE', 1));
console.log(decode('WAEICVRDLETNEERDSOEEFEAOC', 2));
console.log(decode('WECRLTEERDSOEEFEAOCAIVDEN', 3));
console.log(decode('WIREEEDSEEEACAECVDLTNROFO', 4));
console.log(decode('WCLEESOFECAIVDENRDEEAOERT', 5));
console.log(decode('TEITELHDVLSNHDTISEIIEA', 3));
console.log(decode('XXXXXXXXXOOOOOOOOO', 2));
console.log(decode('ABCDEFGHIJKLMNOP', 1));

/* 
decode 1 row return string
2 rows every second char
3 rows every 4th char
4 rows every 6th char
5 rows every 8th char

WECRLTEERDSOEEFEAOCAIVDEN

W . . . E . . . C . . . R . . . L . . . T . . . E - 7
. E . R . D . S . O . E . E . F . E . A . O . C . - 12
. . A . . . I . . . V . . . D . . . E . . . N . . - 6

every 4 starting from idx 0, 4, 8, 12
every 2 starting from idx 1, 3, 5, 7, 9, 11
every 4 starting from idx 2, 6, 10, 14

4 rows

W . . . . . I . . .
. E . . . D . S . .
. . A . E . . . C .
. . . R . . . . . O

0, 6, 12, 18 (every 6 starting from idx 0)
1, 5, 7, 11, 13 (alternating 4, 2 starting from idx 1)
2, 4, 8, 10, 14 (alternating 2, 4 starting from idx 2)
3, 9, 15 (every 6 starting from idx 3)

5 rows
W . . . . . . . C
. E . . . . . S . O
. . A . . . I  . .  V
. . . R . D . . . . . E
. . . . E . . . . . . . R 

0, 8, 16
1, 7, 9, 15
2, 6, 10, 14
3, 5, 11, 13
4, 12,

WAEICVRDLETNEERDSOEEFEAOC

W . A . E . I . C . V
. E . R . D . S . O
*/

// console.log('WECRLTEERDSOEEFEAOCAIVDEN'.length);
// console.log('W...E...C...R...L...T...E'.length);