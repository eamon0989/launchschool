function joinOr(array, char = ', ', string = 'or' ) {
  let returnString = '';

  if (array.length === 2) {
    return `${array[0]} ${string} ${array[1]}`;
  }

  for (let index = 0; index < array.length; index += 1) {
    if (index === 0) {
      returnString += array[index];
    } else if (index === array.length - 1) {
      returnString += `${char}${string} ${array[index]}`;
    } else {
      returnString += `${char}${array[index]}`;
    }
  }
  return returnString;
}

console.log(joinOr(['1', '2', '3']));               // => "1, 2, or 3"
console.log(joinOr([1, 2, 3, 4, 5, 6, 7, '8', '9']));               // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
console.log(joinOr([]));                      // => ""
console.log(joinOr([5]));                     // => "5"
console.log(joinOr([1, 2]));                  // => "1 or 2"