// name property added to make objects easier to identify
let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';


// Object.prototype.ancestors = function ancestors() {
//   let proto = Object.getPrototypeOf(this);
//   console.log(this);
//   if (Object.prototype.hasOwnProperty.call(proto, 'name')) {
// return [proto.name].concat(proto.ancestors());
//   }
//   return ['Object.prototype'];
// };

// foo.ancestors = function(context = this, arr = []) {
//   let parent = Object.getPrototypeOf(context);

//   if (!parent.name) {
//     arr.push('Object.prototype');
//     return arr;
//   }

//   arr.push(parent.name);
//   return this.ancestors(parent, arr);
// }

Object.prototype.ancestors = function ancestors() {
  let context = this;
  let array = [];

  while (Object.getPrototypeOf(context).name) {
    array.push(Object.getPrototypeOf(context).name);
    context = Object.getPrototypeOf(context);
  }

  array.push('Object.prototype');

  return array;
}

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']
// // // console.log(protos);

// console.log(Object.getPrototypeOf(qux);