/* 
Input: 3 numbers
Output: string

Requirements:
if triangle is invalid, return 'invalid'
if all 3 nums are equal, return 'equilateral'
if 2 nums are equal, return 'isosceles'
if all 3 nums are different, return 'scalene'

to be valid:
all nums must be greater than 0
the sum of the smaller nums must be greater than the larger num


Algorithm:
  - check that all nums are greater than 0, otherwise return invalid
  - check if all nums are equal (a + b === a + c)
    - return equilateral
  - sort the numbers by value descending
    - check that the sum of the 2 smaller nums is greater than the largest
      - if not return invalid
  - check if 2 nums are equal
    - if so return isosceles
  return scalene
*/

// function triangle(...args) {
//   if (args.filter(num => num > 0).length < 3) return 'invalid';
//   if (args[0] === args[1] && args[1] === args[2]) return 'equilateral';

//   args.sort((a, b) => a - b);
//   if (args[2] > args[0] + args[1]) return 'invalid';
//   if (args[1] === args[2] || args[1] === args[0]) return 'isosceles';
//   return 'scalene';
// }


function triangle(...sides) {
  let [side1, side2, side3] = sides.sort((a, b) => a - b);

  if (!side1 > 0) return 'invalid';
  if (side3 > side1 + side2) return 'invalid';

  if (side1 === side2 && side2 === side3) return 'equilateral';
  if (side2 === side3 || side2 === side1) return 'isosceles';
  return 'scalene';
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"