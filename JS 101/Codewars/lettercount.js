/*
Split a string into an array
Sort the chars
return an object containing the amount of each char

*/

function letterCount(string) {
  return [...string].sort().reduce((obj, char) => {
    obj[char] = obj[char] ? obj[char] + 1 : 1;
    return obj;
  }, {});

  // let array = Object.entries(obj);
  // array.sort((a, b) => a[0].charCodeAt() - b[0].charCodeAt());

  // return array.reduce((obj, sub) => {
  //   obj[sub[0]] = sub[1];
  //   return obj;
  // } ,{});
}

console.log(letterCount('arithmetics')); //=> {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}
