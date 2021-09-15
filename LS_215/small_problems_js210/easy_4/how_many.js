function countOccurrences(array) {
  let count = array.reduce((obj, ele) => {
    obj[ele] ? obj[ele] += 1 : obj[ele] = 1;
    return obj;
  }, {});

  Object.entries(count).forEach(arr =>
    console.log(`${arr[0]} => ${arr[1]}`));
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
'motorcycle', 'motorcycle', 'car', 'truck'];

console.log(countOccurrences(vehicles));

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2