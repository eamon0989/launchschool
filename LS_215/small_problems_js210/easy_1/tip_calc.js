let rlsync = require("readline-sync");
console.log('What is the bill?');
let bill = rlsync.prompt();
console.log('What is the tip percentage?');
let perc = rlsync.prompt();
let tip = (bill / 100) * perc;

console.log(`The tip is $${tip}`);
console.log(`The total is $${Number(bill) + Number(tip)}`);