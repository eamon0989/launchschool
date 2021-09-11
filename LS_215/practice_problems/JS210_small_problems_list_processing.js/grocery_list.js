function buyFruit(array) {
  return array.map(arr => `${arr[0]} `.repeat(arr[1]).split(' ')).flat();
}

function buyFruit(array) {
  return array.reduce((arr, subArr) => {
    for (let i = subArr[1]; i >= 0; i -=1) {
      arr.push(subArr[0])
    }

    return arr;
  }, [])
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]