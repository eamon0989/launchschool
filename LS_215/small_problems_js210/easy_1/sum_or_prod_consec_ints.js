let rlsync = require("readline-sync");
console.log('Please enter an integer greater than 0: ');
let int = Number(rlsync.prompt());
console.log('Enter "s" to compute the sum, or "p" to compute the product.');

let sOrP = rlsync.prompt();
if (sOrP === 's') {
  let sum = 0;
  for (let i = 0; i <= int; i += 1) {
    sum += i
  }

  console.log(`The sum of the integers between 1 and ${int} is ${sum}.`);
} else if (sOrP === 'p') {
  let prod = 1;
  for (let i = 2; i <= int; i += 1) {
    prod *= i
  }

  console.log(`The product of the integers between 1 and ${int} is ${prod}.`);
}
