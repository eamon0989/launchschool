/*

a stack of values - an array
register, which can be thought of as the current value

n - user input - register
PUSH - push value to stack, keep in register
ADD - pop from stack add to register, storing in register
SUB - like add but subtracting
MULT - 
DIV - 
POP - set register to pop value
PRINT - print the register value

steps 
 - initialize stack and register
 - add push, add functions etc
 - allow user input
 - parse user input

 */

let rlsync = require('readline-sync');
let stack = [];
let register = 0;

function minilang(stringInput) {
  let input = String(stringInput).split(' ');
  input.forEach((element) => {
    if (element === 'PRINT') {
      console.log(register);
    } else if (element === 'PUSH') {
      stack.push(register);
    } else if (element === 'ADD') {
      if (stack.length === 0) {
        return console.log(`There are no numbers in the stack`);
      }
      register += stack.pop();
    } else if (element === 'SUB') {
      if (stack.length === 0) {
        return console.log(`There are no numbers in the stack`);
      }
      register -= stack.pop();
    } else if (element === 'MULT') {
      if (stack.length === 0) {
        return console.log(`There are no numbers in the stack`);
      }
      register *= stack.pop();
    } else if (element === 'DIV') {
      if (stack.length === 0) {
        return console.log(`There are no numbers in the stack`);
      }
      register = Math.floor(register / stack.pop());
    }  else if (element === 'REMAINDER') {
      register = Math.floor(register % stack.pop());
    } else if (element === 'POP') {
      if (stack.length === 0) {
        return console.log(`There are no numbers in the stack`);
      }
      register = stack.pop();
    } else if (/[0-9]/.test(element)) {
      register = Number(element);
    } else {
      return console.log(`Invalid input`)
    }
  });

  return undefined;
}

while (true) {
  let operation = rlsync.question();
  minilang(operation);
}


