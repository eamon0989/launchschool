
class Contact {
  constructor({ id, full_name, email, phone_number, tags }) {
    this.id = id;
    this.full_name = full_name;
    this.email = email;
    this.phone_number = phone_number;
    this.tags = tags;
  }
}

class TagList {
  constructor() {
    this.tags = [];
  }

  createTag(tagName) {
    let tag = new Tag(tagName);
    this.tags.push(tag);
    return tag;
  }

  async postTagToServer(tagName) {
    if (tagName.trim().length === 0) {
      alert('Invalid tag');
    } else if (!this.tagAlreadyExists(tagName)) {
      let tag = this.createTag(tagName);
      fetch('/api/tags/', { method: 'POST', headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(tag) });
      alert(`${tagName} tag added!`)
    } else {
      alert('Tag already exists.')
    }
  }

  tagAlreadyExists(tagName) {
    return this.getTag(tagName);
  }

  getTags() {
    return this.tags;
  }

  removeFromContactsWithTag(id) {
    let tags = tagList.getTags();

    tags.forEach(tag => {
      tag.contactsWithTag = tag.contactsWithTag.filter(contactId => Number(contactId) !== Number(id));
    })
    this.updateTagsOnServer();
  }

  updateTagsOnServer() {
    let tags = this.getTags();
    tags.forEach(tag => {
      fetch('/api/tags', { method: "PUT", headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(tag)});
    })
  }

  async getTagsFromServer() {
    return await fetch('/api/tags')
      .then(res => res.json())
      .then(tags => {
        tags.forEach(tag => {
          this.tags.push(tag);
        })
      });
  }

  getTag(tagName) {
    let tags = this.getTags();
    return tags.find(tag => tag.tag_name === tagName);
  }

  getContactsWithTag(tagName) {
    let tag = this.getTag(tagName);
    return tag.contactsWithTag;
  }

  addTagsToForm(form) {
    let select = form.querySelector('select');
    while (select.firstElementChild) {
      select.firstElementChild.remove();
    }
    let tags = this.getTags();

    tags.forEach(tag => {
      let option = document.createElement('option');
      option.value = tag.tag_name;
      option.textContent = tag.tag_name;
      select.appendChild(option);
    })
  }
}

class Tag {
  constructor(tag) {
    this.tag_name = tag;
    this.contactsWithTag = [];
  }

  assignContactToTag(id) {
    this.contactsWithTag.push(id);
  }
}

class ContactsList {
  constructor() {
    this.contacts = [];
  }

  findContactById(id) {
    let contacts = this.getContacts();
    let contact = contacts.find(obj => obj.id === Number(id));
    return contact;
  }

  findContactIndex(id) {
    let contact = this.findContactById(id);
    return this.contacts.indexOf(contact);
  }

  deleteContact(e, id) {
    let index = this.findContactIndex(id);
    fetch (`http://localhost:3000/api/contacts/${id}`, { method: 'DELETE' })
    .then(res => {
      if (res.status === 204) {
        this.contacts.splice(index, 1);
        tagList.removeFromContactsWithTag(id);
        e.target.parentElement.parentElement.parentElement.remove();

        if (this.contactsListEmpty()) {
          document.getElementById('display-contacts').style.display = 'none';
          document.getElementById('no-contacts').style.display ='flex';
        }
      }
    });
  }

  displayEditContactForm(id) {
    let contact = this.findContactById(id);
    let form = document.getElementById('edit-contact');
    let editName = document.getElementById('edit_full_name');
    let editEmail = document.getElementById('edit_email');
    let editPhone = document.getElementById('edit_phone_number');
    let editTags = document.getElementById('edit_tags');
    let editId = document.getElementById('edit_id');
    let options = editTags.children;

    [...options].forEach(option => {
      if (contact.tags?.includes(option.textContent)) {
        option.setAttribute('selected', 'selected');
      }
    })

    editName.value = contact.full_name;
    editEmail.value = contact.email;
    editPhone.value = contact.phone_number;
    editId.value = contact.id;
    form.style.display = 'flex';
    document.getElementById('display-contacts').style.display = 'none';
  }

  async saveEditedContactToServer(updatedContact) {
    let id = updatedContact.id;
    tagList.removeFromContactsWithTag(id);
    let contact = this.findContactById(id);

    let newContact = await fetch(`/api/contacts/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, 
    body: JSON.stringify(updatedContact)}).then(res => res.json());
    this.contacts.splice(this.contacts.indexOf(contact), 1, newContact);
    this.getTags(newContact);
    this.displayContacts();
  }

  createContact(contactObject) {
    let contact = new Contact(contactObject);
    this.contacts.push(contact);
    this.getTags(contact);
    this.displayNewContact();
  }

  getTags(contact) {
    let tags;

    if (contact.tags) {
      tags = contact.tags?.split(',')
    } else {
      tags = [];
    }

    let id = contact.id;
    tags.forEach(tag => {
      let tagObj = tagList.getTag(tag); 
      if (!tagObj.contactsWithTag.includes(id)) {
        tagObj.contactsWithTag.push(id);
        fetch('/api/tags', { method: "PUT", headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(tagObj) });  
      }
    })
  }

  async getContactsFromServer() {
    fetch('/api/contacts').then(res => res.json())
    .then(contacts => {
      if (contacts.length > 0) {
        document.getElementById('display-contacts').style.display ='flex';
      }
       contacts.forEach(async contact => {
        this.createContact(contact);
      })
    });
  }

  getContacts() {
    return this.contacts;
  }

  displayNewContact() {
    let newContact = this.contacts[this.contacts.length - 1];
    createContactCard(newContact);
    showContactsDiv();
  }

  searchContacts(searchTerm) {
    let contacts = this.getContacts();
    let div = document.getElementById('no-matching-contacts');

    if (!searchTerm || searchTerm.length === 0) {
      this.displayContacts();
      div.style.display = 'none';
    } else {
      let filtered = contacts.filter(contact =>
        contact.full_name.toLowerCase().startsWith(searchTerm.toLowerCase()));
      this.displayContacts(filtered);
      div.style.display = 'none';

      if (filtered.length < 1) {
        let p = div.querySelector('p');
        p.textContent = `There are no contacts starting with ${searchTerm}.`;
        div.style.display = 'flex';
      }
    }
  }

  displayContacts(contacts) {
    if (!contacts) {
      contacts = this.getContacts();
    }

    let ul = document.getElementById('contacts-list');
    while (ul.lastElementChild) {
      ul.removeChild(ul.lastElementChild);
    }

    contacts.forEach(contact => {
      createContactCard(contact);
    })

    if (!this.contactsListEmpty()) {
      showContactsDiv();
    } else {
      document.getElementById('display-contacts').style.display ='none';
    }
  }

  displayContactsWithTag(tagName) {
    let tag = tagList.getTag(tagName);
    let div = document.getElementById('showing-filtered');
    let p = div.querySelector('p');
    div.style.display = 'flex';
    p.textContent = `Showing contacts with the tag: ${tagName}`;

    let contactsIds = tag.contactsWithTag;
    let showContactsBtn = document.getElementById('show-all-contacts');

    let contacts = [];
    contactsIds.forEach(id => {
      let contact = this.findContactById(id);
      contacts.push(contact);
    });

    showContactsBtn.removeAttribute('hidden');
    this.displayContacts(contacts);
  }

  async saveContactToServer(contact) {
    return await fetch('/api/contacts/', { method: 'POST', headers: { 'Content-Type': 'application/json' }, 
    body: JSON.stringify(contact)})
    .then(res => res.json())
    .then(contact => {
      this.createContact(contact);
    });
  }

  contactsListEmpty() {
    return this.contacts.length === 0;
  }
}

export let contactsList = new ContactsList();
export let tagList = new TagList();
export let tagLinks;

function createContactCard(contact) {
  let ul = document.getElementById('contacts-list');
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
  dt.classList.add('bold');
  let dd = document.createElement('dd');
  dd.textContent = contact.phone_number;
  let dt2 = document.createElement('dt');
  dt2.textContent = 'Email:';
  dt2.classList.add('bold');
  let dd2 = document.createElement('dd');
  dd2.textContent = contact.email;

  dl.appendChild(dt);
  dl.appendChild(dd);
  dl.appendChild(dt2);
  dl.appendChild(dd2);

  let div4 = document.createElement('div');
  li.appendChild(div4);
  let dl2 = document.createElement('dl');
  div4.appendChild(dl2);

  let tags = contact.tags;
  if (tags) {

    let dt3 = document.createElement('dt');
    dt3.textContent = 'Tags:';
    dt3.classList.add('bold');
    dl2.appendChild(dt3);

    tags?.split(',').forEach(tag => {
      let a = document.createElement('a');
      div4.classList.add('tag-links');
      a.textContent = tag;
      a.href = '#';
      div4.appendChild(a);
    })
  }
  
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
  tagLinks = document.querySelectorAll('tag-links');
}

function showContactsDiv() {
  document.getElementById('display-contacts').style.display = 'flex';
  document.getElementById('no-contacts').style.display ='none';
}