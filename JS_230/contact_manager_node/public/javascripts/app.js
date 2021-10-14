document.addEventListener('DOMContentLoaded', e => {
  let ul = document.getElementById('contacts-list');
  let contacts = fetch('/api/contacts').then(res => res.json())
    .then(contacts => {
      // console.log(contacts);
      contacts.forEach(contact => {
        // console.log(contact);
        // console.log(contact.email);
        // console.log(contact.phone_number);
        let li = document.createElement('li');
        li.classList.add('contacts-list-items')
        ul.appendChild(li);
        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        h3.textContent = contact['full_name'];
        div.appendChild(h3);
        li.appendChild(div);
        let div2 = document.createElement('div');
        li.appendChild(div2);
        let dl = document.createElement('dl');
        div2.appendChild(dl);
        let dt = document.createElement('dt');
        dt.textContent = 'Phone Number:';
        let dd = document.createElement('dd');
        dd.textContent = contact.phone_number;
        let dt2 = document.createElement('dt');
        dt2.textContent = 'Email:';
        let dd2 = document.createElement('dd');
        dd2.textContent = contact.email;
        dl.appendChild(dt);
        dl.appendChild(dd);
        dl.appendChild(dt2);
        dl.appendChild(dd2);
        let div3= document.createElement('div');
        li.appendChild(div3);
        let editA = document.createElement('a');
        editA.href = `/contacts/edit/${contact.id}`;
        let editBtn = document.createElement('button'); 
        editBtn.textContent = 'Edit';
        editA.appendChild(editBtn);
        let deleteA = document.createElement('a');
        deleteA.href = `/contacts/delete/${contact.id}`;
        let deleteBtn = document.createElement('button'); 
        deleteBtn.textContent = 'Delete';
        deleteA.appendChild(deleteBtn);
        div3.appendChild(editA);
        div3.appendChild(deleteA);
        div3.classList.add('buttons-div');
      })
    })

  let createForm = document.getElementById('create-form');

  createForm.addEventListener('submit', e => {
    e.preventDefault();

    let data = new FormData(createForm);
    let json = {};

    for (let prop of data) {
      json[prop[0]] = prop[1];
    }

    let path = createForm.getAttribute('action');
    let method = createForm.getAttribute('method');
    fetch(path, { method: method, headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(json)})
      .then(res => console.log(res.status));
  })

  document.addEventListener('click', e => {
    if (e.target.nodeName === 'BUTTON') {
      e.preventDefault();
    }

    let editRegex = new RegExp('/contacts/edit/', 'gi');
    if (editRegex.test(e.target.parentElement.href)) {
      console.log(e.target.parentElement.href);
    }

    let deleteRegex = new RegExp('/contacts/delete/', 'gi');
    if (deleteRegex.test(e.target.parentElement.href)) {
      console.log(e.target.parentElement.href);
      let alert = window.confirm('Are you sure you want to delete?');
      if (alert) {
        fetch (e.target.parentElement.href, { method: 'DELETE' });
      }
    }

  })
})