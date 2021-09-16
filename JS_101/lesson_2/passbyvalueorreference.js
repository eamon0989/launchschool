let name1 = ['Eamon', 'Paula', 'Friend'];
let name2 = ['Eamon', 'Paula', 'Friend'];
let name3 = ['Eamon', 'Paula', 'Friend'];
let name4 = ['Eamon', 'Paula', 'Friend'];
let name5 = ['Eamon', 'Paula', 'Friend'];
let name6 = ['Eamon', 'Paula', 'Friend'];
let name7 = ['Eamon', 'Paula', 'Friend'];
let name8 = ['Eamon', 'Paula', 'Friend'];
let name9 = ['Eamon', 'Paula', 'Friend'];
let name10 = ['Eamon', 'Paula', 'Friend'];

function changeName1(name1) {
  name1 = ["bob"]; // non destructive
}

function changeName2(name2) {
  name2.push('jimbob'); //destructive
}

function changeName3(name3) {
  name3.forEach(name => name.toUpperCase()); // non destructive
}

function changeName4(name4) {
  name4.reverse(); //destructive
}

function changeName5(name5) {
  name5 = name5.map(name => name.toUpperCase()); // non destructive
  return name5;
}

function changeName6(name6) {
  name6.pop(); //destructive
}

function changeName7(name7) {
  name7.sort(); // destructive
}

function anotherFunction() {
  let name1 = ["jim"];
  changeName1(name1); // tries to reasign name1
  console.log(name1, 'this is the scoped name1'); // => logs 'jim'
}

changeName1(name1);
changeName2(name2);
changeName3(name3);
changeName4(name4);
changeName5(name5);
changeName6(name6);
changeName7(name7);

anotherFunction();
console.log(name1);
console.log(name2);
console.log(name3);
console.log(name4);
console.log(changeName5(name5)); // return value is uppercase array
console.log(name5); // but it's non destructive
console.log(name6); // destructive
console.log(name7); // destructive

let myName = "naveed";

function capitalize(name) {
  name.toUpperCase();
}

capitalize(myName);
console.log(capitalize(myName));
console.log(myName);

let myName1 = "naveed";

function reassigner(name) {
  name = 'Eamon';
  return name;
}

reassigner(myName1);
console.log(reassigner(myName1));
console.log(myName1);

let num = 1;

function changeNum(num) {
  num = 2;
  num += 1;
  return num;
}

changeNum(num);
console.log(num);

let num1 = 1;

function changeNum1(num1) {
  num1 += 1;
  return num1;
}

console.log(changeNum1(num1));
console.log(num1);