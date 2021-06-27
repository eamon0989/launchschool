// Asl the user for the first number
// Ask the user for the second number
// Ask the user for an operation to perform
// Perform the operation on the two numbers
// Print the result to the terminal
const MESSAGES = require('./calculator_messages.json');
// let english = MESSAGES.english;
// let spanish = MESSAGES.spanish;


const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

let lang = {};
prompt('English or Spanish?');
let language = readline.question();
if (language.toLowerCase() === 'english') {
  lang = MESSAGES.english;
} else if (language.toLowerCase() === 'spanish') {
  lang = MESSAGES.spanish;
} else {
  console.log(`Sorry, we don't speak your language`);
}
console.log(lang.welcome);
prompt(lang.welcome);

while (true) {

  prompt(lang.first);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(lang.invalid);
    number1 = readline.question();
  }

  prompt(lang.second);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(lang.invalid);
    number2 = readline.question();
  }

  prompt(lang.operation);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(lang.choose);
    operation = readline.question();
  }

  let output;

  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }
  if (language.toLowerCase() === 'spanish') {
    prompt(`El resultado es: ${output}`);
  } else {
    prompt(`The result is: ${output}`);
  }


  prompt(lang.another);
  let answer = readline.question();

  if (answer[0].toLowerCase() !== 'y') break;
}
