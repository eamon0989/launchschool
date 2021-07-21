function expandedForm(integer) {
  let answer = [];
  let stringInt = integer.toString();

  for (let index = 0; index <= stringInt.length; index++) {
    if (stringInt[index] !== '0') {
      answer.push(stringInt[index] + '0'.repeat((stringInt.length - index - 1) || 0));
      console.log(answer)
    }
  }
}

console.log(expandedForm(12)); // Should return '10 + 2'
console.log(expandedForm(42)); // Should return '40 + 2'
console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'
