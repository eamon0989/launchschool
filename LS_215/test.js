// function iterate(array, callback) {
//   for (let i = 0; i < array.length; i += 1) { // for each element in the Array
//     callback(array[i]);                       // invoke callback and pass the element
//   }
// }

// function oddOrEven(array) {
//   iterate(array, function (number) {
//     if (number % 2 === 0) {
//       console.log('even');
//     } else {
//       console.log('odd');
//     }
//   });
// }

// oddOrEven([1,2,3,4])

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let oddNumbers = array.filter(isOddNumber);

// console.log(oddNumbers);

// function isOddNumber(number) {
//   return number % 2 === 1;
// }

// let studentGrades = [
//   { name: 'StudentA', grade: 90.1 },
//   { name: 'StudentB', grade: 92 },
//   { name: 'StudentC', grade: 91.8 },
//   { name: 'StudentD', grade: 95.23 },
//   { name: 'StudentE', grade: 91.81 },
// ];

// function compareGrades(student1, student2) {
//   if (student1.grade < student2.grade) {
//     return 1;
//   } else if (student1.grade > student2.grade) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

// console.log(studentGrades.sort(compareGrades));


function foo(list) {
  return list.map(function (word) {
      return word.match(/[aeiou]/gi) || [];
    }).reduce(function (acc, letterList) {
      return acc + letterList.length;
    }, 0);
}

console.log(foo(['apple', 'banana', 'orange']));