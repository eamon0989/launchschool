// let advice = "Few things in life are as important as being important.";
// console.log(advice.replace(/important/g, 'urgent'));

// console.log(advice.split('important').join('urgent'));

// let numbers = [1, 2, 3, 4, 5];
// let reverse = numbers.slice().reverse();
// console.log(reverse);
// console.log(numbers);

// let numbers = [1, 2, 3, 4, 5];
// let reversed = [...numbers].sort((num1, num2) => num2 - num1);
// // numbers.sort((num1, num2) => num2 - num1);
// console.log(reversed);
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// // Bonus question
// let reversed = [];
// numbers.forEach((element) => reversed.unshift(element));
// console.log(reversed);
// console.log(numbers);

// let numbers = [1, 2, 3, 4, { names: 'a name' }, [11, 22]];
// let reverse = numbers.slice();
// numbers[0] = 100;
// numbers[4]['names'] = 'a different name';
// numbers[5][0] = 100;
// console.log(numbers); // [ 100, 2, 3, 4, { names: 'a different name' }, [ 100, 22 ] ]
// console.log(reverse); // [ 1, 2, 3, 4, { names: 'a different name' }, [ 100, 22 ] ]

// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8;  // false
// let number2 = 95; // true

// console.log(numbers.includes(number1));
// console.log(numbers.includes(number2));

// let famousWords = "seven years ago...";

// let concat = 'Four score and';

// console.log(`${concat} ${famousWords}`);
// console.log(concat + ' ' + famousWords);
// console.log(concat.concat(' ' + famousWords));

// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers.splice(2, 1));
// console.log(numbers);

// let flintstones = ["Fred", "Wilma"];
// let array2 = ["Bambam", "Pebbles", ['Dino']];
// let newFlintstones = flintstones.concat(["Barney", "Betty"], array2);
// array2[2][0] = 'NewString';
// // flintstones.concat(["Bambam", "Pebbles"]);
// // flintstones.flat();
// // console.log(flintstones.flat());
// // console.log(flintstones);
// // let flattened = flintstones.reduce((acc, ele) => acc.concat(ele), []);
// // console.log(flattened);
// console.log(newFlintstones);
// console.log(array2);
// let flintstones = ["Fred", "Wilma"];
// let array2 = ["Bambam", "Pebbles"];
// let array3 = ["Barney", "Betty"];

// let newArray = [...flintstones, ...array2, ...array3];
// console.log(newArray); // [ 'Fred', 'Wilma', 'Bambam', 'Pebbles', 'Barney', 'Betty' ]

// let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// flintstones = flintstones.reduce((acc, ele) => acc.concat(ele), []);
// // flintstones = [].concat(...flintstones);
// console.log(flintstones);

// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, 
//   Betty: 3, Bambam: 4, Pebbles: 5 };
// let array = Object.entries(flintstones)
// .filter(element => element.includes('Barney')).shift();
// console.log(array);

// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));

// let title = "Flintstone Family Members";
// let strLength = title.length;
// let spaces = 40 - strLength;
// let eachSide = Math.floor(spaces / 2);
// let space = '';
// for (let i = 0; i < eachSide; i += 1) {
//   space += ' ';
// }
// console.log(`${space}${title}${space}`);

// let title = "Flintstone Family Members";
// let strLength = title.length;
// let spaces = 40 - strLength;
// let eachSide = Math.floor(spaces / 2);
// console.log(title.padStart(strLength + eachSide, ' ').padEnd(40, ' '));

// let title = "Flintstone Family Members";
// let padding = Math.floor((40 - title.length) / 2);
// title = title.padStart(padding + title.length);
// console.log(title);

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split('').filter(char => char === 't').length);
console.log(statement2.split('').filter(char => char === 't').length);
