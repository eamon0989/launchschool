const fs = require('fs');
const path = require('path');
const stringify = require('json-beautify');

let dataFile = 'tags.json';
if (process.env.NODE_ENV === 'test') dataFile = 'tags_test.json';
const DATA_PATH = path.join(__dirname, `../data/${dataFile}`);

const tagManager = {
  getAll: function(cb) {
    let data = fs.readFileSync(DATA_PATH, 'utf-8');
    let collection = data.trim().length > 0 ? JSON.parse(data) : [];
    return collection;
  },

  add: function(tag) {
    if (!tag['tag_name']) return false;
    let collection = this.getAll();
    let newTag = this.createTag(tag);

    collection.push(newTag);
    this.write(collection);

    return newTag;
  },

  createTag: function(tag) {
    let newTag = Object.assign(
      {
        tag_name: null,
        contactsWithTag: null,
      },
      tag
    );
    return newTag;
  },

  update: function(newTag) {
    let collection = this.getAll();
    console.log(collection);
    console.log(newTag);
    let newCollection;
    let updatedTag;
    if (collection.map(tag => tag.tag_name).includes(newTag.tag_name)) {
      newCollection = collection.map(function(tag) {
        if (tag.tag_name === newTag.tag_name) {
          updatedTag = Object.assign({}, tagName);
          return updatedTag;
        }
        return contact;
      });
      console.log(newCollection);
      this.write(newCollection);
      return updatedContact;
    } else {
      return false;
    }
  },

  // remove: function(contactId) {
  //   contactId = Number(contactId);
  //   let collection = this.getAll();
  //   let newCollection;
  //   if (collection.map(c => c.id).includes(contactId)) {
  //     newCollection = collection.filter(contact => contact.id !== contactId);
  //     this.write(newCollection);
  //     return true;
  //   } else {
  //     return false;
  //   }
  // },

  // update: function(contactId, contactAttrs) {
  //   contactId = Number(contactId);
  //   let collection = this.getAll();
  //   let newCollection;
  //   let updatedContact;
  //   if (collection.map(c => c.id).includes(contactId)) {
  //     newCollection = collection.map(function(contact) {
  //       if (contact.id === contactId) {
  //         updatedContact = Object.assign({}, contact, contactAttrs);
  //         return updatedContact;
  //       }
  //       return contact;
  //     });
  //     this.write(newCollection);
  //     return updatedContact;
  //   } else {
  //     return false;
  //   }
  // },

  // generateId: function() {
  //   let collection = this.getAll();

  //   var maxId = collection.reduce(function(prevMax, contact) {
  //     return contact.id > prevMax ? contact.id : prevMax;
  //   }, 0);

  //   return maxId + 1;
  // },

  write: function(collection) {
    fs.writeFileSync(DATA_PATH, stringify(collection, null, 2));
  }

  // removeAll: function() {
  //   this.write([]);
  // },


  // get: function(contactId) {
  //   contactId = Number(contactId);
  //   let collection = this.getAll();

  //   if (collection.map(c => c.id).includes(contactId)) {
  //     return collection.find(c => c.id === contactId);
  //   } else {
  //     return false;
  //   }
  // },



};
module.exports = tagManager;
