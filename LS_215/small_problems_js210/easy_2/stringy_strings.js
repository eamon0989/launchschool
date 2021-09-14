function stringy(num) {
  let string = '';
  let one = true;
  for (let i = 0; i < num; i += 1) {
    if (one) {
      string += '1';
    } else {
      string += '0';
    }

    one = !one;
  }

  return string;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"