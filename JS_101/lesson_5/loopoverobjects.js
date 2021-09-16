// let obj = { 
//   'name': 'Eamon',
//   age: 31,
//   job: 'teacher',
//   hobby: 'coding',
// }

// let arr = [];

// for (let prop in obj) {
//   if (prop === 'age') {
//     arr.push([prop, obj[prop]]);
//   }
// }

// console.log(obj);
// console.log(arr);

// console.log([2, 11, 9, 4, 107, 21, 1, 'a', 'Z', 'B', 'c'].sort((a,b) => a - b));

// let words = ['go', 'ahead', 'and', 'heard', 'beard', 'jump'];

// words.sort((a, b) => a.length - b.length);
// console.log(words);


// let scores = [ [ 1, 4, 2 ], [ 3, 6, 4 ], [ 6, 8, 9 ] ];

// scores.sort((a,b) => {
//   a.reduce((acc, ele) => acc + ele, 0);
//   b.reduce((acc, ele) => acc + ele, 0);
//   return a - b;
// });
// console.log(scores);

// let obj = { a: 'foo', b: 'bar', c: { d: 'drink'} };
// let copyOfObj = Object.assign({}, obj);

// copyOfObj; // => { a: 'foo', b: 'bar' }
// copyOfObj.a = "food";
// copyOfObj.c.d = 'food';

// console.log(copyOfObj);
// console.log(obj);

// let arr = [{ b: 'foo' }, ['bar']];
// let serializedArr = JSON.stringify(arr);
// let deepCopiedArr = JSON.parse(serializedArr);

// console.log(serializedArr);
// console.log(deepCopiedArr);

// deepCopiedArr[1].push('baz');
// deepCopiedArr; // => [ { b: 'foo' }, [ 'bar', 'baz' ] ]
// arr;           // => [ { b: 'foo' }, [ 'bar' ] ]

// console.log(serializedArr);
// console.log(deepCopiedArr);
/* 
let obj = Object.freeze({ a: 'foo' });
let arr = Object.freeze(['a', 'b', 'c']);

obj['b'] = 'bar';
console.log(obj); // => { a: 'foo' }

obj.c = 'ccc';
console.log(obj); // => { a: 'foo' }

arr[3] = 'x';
console.log(arr); // => [ 'a', 'b', 'c' ]

arr.push('d'); // => TypeError: Cannot add property 3, object is not extensible */

/* 
The Array.prototype.map method is called on the multidimensional array.
On each iteration, the parameter arr is assigned to the current subarray which
has been passed to the callback. On the first invocation of the callback, we use
the element reference operator to get the value at index 0 of the array.
The value of the first element in that sub array is then output as a string
representation of the value returned by arr[0].
The original value of that first element of the sub array is then explicitly
returned, and because .map transformes the element that is passed into it with
the value that is returned by the callback function, the inner arrays will be
transformed by the values 1 and 3 respectively.
Therefore, the return value of our .map call will be a new array containing 2
elements, 1 and 3. [1, 3]
*/

/* 

WRONG!!! THIS WOULD BE TRUE IF MAP WAS CALLED TWICE, BUT FOREACH ALWAYS RETURNS
UNDEFINED, SO MYARR IS UNDEFINED
The variable myArr is declared and initialized to the return value of the
forEach method call. The multidimensional array is used to call the forEach
method. On each invocation of the callback, each inner array is assigned to the
parameter arr. In turn, that inner array is used to call the map method.
On the first invocation of the map method's callback function, the parameter num
is assigned to the first element of the passed in sub array, namely, 18.
Then the value of the argument num (18) is compared against the number 5. If
num is found to be greater than 5, which it is, the callback function eplicitly
returns the value of calling the console.log method on the number, which is
undefined. The num argument's value will be represented as a string and printed
to the console. As the return value of console.log is undefined, the number 18
will be replaced by the value undefined in the sub array that was passed into
it. The callback is then called again with the next value of the sub array,
namely 7, and the process is repeated. The return value of map is then returned
which will be an array with 2 elements, both undefined, to the method that
called it, forEach. Normally forEach returns undefined, but here it is explcitly
returning the return value of the map method, an array with 2 elements, both
undefined. Then the process will be repeated with the second inner array,
the only difference being that the first element of the second inner array is
less than 5, so when it goes through our if statement, it's value will not
be printed. But as there is no explicit return value and our callback uses
curly braces, the default return value will be returned, undefined. Therefore
the return value of our second invocation of map will also be an array with
2 elements, undefined. So forEach will return an array with 2 inner arrays,
both containing 2 undefined values.
*/

// let myArr = [[18, 7], [3, 12]].forEach(arr => {
//   return arr.map(num => {
//     if (num > 5) {
//       return console.log(num);
//     }
//   });
// });

// console.log(myArr);

// console.log([{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
//   return Object.keys(object).some(key => object[key][0] === key);
// }));

// // => [ { c: 'cat', d: 'dog' } ]

// console.log([[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map(arr => {
//   return arr.filter(item => {
//     if (typeof item === 'number') {    // if it's a number
//       return item > 13;
//     } else {
//       return item.length < 6;
//     }
//   });
// }));
// // => [ [ 27 ], [ 'apple' ] ]

// console.log([[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
//   return element1.map(element2 => {
//     return element2.map(element3 => {
//       return element3.length > 0;
//     });
//   });
// }));

// => [ undefined, undefined ]

// let arr = [1, 2, 3, 4];

// console.log(arr.map(subArr => arr.pop())); // => [ 2, <1 empty item> ]
// console.log(arr);