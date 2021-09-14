let rlsync = require('readline-sync');
console.log(`What is your age?`);
let age = rlsync.prompt();
console.log(`At what age would you like to retire?`);
let retireAge = rlsync.prompt();
let year = new Date().getFullYear();
let yearsToGo = retireAge - age;

console.log(`It's ${year}. You will retire in ${year + yearsToGo}.`);
console.log(`You have only ${yearsToGo} years of work to go!`);