
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

  getAllTags() {

  }

  createTag(tagName) {
    let tag = new Tag(tagName);
    this.tags.push(tag);
    return tag;
  }

  async postTagToServer(tagName) {
    let tag = this.createTag(tagName);
    fetch('/api/tags/', { method: 'POST', headers: { 'Content-Type': 'application/json' }, 
    body: JSON.stringify(tag) });
  }

  getTags() {
    return this.tags;
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
    let tag = tags.find(tag => tag.tag === tagName);
    return tag;
  }

  getContactsWithTag(tagName) {
    let tag = this.getTag(tagName);
    return tag.contactsWithTag;
  }


}

class Tag {
  constructor(tag) {
    this.tag_name = tag;
    this.contactsWithTag = [];
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
    editName.value = contact.full_name;
    editEmail.value = contact.email;
    editPhone.value = contact.phone_number;
    editTags.value = contact.tags;
    editId.value = contact.id;
    form.style.display = 'flex';
  }

  async saveEditedContactToServer(updatedContact) {
    let id = updatedContact.id;
    let contact = this.findContactById(id);

    let newContact = await fetch(`/api/contacts/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, 
    body: JSON.stringify(updatedContact)}).then(res => res.json());
    this.contacts.splice(this.contacts.indexOf(contact), 1, newContact);
    this.displayContacts();
  }

  async createContact(contactObject) {
    let contact = new Contact(contactObject);
    this.contacts.push(contact);
    this.displayNewContact();
  }

  async getContactsFromServer() {
    fetch('/api/contacts').then(res => res.json())
    .then(contacts => {
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

  displayContacts() {
    let contacts = this.getContacts();

    let ul = document.getElementById('contacts-list');
    while (ul.lastElementChild) {
      ul.removeChild(ul.lastElementChild);
    }

    contacts.forEach(contact => {
      createContactCard(contact);
    })

    if (!this.contactsListEmpty()) {
      showContactsDiv();
    }
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

  deleteAllContacts() {
    // this.
  }
}

export let contactsList = new ContactsList();
export let tagList = new TagList();


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
}

function showContactsDiv() {
  document.getElementById('display-contacts').style.display = 'flex';
  document.getElementById('no-contacts').style.display ='none';
}