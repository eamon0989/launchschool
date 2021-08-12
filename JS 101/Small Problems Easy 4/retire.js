let rlsync = require('readline-sync');

let age = rlsync.question('How old are you? ');

while (age < 10 || age > 120) {
  age = rlsync.question('How old are you? ');
}

let retireAge = rlsync.question('At what age would you like to retire? ');

while (retireAge < age) {
  retireAge = rlsync.question('At what age would you like to retire? ');
}

let year = new Date();
let currentYear = year.getFullYear();

let yearsUntilRetirement = retireAge - age;
let retirementYear = currentYear + yearsUntilRetirement;

let returnString = `
It's ${currentYear}. You will retire in ${retirementYear}.
You have only ${yearsUntilRetirement} years of work to go!
`;

console.log(returnString);
