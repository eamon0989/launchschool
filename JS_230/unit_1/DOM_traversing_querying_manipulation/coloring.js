/* // let body = document.body;

// let children = Array.from(body.children);
// let layer = [];
// children.forEach(child => child.classList.add(generation-color));

let body = document.body.firstElementChild;

let children = Array.from(body.parentElement.children);
let layer = [];
children.forEach(child => child.classList.add('generation-color'));

let element = document.getElementById(3);

let children = Array.from(element.parentElement.children);
let layer = [];
children.forEach(child => child.classList.add('generation-color')); */

/* 
Input: int - generation num
Output: colored gen

Requirements:





*/

// function walk(node, callback) {
//   callback(node);

//   for (let index = 0; index < node.childNodes.length; index++) {
//     const element = node.childNodes[index];
//     walk(element, callback);
//   }
// }

// function log(node) {
//   console.log(node.nodeName);
// }

// walk(document.body, log)




function colorGeneration(gen) {
  function walk(node, generation) {
    if (generation === gen) node.classList.add('generation-color');
    for (let index = 0; index < node.children.length; index += 1) {
      console.log(node.children[index], generation);
      walk(node.children[index], generation + 1);
    }
  }

  walk(document.body.firstElementChild, 1)
}

colorGeneration(1);
colorGeneration(4);
colorGeneration(7);
colorGeneration(8);
colorGeneration(3);
colorGeneration(0);