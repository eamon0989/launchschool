/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
let reverseString = function(array) {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    [array[start], array[end]] = [array[end], array[start]];
    start += 1;
    end -= 1;
  }

  return array;
};

let string = ["h","e","l","l","o"];
console.log(reverseString(string));