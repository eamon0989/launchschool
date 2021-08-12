// function removeLastChar(string) {
//   let arr = string.split('');
//   arr.pop();
//   return arr.join('');
// }

function removeLastChar(string) {
  return string.substring(0, string.length - 1);
}

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'