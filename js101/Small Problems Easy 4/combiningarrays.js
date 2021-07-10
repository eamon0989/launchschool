// function union(...args) {
//   let newArray = [];
//   args.forEach(ele => copyNonDuplicates(newArray, ele));

//   return newArray;
// }

// function copyNonDuplicates(newArray, array) {
//   array.forEach(ele => {
//     if (!newArray.includes(ele)) {
//       newArray.push(ele);
//     }
//   });

//   return newArray;
// }


// function union(...args) {
//   let array = [...args.flat()];
//   array = array.filter((ele, index) => array.indexOf(ele) !== index);
//   return array;
// }

// function union(...args) {
//   return Array.from(new Set(args.flat()));
// }

function union(...args) {
  let array = [...args.flat()];
  array = array.reduce((array, element) => {
    return array.includes(element) ? array : [...array, element];
  }, []);
  return array;
}

console.log(union([1, 3, 5, 5], 100, 'hi'));
console.log(union([1, 3, 5, 5]));    // [1, 3, 5, 6, 9]
console.log(union([]));    // [1, 3, 5, 6, 9]
console.log(union(['howdy'], 1001, 'hey there', [1001], {a: 1, b: 2}));    // [1, 3, 5, 6, 9]
