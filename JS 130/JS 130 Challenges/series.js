class Series {
  constructor(numbers) {
    this.numbers = numbers;
  }
  slices(sliceLength) {
    let len = this.numbers.length;
    if (sliceLength > len) throw new `length is greater than string`();

    let maxIndex = len - (sliceLength - 1);
    let returnValues = [];

    for (let index = 0; index < maxIndex; index += 1) {
      returnValues.push(this.numbers.slice(index, index + sliceLength)
        .split('')
        .map(Number));
    }

    return returnValues;
  }
}

module.exports = Series;