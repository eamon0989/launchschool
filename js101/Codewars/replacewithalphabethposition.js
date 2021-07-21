let alphabet = '0abcdefghijklmnopqrstuvwxyz';

function alphabetPosition(string) {
  return [...string.toLowerCase()].filter(char => /[A-Za-z]/.test(char)).map(char => alphabet.indexOf(char)).join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));