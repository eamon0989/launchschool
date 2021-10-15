import { contactsList, tagList, tagLinks } from '/javascripts/classes.js';
tagList.getTagsFromServer().then(_ => contactsList.getContactsFromServer());


document.addEventListener('DOMContentLoaded', e => {
  let createForm = document.getElementById('create-form');
  let createContactDiv = document.getElementById('create-contact');
  let editForm = document.getElementById('edit-form');
  let tagForm = document.getElementById('create-tag-form');
  let showContactsBtn = document.getElementById('show-all-contacts');
  let searchBox = document.getElementById('search_bar');

  tagList.getTags();
  // let tagLinks = document.querySelectorAll('tag-links');

  createForm.addEventListener('submit', e => {
    e.preventDefault();

    let data = new FormData(createForm);
    let json = {};

    for (let prop of data) {
      if (!json[prop[0]]) {
        json[prop[0]] = prop[1];
      } else {
        json[prop[0]] += `,${prop[1]}`;
      }
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
    tagForm.reset();
    alert(`${tag} tag added!`)
  })

  // let searchTerm = '';

  searchBox.addEventListener('keyup', e => {
    let searchTerm = e.target.value;
    // console.log(e.target.value);
    contactsList.searchContacts(searchTerm);

  })

  document.addEventListener('click', e => {
    if (e.target.nodeName === 'BUTTON') {
      let editRegex = new RegExp('/contacts/edit/', 'gi');
      if (editRegex.test(e.target.parentElement.href)) {
        e.preventDefault();
        let id = e.target.parentElement.href.match(/\d+$/)[0];

        tagList.addTagsToForm(editForm);
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
        tagList.addTagsToForm(createForm);

        document.getElementById('create-contact').style.display = 'flex';
        document.getElementById('no-contacts').style.display ='none';
        document.getElementById('display-contacts').style.display ='none';
      }

      if (e.target.id === 'cancel-create-contact') {
        document.getElementById('create-contact').style.display = 'none';
        document.getElementById('display-contacts').style.display ='flex';

        if (contactsList.contactsListEmpty()) {
          document.getElementById('no-contacts').style.display ='flex';
        }
      }
    }

    if (e.target.nodeName === 'A') {
      // console.log(e.target.parentElement.classList);
      if (e.target.parentElement.classList.includes === 'tag-links') {
        e.preventDefault();
        let tagName = e.target.textContent;
        console.log('test');
        contactsList.displayContactsWithTag(tagName);
      }
    }
  })

  showContactsBtn.addEventListener('click', e => {
    contactsList.displayContacts();
    showContactsBtn.setAttribute('hidden', 'hidden');
  })
})
