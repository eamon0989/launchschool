/* 
Input: 2 element ids
Output: swap position of the elements
true if swapped, otherwise undefined

Requirements:
take 2 ids, swap the elements
return true if swapped, otherwise undefined
2 arguments will be provided
if 1 of the ids doesn't exist, return undefined
if one of the nodes is a child of the other, return undefined

Mental model
check if both ids exist, otherwise return undefined
iterate up the dom tree from both elements and check if the
  other element is a parent, if so return undefined
store both elements in variables



*/

// function nodeSwap(id1, id2) {
//   let ele1 = document.getElementById(id1);
//   let ele2 = document.getElementById(id2);

//   if (!ele1 || !ele2) return undefined;
//   if (ele1.contains(ele2) || ele2.contains(ele1)) return undefined;

//   let clone1 = ele1.cloneNode(true);
//   let clone2 = ele2.cloneNode(true);

//   ele1.replaceWith(clone2);
//   ele2.replaceWith(clone1);

//   return true;
// }

//further exploration

function nodeSwap(id1, id2) {
  let ele1 = document.getElementById(id1);
  let ele2 = document.getElementById(id2);
  
  if (!ele1 || !ele2) return undefined;
  if (ele1.contains(ele2) || ele2.contains(ele1)) return undefined;

  let p = document.createElement('p');
  ele1.replaceWith(p);
  ele2.replaceWith(ele1);
  p.replaceWith(ele2);


  return true;
}


// at least one of the id attributes doesn't exist
nodeSwap(1, 20);
// undefined

// at least one of the nodes is a "child" of the other
nodeSwap(1, 4);
// undefined
nodeSwap(9, 3);
//  undefined

// one swap
nodeSwap(1, 2);

// multiple swaps
nodeSwap(3, 1);
nodeSwap(7, 9);