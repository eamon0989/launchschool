document.addEventListener('DOMContentLoaded', () => {
  let store = document.getElementById('store');

  let request = new XMLHttpRequest();
  request.open('GET', 'https://ls-230-web-store-demo.herokuapp.com/products');

  request.addEventListener('load', event => store.innerHTML = request.response);
  request.send();

  store.addEventListener('click', event => {
    let target = event.target;
    if (target.tagName !== 'A') {
      return;
    }

    event.preventDefault();

    let request = new XMLHttpRequest();
    console.log(target.getAttribute('href'));
    request.open('GET', 'https://ls-230-web-store-demo.herokuapp.com' + target.getAttribute('href'));

    request.addEventListener('load', event => store.innerHTML = request.response);
    request.send();
  });

  store.addEventListener('submit', event => {
    let form = event.target;

    event.preventDefault();
    let request = new XMLHttpRequest();

    let data = new FormData(form);

    request.open('POST', `https://ls-230-web-store-demo.herokuapp.com${form.getAttribute('action')}`);
    request.setRequestHeader('Authorization', 'token AUTH_TOKEN');

    request.addEventListener('load', event => store.innerHTML = request.response);
    request.send(data);
  });
});

// let form = document.getElementById('form');

// // Bind to the form's submit event to handle the submit button
// // being clicked, enter being pressed within an input, etc.
// form.addEventListener('submit', event => {
//   // prevent the browser from submitting the form
//   event.preventDefault();

//   // access the inputs using form.elements and serialize into a string
//   let keysAndValues = [];
//   console.log(form.elements);
//   for (let index = 0; index < form.elements.length; index += 1) {
//     let element = form.elements[index];
//     let key;
//     let value;
//     console.log(element);
//     console.log(element.key);
//     console.log(element.value);
//     if (element.type !== 'submit') {
//       key = encodeURIComponent(element.name);
//       value = encodeURIComponent(element.value);
//       keysAndValues.push(`${key}=${value}`);
//     }
//   }

//   let data = keysAndValues.join('&');

//   // submit the data
//   let request = new XMLHttpRequest();
//   request.open('POST', 'https://ls-230-book-catalog.herokuapp.com/books');
  // request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

//   request.addEventListener('load', () => {
//     if (request.status === 201) {
//       console.log(`This book was added to the catalog: ${request.responseText}`);
//     }
//   });

//   request.send(data);
// });

// let form = document.querySelector('form');

// // Bind to the form's submit event to handle the submit button
// // being clicked, enter being pressed within an input, etc.
// form.addEventListener('submit', event => {
//   // prevent the browser from submitting the form
//   event.preventDefault();

//   let data = new FormData(form);
//   console.log(data);

//   // submit the data
//   let request = new XMLHttpRequest();
//   request.open('POST', 'https://ls-230-book-catalog.herokuapp.com/products/:id');
//   // request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

//   request.addEventListener('load', () => {
//     if (request.status === 201) {
//       console.log(`This book was added to the catalog: ${request.responseText}`);
//     }
//   });

//   request.send(data);
// });