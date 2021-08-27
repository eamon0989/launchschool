const HTTP = require('http');
const URL = require('url').URL;
const PORT = 3000;

function getParams(path) {
  const myURL = new URL(path, `http://localhost:${PORT}`);
  return myURL.searchParams;
};

function dieRoll(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function rollDice(params) {
  let rolls = Number(params.get('rolls'));
  let sides = Number(params.get('sides'));
  let body = '';

  for (let index = 0; index < rolls; index += 1) {
    body += `${dieRoll(1, sides)}\n`;
  }

  return body;
};

const SERVER = HTTP.createServer((req, res) => {
  let method = req.method;
  let path = req.url;

  if (path === '/favicon.ico') {
    res.statusCode = 404;
    res.end();
  } else {
    let content = rollDice(getParams(path));

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(`${content}\n`);
    res.write(`${method} ${path}\n`);
    res.end();
  }
});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});