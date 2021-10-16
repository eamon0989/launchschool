import { contactsList, tagList } from '/javascripts/classes.js';
tagList.getTagsFromServer().then(_ => contactsList.getContactsFromServer());

document.addEventListener('DOMContentLoaded', e => {
  let createForm = document.getElementById('create-form');
  let createContactDiv = document.getElementById('create-contact');
  let editForm = document.getElementById('edit-form');
  let editFormDiv = document.getElementById('edit-contact');
  let tagForm = document.getElementById('create-tag-form');
  let showContactsBtn = document.getElementById('show-all-contacts');
  let searchBox = document.getElementById('search_bar');
  tagList.getTags();

  createForm.addEventListener('submit', e => {
    e.preventDefault();

    let json = makeJsonFromForm(createForm);
    contactsList.saveContactToServer(json);
    createForm.reset();
    createContactDiv.style.display = 'none';

    //resets 'Showing contacts div' if open
    let click = new Event('click');
    showContactsBtn.dispatchEvent(click);
  })

  editForm.addEventListener('submit', e => {
    e.preventDefault();

    let json = makeJsonFromForm(editForm);
    contactsList.saveEditedContactToServer(json);
    editForm.reset();
    editFormDiv.style.display = 'none';
  })

  tagForm.addEventListener('submit', e => {
    e.preventDefault();
    let tagInput = document.getElementById('create-tag');
    let tag = tagInput.value;
    tagList.postTagToServer(tag);
    tagForm.reset();
  })

  searchBox.addEventListener('input', e => {
    let div = document.getElementById('showing-filtered');
    div.style.display = 'none';
    let searchTerm = e.target.value;
    contactsList.searchContacts(searchTerm);
  })

  document.addEventListener('click', e => {
    if (e.target.nodeName === 'BUTTON') {
      buttonEvents(e);
    }

    if (e.target.nodeName === 'A') {
      if (e.target.parentElement.firstElementChild.nodeName === 'DL') {
        e.preventDefault();
        let tagName = e.target.textContent;
        contactsList.displayContactsWithTag(tagName);
      }
    }
  })

  showContactsBtn.addEventListener('click', e => {
    contactsList.displayContacts();
    showContactsBtn.setAttribute('hidden', 'hidden');
    let div = document.getElementById('showing-filtered');
    div.style.display = 'none';
  })
})

function makeJsonFromForm(form) {
  let data = new FormData(form);
  let json = {};

  for (let prop of data) {
    if (!json[prop[0]]) {
      json[prop[0]] = prop[1];
    } else {
      json[prop[0]] += `,${prop[1]}`;
    }
  }

  if (!json.tags) {
    json.tags = '';
  }

  return json;
}

function buttonEvents(e) {
  let createForm = document.getElementById('create-form');
  let editForm = document.getElementById('edit-form');

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
      document.getElementById('display-contacts').style.display ='none';
    }
  }

  if (e.target.id === 'cancel-edit-contact') {
    document.getElementById('edit-contact').style.display = 'none';
    document.getElementById('display-contacts').style.display ='flex';

    if (contactsList.contactsListEmpty()) {
      document.getElementById('no-contacts').style.display ='flex';
      document.getElementById('display-contacts').style.display ='none';
    }
  }
}