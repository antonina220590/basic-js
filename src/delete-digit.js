const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('');
  let newArr = [];
  let result = [];
  for(let i = 0; i < arr.length; i++) {
   arr[i] = Number(arr[i]);
   newArr.push(arr[i]);
  }
  newArr.map((digit, i) => {
  let test = newArr.slice();
  test.splice(i, 1);
  result.push(test.join(''))
})

 result = result.sort((a,b) => b - a)
let final = Number(result.slice(0, 1).toString())
 return final;
}

module.exports = {
  deleteDigit
};
