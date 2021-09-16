function filter(array, callback) {
  let filtered = [];
  for (let index = 0; index < array.length; index += 1) {
    if (callback(array[index])) {
      filtered.push(array[index]);
    }
  }

  return filtered;
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]