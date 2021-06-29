let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
// let obj = [];
// flintstones.forEach((ele, index) => obj.push([ele, index]));
// obj = flintstones.map((ele, index) => [ele, index]);
// console.log(obj);

// obj = Object.fromEntries(obj);
// console.log(obj);

let flintstonesObj = {};

flintstones.forEach((ele, index) => {
  flintstonesObj[ele] = index;
});
console.log(flintstonesObj);