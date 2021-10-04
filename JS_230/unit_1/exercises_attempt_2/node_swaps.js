function nodeSwap(node1Id, node2Id) {
  let node1 = document.getElementById(node1Id);
  let node2 = document.getElementById(node2Id);
  if (!node1 || !node2) return undefined;
  if (node1.contains(node2) || node2.contains(node1)) return undefined;

  let p = document.createElement('p');
  node1.replaceWith(p);
  node2.replaceWith(node1);
  p.replaceWith(node2);
  return true;
}

nodeSwap(1, 20);
// undefined

// at least one of the nodes is a "child" of the other
nodeSwap(1, 4);
// undefined
nodeSwap(9, 3);
// undefined

nodeSwap(1, 2);
nodeSwap(3, 1);
nodeSwap(7, 9);