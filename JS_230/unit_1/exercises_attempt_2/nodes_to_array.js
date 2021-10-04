/* 
Input: HTML document
Output: an array of nested arrays, each containing a node name
  and childrens node names

Requirements: 
  Each element name should appear once
    each element name should be followed by an array containing 
    the names of it's children


Check if the parent element has children.
If the parent element has children set the value of the children array to it ([parentElement, [children]]), otherwise, set it to an empty array ([parentElement, []]).
Check if any of the children are parents.
If there are parents, repeat the process from step 1.

*/


function nodesToArr(node = document.body) {
  return [node.nodeName, [...node.children].map(nodesToArr)];
}

//["BODY", [
//["HEADER", []],
//["MAIN", []],
//["FOOTER", []]]]
