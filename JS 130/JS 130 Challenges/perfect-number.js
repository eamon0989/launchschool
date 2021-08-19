class PerfectNumber {
  static classify(num) {
    if (num < 0) throw new 'Num must be a positive integer!'();

    let sum = 0;
    for (let divisor = 1; divisor < num; divisor += 1) {
      if (num % divisor === 0) {
        sum += divisor;
      }
    }

    if (sum === num) return 'perfect';
    if (sum > num) return 'abundant';
    return 'deficient';
  }
}

module.exports = PerfectNumber;