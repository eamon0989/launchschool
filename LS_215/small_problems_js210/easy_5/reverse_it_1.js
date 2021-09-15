// function reverseSentence(string) {
//   return string.split(' ').reverse().join(' ');
// }

function reverseSentence(string) {
  return string.match(/\w+/gi)?.reverse().join(' ') || '';
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"