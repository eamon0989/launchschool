function logInBox(string) {
  string = `| ${string} |`;
  let length = string.length - 2;

  return `
  +${'-'.repeat(length)}+
  |${' '.repeat(length)}|
  ${string}
  |${' '.repeat(length)}|
  +${'-'.repeat(length)}+
  `
}

console.log(logInBox(''));
console.log(logInBox('To boldly go where no one has gone before.'));