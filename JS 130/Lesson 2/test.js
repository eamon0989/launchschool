
// function bar() {
//   if (foo > 20) {
//     var foo = 50;
//   }

//   console.log(foo);
//   foo += 10;
// }

// var foo = 10;


// bar();
// bar();
// bar();

// funky(); // 2nd funky

// function funky() {
//   console.log('1st funky');
// }

// function funky() {
//   console.log(`2nd funky`);
// }


return function() {
  console.log(1 + 1);
}();

return (function() {
  return left + right;
}());