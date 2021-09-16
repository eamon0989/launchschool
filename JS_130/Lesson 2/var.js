// // var bar = 42;
// // console.log(global.bar);
// // bar += 1;
// // console.log(global.bar);

// // let foo = 86;
// // console.log(global.foo);

// function foo(condition) {
//   let bar;
//   console.log(bar);

//   let qux = 0.5772;

//   if (condition) {
//     let qux = 3.1415;
//     console.log(qux);
//   } else {
//     let bar = 24;

//     let xyzzy = function() {
//       let qux = 2.7183;
//       console.log(qux);
//     };

//     console.log(qux);
//     console.log(xyzzy());
//   }

//   qux = 42;
//   console.log(qux);
// }

// foo(true);
// foo(false);

// /*
// undefined
// 3.1415
// 42
// undefined
// 0.5772
// 2.7183
// undefined
// 42
// */

function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

var catImage;
var pudding;
var Image;

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

Image = class {
  constructor(file) {
    this.file = file;
  }
}

catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);