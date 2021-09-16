// function isBlank(string) {
//   return (string.length === 0) ? true : false;
// }

function isBlank(string) {
  return string.length === 0;
}

isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true