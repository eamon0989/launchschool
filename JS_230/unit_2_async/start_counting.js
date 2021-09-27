let id;

function startCounting() {
  let count = 0;
  id = setInterval(() => {
    count += 1;
    console.log(count);
  }, 1000)
}

function stopCounting() {
  clearInterval(id);
}

startCounting();
stopCounting();