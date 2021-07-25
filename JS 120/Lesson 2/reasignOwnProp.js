let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

// function assignProperty(obj, property, value) {
//   while (obj !== null) {
//     if (obj.hasOwnProperty(property)) {
//       obj[property] = value;
//       break;
//     }

//     obj = Object.getPrototypeOf(obj);
//     // console.log(obj);
//   }
// }

function assignProperty(obj, property, value) {
  if (obj === null) return;

  if (obj.hasOwnProperty(property)) {
    obj[property] = value;
  }

  assignProperty(Object.getPrototypeOf(obj), property, value);
}


assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false