/* 
Input: 2 strings
Output: boolean

Rules:
only lowercase will be used, case doesn't matter


*/

// function scramble(str1, str2) {
//   let string = '';
//   str1 = str1.split('');
//   // console.log(str1);
//   for (let i = 0; i < str2.length; i += 1) {
//     if (str1.includes(str2[i])) {
//       string += str2[i];
//       str1.splice(str1.indexOf(str2[i]), 1);
//     }
//   }

//   return string === str2;
// }

function scramble(str1, str2) {
  str1 = str1.split('').sort();
  let string = '';
  for (let i = 0; i < str2.length; i += 1) {
    let index = false;
    index = binarySearch(str1, str2[i]);
    if (index !== false) {
      string += str2[i];
      str1.splice(index, 1);

    }
  }
  return string === str2;
}

function binarySearch(array, element) {
  let currentIndex = Math.floor(array.length / 2);
  let max = array.length - 1;
  let min = 0;
  // console.log(array, element);
  while (true) {
    // console.log(array, element, currentIndex);

    if (array[currentIndex] === element) {
      // console.log(currentIndex, element);
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
console.log(scramble('rkqodlw', 'world'));// ==> True
console.log(scramble('cedewaraaossoqqyt', 'codewars'));// ==> True
console.log(scramble('katas', 'steak'));// ==> False

console.log(scramble('rkqodlw','world'));
console.log(scramble('cedewaraaossoqqyt','codewars'));
console.log(scramble('katas','steak'));
console.log(scramble('scriptjava','javascript'));
console.log(scramble('scriptingjava','javascript'));
console.log(scramble('scriptsjava','javascripts'));
console.log(scramble('jscripts','javascript'));
console.log(scramble('aabbcamaomsccdd','commas'));