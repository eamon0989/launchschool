function doubleConsonants(string) {
  return [...string].map(
    char => ((/[bcdfghjklmnpqrstvwxyz]/i.test(char)) ? char.repeat(2) : char)
  ).join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""