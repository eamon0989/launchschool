
function binarySearch(array, element) {
  let currentIndex = Math.floor(array.length / 2);
  let max = array.length - 1;
  let min = 0;

  while (true) {
    iterations += 1;
    if (array[currentIndex] === element) {
      return currentIndex;
    } else if (array[currentIndex] < element) {
      min = currentIndex + 1;
      currentIndex = Math.floor((max + min) / 2);
    } else if (array[currentIndex] > element) {
      max = currentIndex - 1;
      currentIndex = Math.floor(min + ((max - min) / 2));
    }

    if (array[currentIndex] > element && min === currentIndex) {
      return - 1;
    } else if (array[currentIndex] < element && max === currentIndex) {
      return - 1;
    }
  }
}

// function binarySearch(array, element) {
//   let currentIndex = Math.floor(array.length / 2);
//   let max = array.length - 1;
//   let min = 0;

//   while (true) {
//     if (array[currentIndex] === element) {
//       return currentIndex;
//     } else if (array[currentIndex] < element) {
//       min = currentIndex + 1;
//       currentIndex = Math.floor((max + min) / 2);
//     } else if (array[currentIndex] > element) {
//       max = currentIndex - 1;
//       currentIndex = Math.floor(min + ((max - min) / 2));
//     }

//     if (min > max) {
//       return -1;
//     }

//   }
// }

// function binarySearch(array, element) {
//   let max = array.length - 1;
//   let min = 0;
//   while (min <= max) {
//     let currentIndex = min + Math.floor((max - min) / 2);
//     if (array[currentIndex] === element) {
//       return currentIndex;
//     } else if (array[currentIndex] < element) {
//       min = currentIndex + 1;
//     } else if (array[currentIndex] > element) {
//       max = currentIndex - 1;
//     }
//   }

//   return -1;
// }


let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 103));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], -10));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6