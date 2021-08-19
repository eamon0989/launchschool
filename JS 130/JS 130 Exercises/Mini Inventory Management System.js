'use strict';

let ItemCreator = function(itemName, category, quantity) {
  function checkItemName(itemName) {
    return itemName.replace(/\s/g, '').length > 4;
  }

  function checkCategoryName(category) {
    return (category.length > 4 && !(/\s/.test(category)));
  }

  function generateSkuCode(itemName, category) {
    return (itemName.replace(/\s/g, '').slice(0, 3) + category.slice(0, 2)).toUpperCase();
  }

  if (checkCategoryName(category) && checkItemName(itemName) && quantity !== undefined) {
    this.itemName = itemName;
    this.category = category;
    this.quantity = quantity;
    this.sku = generateSkuCode(itemName, category);
  } else {
    return { notValid: true };
  }
}

let ItemManager = {
  stock: [],

  create: function(itemName, category, quantity) {
    let item = new ItemCreator(itemName, category, quantity);
    if (item instanceof ItemCreator) {
      this.stock.push(item);      
    } else {
      return false;
    }
  },

  items: function() {
    return this.stock;
  },

  update: function(sku, object) {
    let item = this.stock.filter(obj => obj.sku === sku);
    Object.assign(item[0], object);
  },

  delete: function(sku) {
    this.stock = this.stock.filter(obj => obj.sku !== sku)
  },
  
  inStock: function() {
    return this.stock.filter(obj => obj.quantity > 0);
  },
  
  itemsInCategory: function(category) {
    return this.stock.filter(obj => obj.category === category);
  },
}

let ReportManager = {
  init: function(ItemManager) {
    this.items = ItemManager;
  },

  reportInStock: function() {
    let list = '';
    this.items.inStock().forEach(item => list += item.itemName + ', ');
    console.log(list.slice(0, -2));
  },

  createReporter: function(sku) {
    return (function() {
      let item = this.items.stock.filter(obj => obj.sku === sku)[0];
      return {
        itemInfo: function() {
          for (let prop in item) {
            console.log(`${prop}: ${item[prop]}`);
          }
        }
      }
    }).bind(this)();
  }
}

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
ItemManager.items;

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
ItemManager.items;

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10