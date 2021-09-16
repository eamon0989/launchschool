function alphabetized(string) {
  let returnString = '';
  string = string.replace(/[\s\W\d_]/g, '');

  while (string.length > 0) {
    let currentLowest = string[0];
    for (let index = 0; index < string.length; index += 1) {

      if (string[index].toLowerCase() < currentLowest.toLowerCase()) {
        currentLowest = string[index];
      }
    }
    string = string.replace(currentLowest, '');
    returnString += currentLowest;
    currentLowest = '';
  }

  return returnString;
}

console.log(alphabetized('The Holy Bible'));//, 'BbeehHilloTy')
