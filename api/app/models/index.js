const uuid = require('uuid/v1');
const questions = require('./questions');
const choices = require('./choices');

class Model {
  constructor(data) {
    this.values = data;
  }

  // Find with optional Where
  findAll() {
    // If no filter is defined
    return this.values;
  }


  // pass the data to be added
  create(item) {
    // create a uuid
    const id = uuid();
    // add the item data and the id to the array of values
    this.values.push({ id, ...item });
    // return the new id
    return id;
  }

  //
  findByPk(id) {
    // the find function of an array searches for the first item to return true
    return this.values.find(item => item.id === id);
  }

  // take in the new values and the id of the item we want to change
  update(valuesToChange, id) {
    // get the index of the item that we are changing
    const index = this.values.findIndex(item => item.id === id);
    // take the current values and replace any new values
    const newValue = { ...this.values[index], ...valuesToChange };
    // piece together our array, all the items before this one, the new one, all the items after
    this.values = [
      ...this.values.slice(0, index),
      newValue,
      ...this.values.slice(index + 1),
    ];
    // return the new item
    return newValue;
  }

  destroy(id) {
    // set the values object to an array of items that don't have the passed in id
    this.values = this.values.filter((item) => {
      // TODO: Improve accuracy of returned false positive of already deleted
      if (item.id === id) return false;
      return true;
    });
  }
}

module.exports = {
  Questions: new Model(questions),
  Choices: new Model(choices),
};
