import { contactsList, tagList } from '/javascripts/classes.js';
// import tagList from '/javascripts/classes.js';

// contactsList.createContact()
// console.log(contact);

console.log(contactsList);
console.log(tagList);
// tagList.createTag('buisness');
// tagList.createTag('work');
// console.log(tagList.getTag('buisness'));
// console.log(tagList.getContactsWithTag('work'));

document.addEventListener('DOMContentLoaded', e => {
  let displayedContacts = 0;
  let contactsArray = [];
  // getAndDisplayContacts(contactsArray);

  let createForm = document.getElementById('create-form');

  createForm.addEventListener('submit', e => {
    e.preventDefault();

    let data = new FormData(createForm);
    let json = {};

    for (let prop of data) {
      json[prop[0]] = prop[1];
    }

    // console.log(json);

    contactsList.createContact(json);

    // let path = createForm.getAttribute('action');
    // let method = createForm.getAttribute('method');
    // fetch(path, { method: method, headers: { 'Content-Type': 'application/json' }, 
    //   body: JSON.stringify(json)})
    //   .then(res => res.json()).then(json => console.log(json));
  })

  document.addEventListener('click', e => {
    if (e.target.nodeName === 'BUTTON') {
      let editRegex = new RegExp('/contacts/edit/', 'gi');
      if (editRegex.test(e.target.parentElement.href)) {
        console.log(e.target.parentElement.href);
        e.preventDefault();
  
      }
  
      let deleteRegex = new RegExp('/contacts/delete/', 'gi');
      if (deleteRegex.test(e.target.parentElement.href)) {
        e.preventDefault();
        let alert = window.confirm('Are you sure you want to delete?');
        if (alert) {
          let id = e.target.parentElement.href.match(/\d+$/)[0];
          fetch (`http://localhost:3000/api/contacts/${id}`, { method: 'DELETE' })
            .then(res => {
              if (res.status === 204) {
                e.target.parentElement.parentElement.parentElement.remove();
                displayedContacts -= 1;
                if (displayedContacts < 1) {
                  document.getElementById('display-contacts').style.display = 'none';
                  document.getElementById('no-contacts').style.display ='flex';
                }
              }
            });
        }
      }

      if (e.target.textContent === 'Add Contact') {
        // console.log('add contaxt');
        document.getElementById('create-contact').style.display = 'flex';
        document.getElementById('no-contacts').style.display ='none';

        // console.log();
      }

      if (e.target.id === 'cancel-create-contact') {
        document.getElementById('create-contact').style.display = 'none';
        document.getElementById('no-contacts').style.display ='flex';      }
    }
  })
})

// function createContactCard(contact) {
//   let ul = document.getElementById('contacts-list');
//   let li = document.createElement('li');
//   li.classList.add('contacts-list-items')
//   ul.appendChild(li);
//   let div = document.createElement('div');
//   let h3 = document.createElement('h3');
//   h3.textContent = contact['full_name'];
//   div.appendChild(h3);
//   li.appendChild(div);
//   let div2 = document.createElement('div');
//   li.appendChild(div2);
//   let dl = document.createElement('dl');
//   div2.appendChild(dl);
//   let dt = document.createElement('dt');
//   dt.textContent = 'Phone Number:';
//   let dd = document.createElement('dd');
//   dd.textContent = contact.phone_number;
//   let dt2 = document.createElement('dt');
//   dt2.textContent = 'Email:';
//   let dd2 = document.createElement('dd');
//   dd2.textContent = contact.email;
//   dl.appendChild(dt);
//   dl.appendChild(dd);
//   dl.appendChild(dt2);
//   dl.appendChild(dd2);
//   let div3= document.createElement('div');
//   li.appendChild(div3);
//   let editA = document.createElement('a');
//   editA.href = `/contacts/edit/${contact.id}`;
//   let editBtn = document.createElement('button'); 
//   editBtn.textContent = 'Edit';
//   editA.appendChild(editBtn);
//   let deleteA = document.createElement('a');
//   deleteA.href = `/contacts/delete/${contact.id}`;
//   let deleteBtn = document.createElement('button'); 
//   deleteBtn.textContent = 'Delete';
//   deleteA.appendChild(deleteBtn);
//   div3.appendChild(editA);
//   div3.appendChild(deleteA);
//   div3.classList.add('buttons-div');
// }

// function getAndDisplayContacts(contactsArray) {
//   fetch('/api/contacts').then(res => res.json())
//     .then(contacts => {
//       if (contacts.length !== 0) {
//         document.getElementById('display-contacts').style.display = 'block';
//         document.getElementById('no-contacts').style.display ='none';
//       }
//       contacts.forEach(contact => {
//         createContactCard(contact);
//         contactsArray.push(contact);
//       })
//     })
// }
