// input - ask for user's name
// output - greet the user. If input has ! return upper case

const rlsync = require('readline-sync');

console.log("What's your name? ");
let name = rlsync.question();

while (invalidString(name)) {
  console.log('Please enter a valid name: ');
  name = rlsync.question();
}

function invalidString(string) {
  if (string.length > 0) {
    return false;
  }
  return true;
}

function greeting(name) {
  if (name.endsWith('!')) {
    name = name.slice(0, -1);
    console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING???`);
  } else {
    console.log(`Hello ${name}.`);
  }
}

greeting(name);