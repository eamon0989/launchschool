function runningTotal(array) {
  if (array.length < 2) {
    return array;
  }

  let returnArray = [];
  array = array.map(ele => {
    if (typeof ele !== 'number') {
      return Number(ele);
    }

    return ele;
  });

  array = array.filter(ele => !Number.isNaN(ele));

  array.reduce((acc, ele) => {
    acc += ele;
    returnArray.push(acc);
    return acc;
  }, 0);

  return returnArray;
}


console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([14, 11, '7', 15, 'jim', 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []