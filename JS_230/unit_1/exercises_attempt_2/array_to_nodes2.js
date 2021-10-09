// Nested array of nodes
const nodes = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]];

// OR
//
// ["BODY", [
//   ["HEADER", []],
//   ["MAIN", []],
//   ["FOOTER", []]]]

function arrayToNodes([nodeName, children]) {
  let parent = document.createElement(nodeName);
  children.forEach(child => parent.appendChild(arrayToNodes(child)));

  return parent;
}

arrayToNodes(nodes);