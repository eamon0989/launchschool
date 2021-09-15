function interleave(arr1, arr2) {
  return arr1.map((ele, index) => [ele, arr2[index]]).flat();
}

function interleave(arr1, arr2) {
  return arr1.flatMap((ele, index) => [ele, arr2[index]]);
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]