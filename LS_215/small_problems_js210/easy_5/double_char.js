function repeater(string) {
  return [...string].map(char => char.repeat(2)).join('');
}

function repeater(string) {
  return string.replace(/(.)/g, '$1$1');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""