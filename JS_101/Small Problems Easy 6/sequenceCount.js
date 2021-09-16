function sequence(count, num) {
  return [...Array(count)].reduce((array, _, index) => {
    array.push(num * (index + 1));
    return array;
  }, []);
}

// function sequence(count, num) {
//   return [...Array(count)].map((_, index) => num * (index + 1));
// }

// function sequence(count, num) {
//   return Array(count).fill(undefined).map((_, index) => num * (index + 1));
// }


console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []