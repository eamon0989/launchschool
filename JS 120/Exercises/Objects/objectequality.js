function objectsEqual(obj1, obj2) {
  let array1 = Object.values(obj1);
  let array2 = Object.values(obj2);
  return array1.flat().every((ele, index) => ele === array2.flat()[index]);
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false