function sort(array) {

  while (sortOnce(array)) {
    sortOnce(array);
  }

  return array;
}

function sortOnce(array) {
  let pointer1 = 0;
  let pointer2 = 1;
  let changed = false;
  while (pointer2 < array.length) {
    if (array[pointer1] > array[pointer2]) {
      [array[pointer1], array[pointer2]] = [array[pointer2], array[pointer1]];
      changed = true;
    }
    pointer1 += 1;
    pointer2 += 1;
  }
  return changed;
}

console.log(sort([10, 2, 30, 4, 9, 6, 7]));
console.log(sort([21, 33, 11, 24, 15, 6]));
console.log(sort(['a', 'p', 'p', 'l', 'e']));