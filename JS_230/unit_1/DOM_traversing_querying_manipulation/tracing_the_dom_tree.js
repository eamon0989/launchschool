/*  
Input: element id
Output: array

Requirements: 
return array is 2 dimensional

arrays contain element names, not nodes

first subarray contains element and its siblings
second - parent and parents siblings
third - grandparent and its siblings etc

grandest parent has id of 1

Mental model:
initialize an empty array
get name of element and its siblings - add to an array, push to array
find parent - repeat

element.nodeName
element.parentNode.children

Algorithm:
initialize an empty results array in the arguments
recursive loop
stop when current id === 1
get children of parent, add to array, push array to results
get parent id, pass to recursive call as arg

*/
function domTreeTracer(id, results = []) {
  let element = document.getElementById(id);

  let siblings = element.parentElement.children;
  let siblingNames = Array.from(siblings).map(ele => ele.nodeName)
  results.push(siblingNames);

  if (!element.parentElement.id) return results;

  id = element.parentElement.id;
  return domTreeTracer(id, results);
}

domTreeTracer(1);
// [["ARTICLE"]]
domTreeTracer(2);
// [["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
domTreeTracer(22);
// [["A"], ["STRONG"], ["SPAN", "SPAN"], ["P", "P"], ["SECTION", "SECTION"], ["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]