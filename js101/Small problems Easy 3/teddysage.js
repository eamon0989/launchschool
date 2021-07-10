/* - use Math.floor(Math.random() * 120)
- if number is less than 20 try again
- return the string `Teddy is ${age} years old!`
 */

// function randomAge(max, min) {
//   let age = Math.floor(Math.random() * (max - min + 1)) + min;
//   return `Teddit is ${age} years old!`;
// }

function randomAge(max, min) {
  let age = (min + 1) + Math.floor(Math.random() * (max - min));
  return `Teddit is ${age} years old!`;
}

console.log(randomAge(120, 20));
console.log(randomAge(120, 20));
console.log(randomAge(120, 20));
console.log(randomAge(120, 20));
console.log(randomAge(120, 20));
console.log(randomAge(120, 20));
console.log(randomAge(120, 20));