function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index++) {
    const element = node.childNodes[index];
    walk(element, callback);
  }
}

walk(document.body, log)

function log(node) {
  console.log(node.nodeName);
}

walk(document.body, log);


