function delayLog() {
  for (let index = 0; index < 10; index++) {
    setTimeout(logNums(index), index * 1000);    
  }
}

function logNums(index) {
  return function() {
    console.log(index);
  }
}

delayLog()