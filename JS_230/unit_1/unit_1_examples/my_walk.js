
// function walkList() {
//   let results = [];

//   function walk(node, callback) {
//     callback(node);
  
//     for (let index = 0; index < node.children.length; index++) {
//       const element = node.children[index];
//       walk(element, callback);
//     }
//   }
  
//   function addToResults(node) {
//     if (node.nodeName === 'LI') {
//       let textItem = node.textContent.match(/^\w+/)[0];
//       if (!results.includes(textItem)) {
//         results.push(textItem);
//       } 
//     }
//   }
  
//   walk(document.body, addToResults);
//   results.forEach(item => console.log(item)); 
// }

// walkList();



function walkList() {
  let results = [];

  function walk(node, callback) {
    callback(node);

    for (let index = 0; index < node.children.length; index++) {
      const element = node.children[index];
      walk(element, callback);
    }
  }

  function addToResults(node) {
    if (node.nodeName === 'LI') {
      let textItem = node.firstChild.nodeValue.trim();
      results.push(textItem);
    }
  }

  walk(document.body, addToResults);

  results.forEach(item => console.log(item)); 
}

walkList();