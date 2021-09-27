/* 
Input: n callbacks
Output: log every second to the console
call all callbacks within n * 2 seconds randomly

Requirements:
if there are 5 callbacks, call them randomly within 10 seconds (n * 2)
log the elapsed time every second



*/
function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

// function randomizer(...callbacks) {
//   let elapsed = 0;
//   let max = callbacks.length * 2;
//   let interval = max / callbacks.length;

//   function timer() {
//     elapsed += 1;
//     console.log(elapsed);
//   }

//   setInterval(timer, 1000);

//   console.log(max, callbacks);
//   let random = () => Math.floor(Math.random() * max * 1000);

//   for (let index = 0; index < callbacks.length; index++) {
//     const callback = callbacks[index];
//     setTimeout(callback, random());
//   }

// }

// randomizer(callback1, callback2, callback3);


function randomizer(...callbacks) {
  if (callbacks.length < 1) {
    return;
  }

  const secondsEnd = 2 * callbacks.length;
  let secondsElapsed = 0;

  const timeLogger = setInterval(() => {
    secondsElapsed += 1;
    console.log(secondsElapsed);

    if (secondsElapsed >= secondsEnd) {
      clearInterval(timeLogger);
    }
  }, 1000);

  callbacks.forEach(callback => {
    const executeTime = Math.floor(Math.random() * secondsEnd * 1000);
    console.log(`ex time`, executeTime);
    setTimeout(callback, executeTime);
  });
}

randomizer(callback1, callback2, callback3);
