let count = 0;

function walk(node, callback) {
  count += 1;
  callback(node);

  for (let index = 0; index < node.childNodes.length; index++) {
    const element = node.childNodes[index];
    walk(element, callback);
  }
}

function log(node) {
  console.log(node.nodeName, count, node.nodeValue);
}

walk(document.body, log)