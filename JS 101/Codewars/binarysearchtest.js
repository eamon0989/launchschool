
function binarySearch(array, element) {
  let currentIndex = Math.floor(array.length / 2);
  let max = array.length - 1;
  let min = 0;
  console.log(array, element, currentIndex);
  while (true) {
    console.log(array, element, currentIndex);

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
      return false;
    } else if (array[currentIndex] < element && max === currentIndex) {
      return false;
    }
  }
}

console.log(binarySearch(['d', 'k', 'q'], 'd'));