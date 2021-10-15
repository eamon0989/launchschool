const CONTACT_ATTRS = ['full_name', 'phone_number', 'email', 'tags'];
const TAG_ATTRS = ['tag_name', 'contactsWithTag'];

module.exports = {
  extractContactAttrs: function(body) {
    let returnObj = {};
    Object.keys(body).forEach(function(key) {
      if (CONTACT_ATTRS.includes(key)) returnObj[key] = body[key];
    });

    return returnObj;
  },

  extractTagAttrs: function(body) {
    let returnObj = {};
    Object.keys(body).forEach(function(key) {
      if (TAG_ATTRS.includes(key)) returnObj[key] = body[key];
    });

    return returnObj;
  }
}
