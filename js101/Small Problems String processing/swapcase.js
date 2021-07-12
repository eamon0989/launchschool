function swapCase(string) {
  return [...string].map(char =>
    (/[A-Z]/.test(char) ? char.toLowerCase() : char.toUpperCase()))
    .join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"