


function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function logger(seconds) {
  console.log('testing');
  console.log(seconds);
}

function randomizer(...callbacks) {
  let randomInterval = () => Math.floor(Math.random() * callbacks.length * 2);

  for (let seconds = 1; seconds < callbacks.length + 1 * 2; seconds++) {
    setTimeout(() => console.log(seconds), 1000 * seconds);       
  }

  callbacks.forEach(callback => {
    setTimeout(callback, randomInterval() * 1000);
  })
}

randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6