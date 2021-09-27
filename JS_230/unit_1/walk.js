// function walk(node, callback) {
//   callback(node);

//   for (let index = 0; index < node.childNodes.length; index++) {
//     walk(node.childNodes[index], callback);
//   }
// }

// let img = 0;
// let png = 0;

// walk(document, node => {
//   if (node.nodeName === 'IMG') {
//     img += 1;
//     if (node.src.slice(-3) === 'png') {
//       png += 1;
//     }
//   }
// });

// console.log(img, png);

// let count = 0;
// let words = [];

// walk(document, node => {
//   if (node.nodeName === 'P') {
//     words.push(node.firstChild.data.trim().split(' ')[0]);
//   }
// });



// console.log(words);

// function walk(node) {
//   let count = 0;

//   for (let index = 0; index < node.childNodes.length; index++) {
//     if (node.childNodes[index].nodeName === 'P') {
//       count += 1;
//     }
//   }

//   return count;
// }

// walk(document.body);

// function walk(node, callback) {
//   callback(node);

//   for (let index = 0; index < node.childNodes.length; index++) {
//     walk(node.childNodes[index], callback);
//   }
// }

// walk(document, node => {
//   if (node.nodeName === 'P') {
//     node.classList.add('article-text');
//   }
// });

// function findAllParagraphs() {
//   let matches = [];
//   let nodes = document.body.childNodes;

//   for (let index = 0; index < nodes.length; index += 1) {
//     if (nodes[index] instanceof HTMLParagraphElement) {
//       matches.push(nodes[index]);
//     }
//   }

//   return matches;
// }

// console.log(findAllParagraphs());

// function walk(node, callback) {
//   callback(node);

//   for (let index = 0; index < node.childNodes.length; index += 1) {
//     walk(node.childNodes[index], callback);
//   }
// }

// function getElementsByTagName(tagName) {
//   let tags = [];

//   walk(document.body, node => {
//     if (node.nodeName.toLowerCase() === tagName) {
//       tags.push(node);
//     }
//   })

//   return tags;
// }

// getElementsByTagName('p').forEach(p => p.classList.add('article-list'));

// let paragraphs = document.getElementsByTagName("p");
// for (let index = 0; index < paragraphs.length; index += 1) {
//   paragraphs[index].classList.add("article-text");
// }

let intros = document.getElementsByClassName('intro');

for (let index = 0; index < intros.length; index++) {
  let paragraphs = intros[index].getElementsByTagName('p');
  
  for (let p = 0; p < paragraphs.length; p++) {
    paragraphs[p].classList.add('article-text');    
  }
}

document.querySelector('#divTwo, #divOne');
document.querySelectorAll('#divTwo, #divOne');
document.querySelectorAll(".intro p");

[].slice.call(lists).forEach((list, index) => {
  if (index % 2 !== 0) {
      list.style.color = 'green';
  }
})


document.getElementById('toggle').onClick = function toggle(e) {
  e.preventDefault();
  if (document.getElementById('notice').classList.contains('hidden')) {
      document.getElementById('notice').classList.add('visible');
      document.getElementById('notice').classList.remove('hidden');
  } else {
      document.getElementById('notice').classList.add('hidden');
      document.getElementById('notice').classList.remove('visible');
  }
}

