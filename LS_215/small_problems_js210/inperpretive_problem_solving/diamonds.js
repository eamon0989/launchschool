/*
LINK: 
START TIME: 
END TIME: 
INPUT(S): An odd integer

  RETURN VALUE(s): string

REQUIREMENTS:
  - given an odd integer, display a diamond with n height and width of *'s
  - non *'s should be spaces
  - diamond should be the same height and width
DESCRIBE THE PROBLEM:
  - 
DATA STRUCTURE:
  - An array is the obvious choice, later I can loop over it and print out the strings
ALGORITHM (break into problems + guard clauses):
  - create an empty array
  - loop from 1 to 9 on odd numbers using count as the variable
    - push a string containing (n - count) / 2 spaces, count stars and (n - count) / 2 spaces
  - take a slice of the array from 0 to length - 2
    - reverse it and concat to the results array
  - print the array looping over it
*
diamond(3);
// logs
 *
***
 *
1, 1, 1
3
1, 1, 1

diamond(9);
// logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

4, 1, 4
3, 3, 3
2, 5, 2
1, 7, 1
0, 9, 0
1, 7, 1
2, 5, 2
3, 3, 3
4, 1, 4

  - *'s start with 1 in the center in the first line, increment by 2 each line until
      it reaches n, then decrements by 2 until 1
  - spaces left and right start at (n - 1) / 2
      they decrease by 1 until reaching 0
      then increase until reaching (n - 1) / 2

Hollow diamond:

    *    
   * *   
  *   *  
 *     * 
*       *
 *     * 
  *   *  
   * *   
    *    

4 + 1 + 0
3 + 1 + 1
2 + 1 + 2
1 + 1 + 3
0 + 1 + 4

*/

// CODE:


// **TEST CASES:**
// HAPPY PATHS:

// EDGE CASES:

// FAILURES/BAD INPUTS:

function diamond(num) {
  let results = [];
  for (let stars = 1; stars <= num; stars += 2) {
    let spaces = (num - stars) / 2;
    results.push(`${' '.repeat(spaces)}${'*'.repeat(stars)}${' '.repeat(spaces)}`);
  }

  results = results.concat(results.slice(0, results.length - 1).reverse());
  results.forEach(line => console.log(line));
}

// diamond(1);
// diamond(3);
// diamond(9);
// diamond(15);

// 4 + 1 + 0
// 3 + 1 + 1
// 2 + 1 + 2
// 1 + 1 + 3
// 0 + 1 + 4

function hollowDiamond(num) {
  let results = [];
  let spaces = Math.floor(num / 2);
  let columns = Math.ceil(num / 2);

  // generates the top left half
  for (let stars = 1; stars <= columns; stars += 1) {
    results.push(`${' '.repeat(spaces)}*${' '.repeat(stars - 1)}`);
    spaces -= 1;
  }

  // copy and reverse top left to make bottom left
  results = results.concat(results.slice(0, results.length - 1).reverse());
  
  // copy and reverse left side to make right side
  results = results.map(line => `${line}${line
    .slice(0, line.length - 1).split('').reverse().join('')}`);
  
  results.forEach(line => console.log(line));
}

hollowDiamond(1);
hollowDiamond(3);
hollowDiamond(9);
hollowDiamond(15);