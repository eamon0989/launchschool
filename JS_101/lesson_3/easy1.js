// let numbers = [1, 2, 3];
// numbers[6] = 5;
// console.log(numbers[4]);  // what will this line return?
// console.log(numbers);

// let str1 = "Come over here!"; // true
// let str2 = "What's up, Doc?"; // false

// console.log(str1.endsWith("!")); // true
// console.log(str2.endsWith("!")); // false

// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// console.log(ages['Spot']);
// if (!ages['Spot']) console.log(true);
// console.log(ages.hasOwnProperty('spot'));
// console.log(ages.hasOwnProperty('Eddie'));

// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// // => The munsters are creepy and spooky.

// let newString = munstersDescription.charAt(0).toUpperCase() +
// munstersDescription.substring(1).toLowerCase();
// console.log(newString);

// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// let additionalAges = { Marilyn: 22, Spot: 237 };

// Object.assign(ages, additionalAges);
// console.log(ages);

// let str1 = "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// console.log(/Dino/.test(str1));
// console.log(/Dino/.test(str2));
// console.log(str1.includes('Dino'));
// console.log(str2.includes('Dino'));
// console.log(str1.match('Dino') !== null);
// console.log(str2.match('Dino') !== null);
// console.log(str1.indexOf('Dino') > -1); // false
// console.log(str2.indexOf('Dino') > -1); // true

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push('Dino', 'Hoppy');
// console.log(flintstones);

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

let array = advice.split('house');
console.log(array[0]);
let index = advice.indexOf('house');
console.log(index);
console.log(advice.substring(0, 39));
console.log(advice.substring(0, advice.indexOf('house')));