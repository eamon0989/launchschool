// function createTemplate(template) {
//   return function(object) {
//     return template.replace(/{{(\w+)}}/gi, match => {
//       let key = match.replace(/[{}]/gi, '');
//       return object[key] || '';
//     })
//   }
// }

function createTemplate(template) {
  return function(object) {
    return template.replace(/{{(\w+)}}/gi, (_, key) => {
      return object[key] || '';
    })
  }
}

let personTmpl = createTemplate("{{name}} likes {{animalType}}");
console.log(personTmpl({ name: "John", animalType: "dogs" })); // John likes dogs