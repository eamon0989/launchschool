/* 
Input: element id
Output: array containing element and siblings, then parent and
  siblings up to body

Mental model
  - get all elements names of parent, add to an array
  - push to result array
  - get parent element
  - repeat until current element is body

*/

function domTracer(id) {
  let result = [];
  let node = document.getElementById(id);

  while (node.nodeName !== 'BODY') {
    let siblings = node.parentElement.children;
    siblings = Array.from(siblings).map(ele => ele.nodeName);
    result.push([siblings]);
    node = node.parentElement;
  }

  return result;
}