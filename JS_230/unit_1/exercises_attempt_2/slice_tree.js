/* 
Input: start and end id
Output: Array of Element names

Requirements:
  1 array
  only element names
  start at the end id, push node name to array
  get parent, repeat
  if current node has start id, push name and return
  if current node equals body, return undefined
  if start id element or end id element don't exist, return undefined



*/

function sliceTree(startId, endId) {
  let currentNode = document.getElementById(endId);
  let start = document.getElementById(startId);
  if (!currentNode || !start) return undefined;

  let results = [];

  while (currentNode.nodeName !== 'BODY') {
    results.unshift(currentNode.nodeName);
    if (currentNode === start) return results;

    currentNode = currentNode.parentNode;
  }

  return undefined;
}

sliceTree(1, 4);