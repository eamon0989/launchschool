const rlsync = require('readline-sync');

console.log(`Enter the 1st num:`);
let first = rlsync.prompt();

console.log(`Enter the 2nd num:`);
let second = rlsync.prompt();

console.log(`Enter the 3rd num:`);
let third = rlsync.prompt();

console.log(`Enter the 4th num:`);
let fourth = rlsync.prompt();

console.log(`Enter the 5th num:`);
let fifth = rlsync.prompt();

console.log(`Enter the last num:`);
let last = rlsync.prompt();

let array = [first, second, third, fourth, fifth];
let appears = array.includes(last);
console.log(`The number ${last} ${appears ? 'appears' : 'does not appear'} in ${array}.`);