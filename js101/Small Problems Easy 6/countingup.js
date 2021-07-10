// function sequence(num) {
//   let array = [];
//   for (let i = 1; i <= num; i += 1) {
//     array.push(i);
//   }

//   return array;
// }

// function sequence(num) {
//   return [...Array(num)].reduce((array, _, index) => {
//     array[index] = index + 1;
//     return array;
//   }, []);
// }

function sequence(num) {
  return [...Array(num)].map((_, index) => index + 1);
}

// function sequence(number) {
//   if (number === 1) {
//     return [1];
//   } else {
//     return [...sequence(number - 1), number];
//   }
// }

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]