// setTimeout(() => { 1
//   console.log('Once'); 5
// }, 1000); 

// setTimeout(() => { 2
//   console.log('upon'); 7
// }, 3000);

// setTimeout(() => { 3 
//   console.log('a'); 6
// }, 2000); 

// setTimeout(() => { 4
//   console.log('time'); 8
// }, 4000);

setTimeout(() => { 
  setTimeout(() => {
    q(); 7
  }, 15);

  d(); 3

  setTimeout(() => {
    n(); 5
  }, 5);

  z(); 4
}, 10);

setTimeout(() => {
  s(); 6
}, 20);

setTimeout(() => {
  f(); 2
});

g(); 1