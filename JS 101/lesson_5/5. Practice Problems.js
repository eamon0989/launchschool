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

// function changeName(jim) { // has access to the variables passed into it
//   // console.log(name);

//   name += 1; // does this reassignment change the variable outside the function?
//   console.log(name);
// }

// function anotherFunction() {
//   let name = 1;
//   changeName(name);
//   console.log(name); // => logs 'jim'
// }

// anotherFunction();

// function multiply(a) {
//   return a * 10;
// }

// function add(a, b) {
//   a = multiply(a);
//   b = multiply(b);
//   return a + b;
// }

// console.log(add(1, 2));


// if (true) {
//   let a = 'foo';
// }

// console.log(a); // ReferenceError

// function addName(arr, name) {
//   arr = arr.concat([name]);
//   console.log(arr);
// }

// let names = ["bob", "kim"];
// addName(names, "jim");
// console.log(names); // => [ 'bob', 'kim', ]

// let numArray = [1, [2], 3];

// function test (arr) {
//   arr.map(num => {
//     arr[0] = 'test';
//   });
// }

// test(numArray); // => logs 2, [3], 4 respectively

// console.log(numArray); // => [1, [3], 3]

// let numArray = [1, [2], 3];

// function test (arr) {
//   arr.map(num => {
//     num[0] += 1;
//   });
// }

// test(numArray);

// console.log(numArray);

// function changeName(a) {
//   name1 = "bob"; // does this reassignment change the variable outside the function?
// }

// function anotherFunction() {
//   let name1 = "jim";
//   changeName(name1);
//   console.log(name1); // => logs 'jim'
// }

// anotherFunction();

// let foo = {
//   a: 'hello',
//   b: 'world',
// };

// let qux = 'hello';

// function bar(argument1, argument2) {
//   argument1.a = 'hi';
//   argument2 = 'hi';
// }

// bar(foo, qux);

// console.log(foo.a);
// console.log(qux);

// let array = [1, 2, 3]

// function append(targetArr, valueToAppend) {
//   targetArr.push(valueToAppend);
//   return targetArr;
// }

// append(array, 4)
// console.log(array);

// Question example: What will line 9 log to the console and why?

// /*0*/ let greeting = ["Hello"];
// /*1*/
// /*2*/ const test = arr => {
// /*3*/ arr = ["ByeBye"];
// /*4*/ arr.push("World!");
// /*5*/ return arr;
// /*6*/ }
// /*7*/
// /*8*/ test(greeting);
// /*9*/ console.log(greeting);

// let arr = ['a', 'b', 'c', [1]];
// let copyOfArr = [...arr];

// copyOfArr.push('d');
// copyOfArr[3].push(2);

// console.log(arr);       // => [ 'a', 'b', 'c' ]
// console.log(copyOfArr); // => [ 'a', 'b', 'c', 'd' ]