function removeEveryOther(array) {
  let pointer = 0;
  while (pointer < array.length) {
    array[pointer] = false;
    pointer += 2;
  }

  return array.filter(ele => ele);
}

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7]));
console.log(removeEveryOther([1, 2, 3, 4, 5, 6]));
console.log(removeEveryOther(['a', 'p', 'p', 'l', 'e']));