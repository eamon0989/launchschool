// Be sure you run this code from a file!

// setTimeout(function() {        // 1
//   console.log('!');            // 5
// }, 3000);
// let delayLog = () => {
//   setTimeout(function() { 
//     for (let i = 0; i < 11; i += 1) {
//       console.log(i);
//     }
//   }, 1000);
// }


// console.log('Hello');          // 3

// function delayLog() {
//   for (var i = 1; i <= 10; i += 1) {
//     setTimeout(() => console.log(i), (i * 1000));
//   }
// }

// delayLog();
// // 1  // 1 second later
// // 2  // 1 second later (2 seconds after start)
// // 3  // 1 second later (3 seconds after start)
// // 4  // etc...
// // 5
// // 6
// // 7
// // 8
// // 9
// // 10

// setTimeout(function() {   // 1
//   console.log('Once');    // 5
// }, 1000);

// setTimeout(function() {   // 2
//   console.log('upon');    // 7
// }, 3000);

// setTimeout(function() {   // 3
//   console.log('a');       // 6
// }, 2000);

// setTimeout(function() {   // 4
//   console.log('time');    // 8
// }, 4000);

// setTimeout(function() { // 3
//   setTimeout(function() { // 7
//     q();
//   }, 15);

//   d(); // 4

//   setTimeout(function() { // 5
//     n();
//   }, 5);

//   z();
// }, 10);

// setTimeout(function() { // 6
//   s();
// }, 20);

// setTimeout(function() { // 2
//   f();
// });

// g(); // 1

// function afterNSeconds(callback, seconds) {
//   setTimeout(callback, seconds * 1000);
// }

// let cb = () => console.log(`Hi`);

// afterNSeconds(cb, 2)

for (let i = 0; i < 10; ++i) {
  setTimeout(() => console.log("inside timeout callback"), 0);
  console.log("Just called setTimeout");
}

// Just called setTimeout
// Just called setTimeout
// Just called setTimeout
// Just called setTimeout
// Just called setTimeout
// Just called setTimeout
// Just called setTimeout
// Just called setTimeout
// Just called setTimeout
// Just called setTimeout
// inside timeout callback
// inside timeout callback
// inside timeout callback
// inside timeout callback
// inside timeout callback
// inside timeout callback
// inside timeout callback
// inside timeout callback
// inside timeout callback
// inside timeout callback

