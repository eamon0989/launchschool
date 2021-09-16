class SumOfMultiples {
  constructor(...args) {
    this.multiples = args;
  }

  to(num) {
    let divisors = [];
    for (let currentNum = 0; currentNum < num; currentNum += 1) {
      for (let index = 0; index < this.multiples.length; index += 1) {
        if (currentNum % this.multiples[index] === 0) {
          divisors.push(currentNum);
        }
      }
    }
    return divisors.filter((num, index, array) => index === array.indexOf(num))
      .reduce((acc, num) => acc + num);
  }

  static to(num) {
    let multiples = [3, 5];
    return new SumOfMultiples(...multiples).to(num);
  }
}

module.exports = SumOfMultiples;