//Use JavaScript's string methods on the string 'Captain Ruby' to produce the string 'Captain JavaScript'.

let string1 = 'Captain Ruby';

function transformation(string) {
  let arr = string.split(' ');
  return arr[0] += ' Javascript';
}

console.log(transformation(string1));