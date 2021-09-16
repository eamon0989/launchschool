class Octal {
  constructor(num) {
    this.num = num;
  }

  toDecimal() {
    if (Number.isNaN(Number(this.num))) return 0;

    let num = String(this.num);
    let powers = 0;
    let decimal = [];

    for (let index = num.length - 1; index >= 0; index -= 1) {
      if (num[index] > 7) return 0;
      decimal.push((Number(num[index]) * (8 ** powers)));
      powers += 1;
    }

    return decimal.reduce((acc, num) => acc + num);
  }
}

// let octal = new Octal('1');
// console.log(octal.toDecimal());

let octal = new Octal('17');
console.log(octal.toDecimal()); // 15
/*
233 # octal
= 2*8^2 + 3*8^1 + 3*8^0
= 2*64  + 3*8   + 3*1
= 128   + 24    + 3
= 155 */

module.exports = Octal;