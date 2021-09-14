let rlsync = require("readline-sync");

console.log(`Enter a noun:`);
let noun = rlsync.prompt();

console.log(`Enter a verb:`);
let verb = rlsync.prompt();

console.log(`Enter an adjective:`);
let adjective = rlsync.prompt();

console.log(`Enter an adverb:`);
let adverb = rlsync.prompt();


// console output
console.log(`Do you ${verb} your ${adjective} dog ${adverb}? That's hilarious!`);