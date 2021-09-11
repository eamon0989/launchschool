/*
Input: octal numbers
Output: Decimal numbers

Rules:

Algorithm:
reverse string, split and convert to numbers
each digit * Math.pwr(8, index)
convert to string, reverse and convert to a number

*/


// function octalToDecimal(numberString) {
//   return numberString.split('').reverse().map(Number)
//     .map((num, index) => num * Math.pow(8, index))
//     .reverse().reduce((acc, num) => acc + num);
// }

function octalToDecimal(numberString) {
  return numberString.split('').reduce((sum, digitChar, index) => {
    return sum + Number(digitChar) * Math.pow(8, numberString.length - index - 1);
  }, 0);
}


console.log(octalToDecimal('233'));
console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9

