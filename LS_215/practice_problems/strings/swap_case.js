function swapCase(string) {
  return string.replace(/\w/g, char => /[A-Z]/.test(char)
    ? char.toLowerCase() : char.toUpperCase());
}

function swapCase(string) {
  return string.replace(/\w/g, char => 
    char === char.toUpperCase()
    ? char.toLowerCase() : char.toUpperCase());
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"