/* input: number
output: diamond with num rows and num columns

rules:
width of diamond must be num stars
height of diamond must be num stars

algorithm:

  - initialize star and space variables containing '*' and ' '
  - initialize padding variable (num - (num - 1)) / 2, padding is
      the amount of empty spaces on each side of the stars
  - initialize amount of stars variable to 1
  - initialize a variable containing a dynamic string e.g.
    `padding, stars, padding`
  - loop from 1 to num, printing each line, incrementing stars
    by 2 each line and decrementing padding by 1
  - loop from num to 1, printing each line, decrementing stars
    by 2 each line and incrementing padding by 1
    (alternatively, start with middle line, push to array, then
      add next line to beginning and end, continue until done )


 */
function diamond(num) {
  let stars = num;
  let padding = 0;
  let array = [];

  while (stars > 0) {
    let row = `${' '.repeat(padding)}${'*'.repeat(stars)}${' '.repeat(padding)}`;

    if (stars === num) {
      array.push(row);
    } else {
      array.unshift(row);
      array.push(row);
    }

    padding += 1;
    stars -= 2;
  }

  array.forEach(row => console.log(row));
}

// function diamond(num) {
//   let stars = num;
//   let padding = 0;
//   let array = [];

//   while (stars > 0) {
//     let row = `${'*'.repeat(padding)}${' '.repeat(stars)}${'*'.repeat(padding)}`;

//     if (stars === num) {
//       array.push(row);
//     } else {
//       array.unshift(row);
//       array.push(row);
//     }

//     padding += 1;
//     stars -= 2;
//   }

//   array.forEach(row => console.log(row));
// }

diamond(1);
// logs
/* * */

diamond(3);
// logs
/*  *
***
 * */

diamond(9);
// logs
/*     *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    * */