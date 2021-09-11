function multiplyAllPairs(arr1, arr2) {
  let result = [];

  arr1.forEach(num => {
    result.push(...numByArr(num, arr2));
  })

  return result.sort((a, b) => a - b);
}

function numByArr(num, arr) {
  return arr.map(ele => ele * num);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]