/* 
Input: array, search item
Output: index of search item from array

Mental model:

get the middle item
check if it's value is equal to, greater than or less than the search item
it is equal, return the index
if it is smaller, find the value halfway between the current value and last value
make the middle value the smallest possible
if it is greater, find the value halfway between the current value and first value
make the middle value the largest possible
continue until item is found








*/
function binarySearch(array, item) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let current = min + Math.floor((max - min) / 2);

    if (array[current] === item) {
      return current;
    } else if (array[current] < item) {
      min = current + 1;
    } else {
      max = current - 1;
    }
  }

  return -1;
}




const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6