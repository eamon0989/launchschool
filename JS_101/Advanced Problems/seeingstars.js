/* 
Input:num
Output: string

Rules:
input is always an odd number
The height and width are equal to the input number
The middle horizontal line and vertical line will be fully stars
first and last char on first and last line will be stars

e.g. 9

star, 3 spaces, star, 3 spaces, star
star, 2 spaces, star, 2 spaces, star
star, 1 spaces, star, 1 spaces, star
1 space, 1 star, 1 space, 1 star, 1 space, 1 star, 1 space
3 spaces, 3 stars, 3 spaces
9 stars
3 spaces, 3 stars, 3 spaces
1 space, 1 star, 1 space, 1 star, 1 space, 1 star, 1 space
star, 1 spaces, star, 1 spaces, star
star, 2 spaces, star, 2 spaces, star
star, 3 spaces, star, 3 spaces, star


Algorithm:

print first line n number of stars
work out from centre
1st line out is always 3 stars
after that the pattern always stays the same as above

middle line is always n stars
*/


function star(num) {
  let firstLast = `${'*'.repeat(1)}$${' '.repeat((num - 3) / 2)}${'*'.repeat(1)}${' '.repeat((num - 3) / 2)}${'*'.repeat(1)}$`;
  let middle = '*'.repeat(num);
  let nextToMiddle = `${' '.repeat((num - 3) / 2)}${'*'.repeat(3)}${' '.repeat((num - 3) / 2)}`;
  let innerPadding = 1;
  let outerPadding = (num - 3) - (innerPadding * 2);
  let otherRows = `${' '.repeat(1)}$${'*'.repeat(1)}${' '.repeat(1)}${'*'.repeat((num - 3) / 2)}${' '.repeat(1)}$${'*'.repeat(1)}${' '.repeat(1)}$`;
}







/*
Write a function that displays an 8-pointed star in an NxN grid,
where N is an odd integer that is supplied as an argument to the
function. The smallest such star you need to handle is a 7x7 grid
(i.e., when N is 7).

star(7);
// logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

star(9);
// logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *

 */