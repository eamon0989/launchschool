// let numbers = [1, 2, 3, 4];

// for (let i = numbers.length; i > 0; i -= 1) {
//   numbers.pop();
// }
// console.log(numbers);

// let numbers = [1, 2, 3, 4];

// numbers = [];
// console.log(numbers);

// let numbers = [1, 2, 3, 4];
// numbers = numbers.filter(_ => false);
// console.log(numbers);

// let numbers = [1, 2, 3, 4];
// numbers.length = 0;
// console.log(numbers);

// let numbers = [1, 2, 3, 4];
// numbers.splice(0, numbers.length);
// console.log(numbers);

// let numbers = [1, 2, 3, 4];
// while (numbers.length) {
//   numbers.pop();
// }
// console.log(numbers);

// function isColorValid(color) {
//   return (color === "blue" || color === "green");
// }

// function isColorValid(color) {
//   return color.includes('blue' || 'green');
// }

// const isColorValid = color => color === 'blue' || color === 'green';
const isColorValid = color => ['green', 'blue'].includes(color);

console.log(isColorValid('black'));
// console.log(isColorValid2('black'));