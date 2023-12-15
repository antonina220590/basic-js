const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members) === false) {
    return false
  }
  let newArr = [];
  let result = []
  newArr = members.filter((member) =>  typeof member === 'string')
   newArr.forEach(element => {
    result.push(element.toUpperCase().trim().charAt(0));
   })

   return result.sort().join('');
}

module.exports = {
  createDreamTeam
};
