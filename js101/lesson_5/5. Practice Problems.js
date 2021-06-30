// let arr = ['10', '11', '9', '7', '8'];
// arr.sort((a, b) => b - a); // [ '11', '10', '9', '8', '7' ]
// let arr = ['10', '11', '9', '7', '8'];
// arr.sort((a, b) => Number(b) - Number(a)); // [ '11', '10', '9', '8', '7' ]
// console.log(arr);


// let arr2 = [10, 11, 9, 7, 8];

// arr2.sort((a, b) => String(b) + String(a));
// console.log(arr2);

// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];

// // sort by value
// books.sort((a, b) => Number(a.published) - Number(b.published));
// /* [
//   {
//     title: 'The Book of Kells',
//     author: 'Multiple Authors',
//     published: '800'
//   },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   {
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     published: '1925'
//   },
//   {
//     title: 'One Hundred Years of Solitude',
//     author: 'Gabriel Garcia Marquez',
//     published: '1967'
//   }
// ] */

// // let booksArr = books.map(obj => Object.entries(obj));
// // console.log(booksArr);
// // booksArr.forEach(subarray => {
// //   return subarray[3].sort(())
// // });

// console.log(books);

// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];

// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];

// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};

// console.log(arr1[2][1][3]);
// console.log(arr2[1].third[0]);
// console.log(arr3[2].third[0][0]);
// console.log(obj1.b[1]);
// console.log(Object.keys(obj2.third)[0]);

// let arr1 = [1, [2, 3], 4];

// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

// let obj1 = { first: [1, 2, [3]] };

// let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

// arr1[1][1] = 4;
// arr2[2] = 4;
// obj1['first'][2][0] = 4;
// obj2['a']['a'][2] = 4;
// console.log(arr1);
// console.log(arr2);
// console.log(obj1);
// console.log(obj2);

// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female'}
// };

// let ages = 0;
// for (let prop in munsters) {
//   if (munsters[prop].gender === 'male') {
//     ages += munsters[prop].age;
//   }
// }
// console.log(ages);
// console.log(munsters.Herman.age);
// for (let prop in munsters) {
//   let name = prop;
//   let age = munsters[prop].age;
//   let gender = munsters[prop].gender;
//   console.log(`${name} is a ${age}-year-old ${gender}.`);
// }

// for (let prop in munsters) {
//   console.log(`${prop} is a ${munsters[prop].age}-year-old ${munsters[prop].gender}.`);
// }

// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };

// let vowels = 'aeiou';

// Object.values(obj).forEach(subarray => {
//   subarray.forEach(word => {
//     word.split('').forEach(char => {
//       if (vowels.includes(char)) {
//         console.log(char);
//       }
//     });
//   });
// });

