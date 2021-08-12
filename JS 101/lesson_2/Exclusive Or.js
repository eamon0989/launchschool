/*
input = 2 arguments
output = true if exactly one arg is truthy, false otherwise
if (true && false) || (false and true)

if arg1 || arg2 !arg1 && arg2
*/


function xor(arg1, arg2) {
  if ((arg1 || arg2) && (!(arg1 && arg2))) {
    return true;
  }
  return false;
}

// function xor(arg1, arg2) {
//   return !!((arg1 || arg2) && (!(arg1 && arg2)));
// }

// console.log(xor(5, 0) === true);
// console.log(xor(false, true) === true);
// console.log(xor(1, 1) === false);
// console.log(xor(true, true) === false);

console.log(xor(5, 0));
console.log(xor(false, true));
console.log(xor(1, 1));
console.log(xor(true, true));