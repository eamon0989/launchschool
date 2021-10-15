import { contactsList, tagList } from '/javascripts/classes.js';
contactsList.getContactsFromServer();
tagList.getTagsFromServer();

document.addEventListener('DOMContentLoaded', e => {
  let createForm = document.getElementById('create-form');
  let createContactDiv = document.getElementById('create-contact');
  let editForm = document.getElementById('edit-form');
  let tagForm = document.getElementById('create-tag-form');
  console.log(tagList.getTags());

  createForm.addEventListener('submit', e => {
    e.preventDefault();

    let data = new FormData(createForm);
    let json = {};

    for (let prop of data) {
      json[prop[0]] = prop[1];
    }

    contactsList.saveContactToServer(json);
    createForm.reset();
    createContactDiv.style.display = 'none';
  })

  editForm.addEventListener('submit', e => {
    e.preventDefault();

    let data = new FormData(editForm);
    let json = {};

    for (let prop of data) {
      json[prop[0]] = prop[1];
    }

    contactsList.saveEditedContactToServer(json);
    editForm.reset();
    editForm.style.display = 'none';
  })

  tagForm.addEventListener('submit', e => {
    e.preventDefault();
    console.log('tags');
    let tagInput = document.getElementById('create-tag');
    let tag = tagInput.value;
    tagList.postTagToServer(tag);
  })

  document.addEventListener('click', e => {
    if (e.target.nodeName === 'BUTTON') {
      let editRegex = new RegExp('/contacts/edit/', 'gi');
      if (editRegex.test(e.target.parentElement.href)) {
        e.preventDefault();
        let id = e.target.parentElement.href.match(/\d+$/)[0];

        contactsList.displayEditContactForm(id);
      }
  
      let deleteRegex = new RegExp('/contacts/delete/', 'gi');
      if (deleteRegex.test(e.target.parentElement.href)) {
        e.preventDefault();
        let alert = window.confirm('Are you sure you want to delete?');
        if (alert) {
          let id = e.target.parentElement.href.match(/\d+$/)[0];
          contactsList.deleteContact(e, id);
        }
      }

      if (e.target.textContent === 'Add Contact') {
        document.getElementById('create-contact').style.display = 'flex';
        document.getElementById('no-contacts').style.display ='none';
      }

      if (e.target.id === 'cancel-create-contact') {
        document.getElementById('create-contact').style.display = 'none';
        if (contactsList.contactsListEmpty()) {
          document.getElementById('no-contacts').style.display ='flex';
        }
      }
    }
  })
})
