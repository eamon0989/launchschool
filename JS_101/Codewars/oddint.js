/* Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

 */
function findOdd(array) {
  array = array.map(String);
  let string = String(array);
  for (let i = 0; i < array.length; i += 1) {
    let char = new RegExp(`(\b${array[i]})`, 'gi');
    console.log(char);
    if (string.match(char).length % 2 === 1) {
      return Number(array[i]);
    }
  }

  return -1;
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5));
console.log(findOdd([ 1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5 ], -1));