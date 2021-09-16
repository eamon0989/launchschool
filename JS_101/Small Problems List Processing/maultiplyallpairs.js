function multiplyAllPairs(array1, array2) {
  // let array = args.flat();
  // let unique = array.filter((num, index) => array.indexOf(num) === index)
  //   .sort((a, b) => a - b);
  let returnArray = [];
  // console.log(array);
  // for (let i = 0; i < array1.length; i += 1) {
  //   for (let j = 0; j < array2.length; j += 1) {
  //     returnArray.push(array1[i] * array2[j]);
  //   }
  // }

  array1.forEach(num => {
    array2.forEach(num1 => {
      returnArray.push(num * num1);
    });
  });

  return returnArray.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]