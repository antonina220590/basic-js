const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {

  arr: [],

  getLength() {
  return this.arr.length;
  },
  addLink(value) {
    this.value = value;
    if(value === undefined) {
      this.arr.push('');
      return this;
    }else{
    this.arr.push(`( ${value} )`)
    return this
    }
  },
  removeLink(position) {
    this.position = position;
    if(position > 0 && position < this.arr.length && (typeof position === 'number')) {
      this.arr.splice(position - 1, 1)
      return this;
    }
    this.arr = [];
    throw new Error("You can't remove incorrect link!")
  },
  reverseChain() {
   this.arr.reverse();
  return this;
  },
  finishChain() {
   this.resultString = this.arr.join('~~');

    this.arr = []
    return this.resultString;
  }
};

module.exports = {
  chainMaker
};
