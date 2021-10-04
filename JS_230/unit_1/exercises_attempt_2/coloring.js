/* 
Input: generation number
Output: elements with gen number change class

Mental model:

  walk the dom
    for each node, count how many steps back to body
    if steps === gen num, change class

Algorithm:
  call the walk the dom function
    - pass in a function as a callback that returns the
      amount of steps from ele to body
    - if steps === gen id, change class to .generation-color

*/

function walkTheDOM(node, callback, generation) {
  let count = callback(node);

  if (count === generation) {
    node.classList.add('generation-color');
  }

  for (let index = 0; index < node.children.length; index++) {
    walkTheDOM(node.children[index], callback, generation);    
  }
}

function returnGeneration(node) {
  if (node === document.body) return undefined;

  let count = 0;

  while(node.nodeName !== 'BODY') {
    count += 1;
    node = node.parentElement;
  }

  return count;
}

function colorGeneration(generation) {
  walkTheDOM(document.body, returnGeneration, generation); 
}