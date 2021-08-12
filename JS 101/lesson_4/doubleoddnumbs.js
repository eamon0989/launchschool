function doubleOddNumbers(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    if (index % 2 === 1) {
      numbers[index] *= 2;
    }
  }
}

let myNumbers = [1, 4, 3, 7, 2, 6];
doubleOddNumbers(myNumbers);  // => [2, 4, 6, 14, 2, 6]

// not mutated
console.log(myNumbers);                    // => [1, 4, 3, 7, 2, 6]