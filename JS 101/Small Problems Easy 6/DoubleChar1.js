function repeater(string) {
  return [...string].map(char => char + char).join('');
}

// function repeater(string) {
//   return string.split('').map(char => char.repeat(2)).join('');
// }

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""


// let string = 'Good job!';
// console.log([...string]); // [ 'G', 'o', 'o', 'd', ' ', 'j', 'o', 'b', '!' ]