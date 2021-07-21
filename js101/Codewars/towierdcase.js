function toWeirdCase(string) {
  let count = 1;
  return [...string].map(char => {
    if (/\w/.test(char)) {
      count += 1;
    } else if (/\s/.test(char)) {
      count = 1;
    }

    if (count % 2 === 0) {
      return char.toUpperCase();
    }

    return char.toLowerCase();
  }).join('');
}

console.log(toWeirdCase('This is a test')); //ThIs Is A TeSt