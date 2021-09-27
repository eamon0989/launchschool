/* 
Input: start id, end id
Output: array of tag names

Requirements:
only consider element nodes
only elements that have body as an ancestor are sliceable
if either id is not in the dom, return undefined
if end id is not a child of start id, return undefined
if end id is greater than start id, return undefined

Mental model

start with end id
unshift tag to array
get direct descendant, check if id is less than start id
if so, return array, else unshift tag
repeat

Algorithm:
initialize a results array
check if end index is greater than start, if not return undefined
get end element from id
unshift name to results
get parent element
check if id is greater than or equal to start id
if so, unshift name and repeat
return array

*/
function sliceTree(start, end) {
  let startEle = document.getElementById(start);
  let endEle = document.getElementById(end);

  if (!startEle || !endEle) return undefined;
  
  let results = [];

  while (endEle.id && endEle.nodeName !== 'BODY') {
    results.unshift(endEle.nodeName);

    if (endEle === startEle) return results;

    endEle = endEle.parentElement;
  }

  return undefined;
}

sliceTree(1, 4);
// ["ARTICLE", "HEADER", "SPAN", "A"]
sliceTree(1, 76);
// undefined
sliceTree(2, 5);
// undefined
sliceTree(5, 4);
// undefined
sliceTree(1, 23);
// ["ARTICLE", "FOOTER"]
sliceTree(1, 22);
// ["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]
sliceTree(11, 19);
// ["SECTION", "P", "SPAN", "STRONG", "A"]