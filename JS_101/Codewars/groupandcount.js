

function letterCount(string) {
  return [...string].reduce((obj, char) => {
    obj[char] = obj[char] ? obj[char] + 1 : obj[char] = 1;
    return obj;
  } ,{});
}

console.log(letterCount('arithmetics')); //=> {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}
