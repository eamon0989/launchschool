function multiplyList(array1, array2) {
  return array1.map((num, index) => num * array2[index]);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]