function multiply(array, num) {
  let newArr = [];

  for (let index = 0; index < array.length; index += 1) {
    newArr.push(array[index] * num);
  }

  return newArr;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]
console.log(multiply(myNumbers, 30)); // => [3, 12, 9, 21, 6, 18]
console.log(myNumbers);