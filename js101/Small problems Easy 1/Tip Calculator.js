//input bill amount and rate, numbers
// output - string with the tip amount and total

let rlSync = require('readline-sync');

function tipCalculator() {
  let bill = parseFloat(rlSync.question("What's the bill? "));
  let tipPercentage = parseFloat(rlSync.question("What's the tip percentage? "));

  let tip = (bill / 100) * tipPercentage;
  let total = tip + bill;
  console.log(`The tip is $${tip.toFixed(2)}.
The total is $${total.toFixed(2)}.`);
}

tipCalculator();