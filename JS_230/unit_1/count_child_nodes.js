function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index++) {
    walk(node.childNodes[index], callback);
  }
}

let div = document.getElementById('1')

walk(div, (node) => {
  let count = 0;
  count += node.childNodes.length;
  return count;
})