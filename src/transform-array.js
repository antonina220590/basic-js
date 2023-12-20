const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (Array.isArray(arr) === false) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let duplicateArr = [];
  let test = [];

  for(let i = 0; i < arr.length; i++) {

    if(arr[i] === '--double-next') {
      duplicateArr.push(arr[i + 1])
    }
   else if (arr[i] === '--double-prev') {
    duplicateArr.push(arr[i - 1])
   }
    else if (arr[i] === '--discard-next') {
      arr[i ++ ];
      arr[i ++ ];
    } else if (arr[i] === '--discard-prev') {
      duplicateArr.pop();
    } else {
      duplicateArr.push(arr[i])
    }
  }

  let controlSequens = [
    '--double-next',
    '--double-prev',
    '--discard-next',
    '--discard-prev'
  ]

  for (let i = 0; duplicateArr.length > i; i++) {
    if (typeof duplicateArr[i] !== "undefined" && !controlSequens.includes(duplicateArr[i])) {
      test.push(duplicateArr[i]);
    }
  }
  return test;
}

module.exports = {
  transform
};
