// document.addEventListener('DOMContentLoaded', e => {
//   let form = document.querySelector('form');
//   form.addEventListener('submit', e => {
//     e.preventDefault();

//     let data = new FormData(form);
//     let json = {};
//     for (let prop of data.entries()) {
//       json[prop[0]] = prop[1];
//     }

//     let xhr = new XMLHttpRequest();
//     xhr.open('POST', '/api/staff_members');
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.addEventListener('load', e => {
//       if (xhr.status === 201) {
//         alert(`Staff member created with id: ${xhr.responseText.match(/\d/)}`)
//       } else {
//         alert(xhr.responseText);
//       }
//     })
//     xhr.send(JSON.stringify(json));
//   })
// })


document.addEventListener('DOMContentLoaded', e => {
  let form = document.querySelector('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    let json = formToJSON(form);

    fetch('/api/staff_members', { method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: json
     }).then(alertStatus);
  })
})

function formToJSON(form) {
  let data = new FormData(form);
  let json = {};
  for (let prop of data.entries()) {
    json[prop[0]] = prop[1];
  }

  return JSON.stringify(json);
}

async function alertStatus(res) {
  let text = await res.text();
  if (res.status === 201) {
    alert(`Staff member created with id: ${text.match(/\d/)}`);
    document.querySelector('form').reset();
  } else {
    alert(text);
  }
}

