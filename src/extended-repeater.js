const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  str = String(str);

   if(typeof options.addition !== "undefined") {
    options.addition = String(options.addition)
   }

  if(options.separator === undefined) {
    options.separator = '+';
  }

  if(options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }

  if(options.repeatTimes === undefined) {
   options.repeatTimes = 1;
  }

  if(options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }

  let addStr = [];

  let mainStr = '';

  let result = [];

  function addAdditionString() {

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    addStr.push(options.addition)
  }
   addStr = addStr.join(options.additionSeparator);
   return addStr
  }
   addAdditionString(addStr)

  mainStr = `${str}${addStr}`;

  for(let i = 0; i < options.repeatTimes; i++) {
    result.push(mainStr)
  }

  return result.join(options.separator)
}

module.exports = {
  repeater
};
