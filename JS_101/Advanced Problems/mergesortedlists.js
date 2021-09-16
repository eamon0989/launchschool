// function merge(array1, array2) {
//   let copy1 = array1.slice();
//   let copy2 = array2.slice();

//   let array = [];

//   let count = copy1.length + copy2.length;
//   while (count > 0) {
//     if (copy1[0] === undefined) {
//       array.push(copy2.shift());
//     } else if (copy2[0] === undefined) {
//       array.push(copy1.shift());
//     } else if (copy1[0] >= copy2[0]) {
//       array.push(copy2.shift());
//     } else {
//       array.push(copy1.shift());
//     }

//     count -= 1;
//   }

//   return array;
// }

function merge(array1, array2) {
  let copy1 = array1.slice();
  let copy2 = array2.slice();

  let array = [];

  while (copy1.length > 0 && copy2.length > 0) {
    if (copy1[0] >= copy2[0]) {
      array.push(copy2.shift());
    } else {
      array.push(copy1.shift());
    }
  }

  if (copy1.length === 0) {
    return array.concat(copy2);
  } else if (copy2.length === 0) {
    return array.concat(copy1);
  }

  return array;
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]