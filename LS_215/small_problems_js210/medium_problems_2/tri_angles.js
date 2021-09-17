/* 
Input: 3 ints representing degrees
Output: string - 'right', 'acute', 'obtuse', or 'invalid'.

Requirements:
check if a triangle is valid
check if it is a right angle, acute angle or obtuse angle triangle

a valid triangle has 180 degrees
every angle must be greater than 0

Algorithm:
  - sum the arguments
    - if not 180, return 'invalid'
  - sort the arguments
    - if any are not greater than 0, return 'invalid'
  - if the largest side > 90
    - return obtuse
  - if the largest is 90
    - return right
  - else return 'acute
*/
function triangle(...sides) {
  let [ side1, side2, side3 ] = sides.sort((a, b) => a - b);
  if (sides.reduce((acc, num) => acc + num) !== 180 ||
    !side1 > 0) return 'invalid';

  if (side3 > 90) {
    return 'obtuse';
  } else if (side3 === 90) {
    return 'right';
  }

  return 'acute';
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"