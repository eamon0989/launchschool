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
    let newCollection;

    if (collection.map(tag => tag.tag_name).includes(newTag.tag_name)) {
      newCollection = collection.map(function(tag) {
        if (tag.tag_name === newTag.tag_name) {
          return newTag;
        }
        return tag;
      });

      this.write(newCollection);
      return newTag;
    } else {
      return false;
    }
  },

  write: function(collection) {
    fs.writeFileSync(DATA_PATH, stringify(collection, null, 2));
  }

};
module.exports = tagManager;
