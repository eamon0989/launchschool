/* Please write a function that will take a string as input and
return a hash. The string will be formatted as such. The key will always
be a symbol and the value will always be an integer.

"a=1, b=2, c=3, d=4"
This string should return a hash that looks like

{ 'a': 1, 'b': 2, 'c': 3, 'd': 4} */

function strToHash(string) {
  return string.split(', ').reduce((obj, char) => {
    char = char.split('=');
    let key = char[0];
    let value = char[1];

    if (key === '') {
      return obj;
    }

    obj[key] = Number(value);
    return obj;
  }, {});
}

console.log(strToHash("a=1, b=2, c=3, d=4"));