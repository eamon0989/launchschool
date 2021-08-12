function reverse(array) {
  let pointer1 = 0;
  let pointer2 = array.length - 1;

  while (pointer1 < pointer2) {
    [array[pointer1], array[pointer2]] = [array[pointer2], array[pointer1]];
    pointer1 += 1;
    pointer2 -= 1;
  }

  return array;
}

console.log(reverse([1, 2, 3, 4, 5, 6, 7]));
console.log(reverse([1, 2, 3, 4, 5, 6]));
console.log(reverse(['a', 'p', 'p', 'l', 'e']));