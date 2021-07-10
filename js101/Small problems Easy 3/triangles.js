/*
Right Triangles
Write a function that takes a positive integer, n,
as an argument and logs a right triangle whose sides
each have n stars. The hypotenuse of the triangle
(the diagonal side in the images below) should
have one end at the lower-left of the triangle,
and the other end at the upper-right.

Examples:

Copy Code
*/

function triangle(num) {
  let star = '*';
  let space = ' ';
  let count = num - 1;
  for (let i = 1; i <= num; i += 1) {
    console.log(`${space.repeat(count)}${star.repeat(i)}`)
    count -= 1;
  }

}

triangle(5);
/*
    *
   **
  ***
 ****
*****
*/

triangle(9);
/*
        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********
*/