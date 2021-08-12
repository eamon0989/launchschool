//Write a program that asks the user to enter an integer greater than 0, 
//then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

// input = an integer, string s or p
// output = if s, the sum of all numbers between 1 and the integer inclusive
// if p, the product of all integers between 1 and the integer inclusive (multiply them together)

// let rlSync = require('readline-sync');

// function sumOrProduct(){
//   let integer = parseInt(rlSync.question("Please enter an integer greater than 0: "));
//   let sumOrProd = rlSync.question("Enter 's' to compute the sum, or 'p' to computer the product. ")
  
//   if(sumOrProd === 's') {
//     let sum = 0;
//     for(let i = 1; i <= integer; i += 1) {
//       sum += i;
//     }
//     console.log(sum);
//   } else if(sumOrProd === 'p') {
//     let product = 1;
//     for(let i = 1; i <= integer; i += 1) {
//       product *= i;
//     }
//     console.log(product);
//   }
// }

// sumOrProduct();

// further exploration

function sumOrProduct(array, sumOrProd){
  
  if(sumOrProd === 's') {
    const REDUCER = (accumulator, currentValue) => accumulator + currentValue;
    console.log(array.reduce(REDUCER));
  } else if(sumOrProd === 'p') {
    const REDUCER = (accumulator, currentValue) => accumulator * currentValue;
    console.log(array.reduce(REDUCER));  
  }
}

sumOrProduct([1, 10, 5], 'p');
sumOrProduct([1, 10, 5], 's');