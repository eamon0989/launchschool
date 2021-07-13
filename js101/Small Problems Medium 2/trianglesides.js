/* A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.
To be a valid triangle, the sum of the lengths of the two shortest
sides must be greater than the length of the longest side, and every
side must have a length greater than 0. If either of these conditions
is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle
as arguments and returns one of the following four strings representing
the triangle's classification: 'equilateral', 'isosceles', 'scalene', or
'invalid'.

input: 3 numbers
output: a string

rules:
if one number is 0 or lower, return invalid
if the sum of the 2 smaller numbers is not greater than the larger number,
return invalid
if all 3 numbers are the same, return equilateral
if 2 are the same and the other is greater than 0, return isoceles
if all 3 numbers are greater than 0 and are different, return scalie


algorithm:

 - check if any of the numbers are less than 0, if so return invalid
 - sort numbers in an array from lower to higher
 - check if the sum of the smaller 2 numbers are greater than the
     larger num, if not return invalid
   - check if all 3 numbers are the same, if so return equilateral
   - check if 2 are the same, if so return isoceles
   - check if all 3 numbers are different, return scalie

Examples: */

function triangle(num1, num2, num3) {
  let [shortest, middle, longest] = [...arguments].sort((a, b) => a - b);

  if (shortest <= 0) {
    return `invalid`;
  } else if (shortest + middle <= longest) {
    return `invalid`;
  }

  if (num1 === num2 && num2 === num3) {
    return `equilateral`;
  } else if (num1 === num2 || num1 === num3 || num2 === num3) {
    return `isoceles`;
  } else {
    return `scalene`;
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"