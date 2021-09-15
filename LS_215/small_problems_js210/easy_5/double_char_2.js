// function doubleConsonants(string) {
//   return string.replace(/([aeiou])|([a-z])/gi, (_, p1, p2) => {
//     if (p1) return p1;
//     return p2.repeat(2);
//   })
// }

function doubleConsonants(string) {
  return string.replace(/([^aeiou_\W\d])/gi, '$1$1');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""