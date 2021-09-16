function nextBiggerNum(num) {
  if (num < 10) {
    return -1;
  }

  let digits = String(num).split('');
  for (let i = digits.length - 1; i > 0; i -= 1) {
    console.log(digits[i]);
    let breakClause;
    for (let j = i - 1; j > i - 2; j -= 1) {
      console.log(digits[i], digits[j]);
      if (digits[i] - digits[j] > 0) {
        let last = digits[i];
        let secondLast = digits[j];
        
        digits[i] = secondLast;
        digits[j] = last;
        breakClause = true;
        return Number(digits.join(''));
      }
    }
    if (breakClause) {
      break;
    }
    return -1;
  }

  return Number(digits.join(''));
}



console.log(nextBiggerNum(9));
console.log(nextBiggerNum(12));
console.log(nextBiggerNum(513));
console.log(nextBiggerNum(2017));
console.log(nextBiggerNum(111));
console.log(nextBiggerNum(531));
console.log(nextBiggerNum(1432));
console.log(nextBiggerNum(123456789));
