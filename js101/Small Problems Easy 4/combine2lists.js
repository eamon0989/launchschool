// function interleave(arr1, arr2) {
//   let newArr = [];

//   reassign(arr1, newArr, 0);
//   reassign(arr2, newArr, 1);

//   return newArr;
// }

// function reassign(array, newArr, count) {
//   while (array.length > 0) {
//     newArr[count] = array.shift();
//     count += 2;
//   }

//   return newArr;
// }

// function interleave(arr1, arr2) {
//   let newArr = [];

//   arr1.forEach((_, index) => {
//     newArr.push(arr1[index], arr2[index]);
//   });

//   return newArr;
// }

function interleave(arr1, arr2) {

  return arr1.reduce((array, _, index) => {
    array.push(arr1[index], arr2[index]);
    return array;
  }, []);

}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

/*
easy way
new array, loop over array 1, assign elements to index incrementing by 2 from 0
loop over array 2 and assign elements to index incrementing by 2 from 1
*/