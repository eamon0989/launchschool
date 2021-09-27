function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index++) {
    const element = node.childNodes[index];
    walk(element, callback);
  }
}

function childNodes(id) {
  let node = document.getElementById(id);
  let children = 0;
  let direct = node.childNodes.length || 0;

  walk(node, node => {
    children += node.childNodes.length || 0;
  })

  return [direct, children - direct];
}

childNodes(1);