function walk(node, callback) {
  let count = 0;
  if (callback(node)) {
    count += 1;
    console.log(count);
  }

  for (let index = 0; index < node.children.length; index++) {
    const element = node.children[index];
    walk(element, callback);
  }

  return count;
}

walk(document, node => {
  // console.log(node.nodeName);
  if (node.nodeName === 'LI') {
    console.log(true);
    return true;
  }
});