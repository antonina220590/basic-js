const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {


  letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  constructor(direction = true) {
    this.direction = direction;
  }


  encrypt(message, key) {
    if(typeof message === 'undefined' || typeof key === 'undefined') {
      throw Error('Incorrect arguments!');
    }

  message = message.toUpperCase();
  key = key.toUpperCase();
  let repeatKey = Math.ceil(message.length / key.length);
  key = key.repeat(repeatKey);

  let codeA = 'A'.charCodeAt(0);
  let alphabetLength = 26;
  let decryptedMessage = [];

  for(let i = 0; i < message.length; i++) {
      if(this.letters.indexOf(message.charAt(i)) === -1) {
      key = key.slice(0, i) + message[i] + key.slice(i);
      decryptedMessage.push(message[i]);

    }else{

      let letterIndex = message.charCodeAt(i) - codeA;
      let shift = key.charCodeAt(i) - codeA;

      decryptedMessage.push(
        String.fromCharCode(codeA + (letterIndex + shift) % alphabetLength)
      )
    }
  }
  if(this.direction) {
    return decryptedMessage.join('')
    } else {
     return decryptedMessage.reverse('').join('')
    }

  }
  decrypt(encryptedMessage, key) {
    if(typeof encryptedMessage === 'undefined' || typeof key === 'undefined') {
      throw Error('Incorrect arguments!');
    }

  encryptedMessage = encryptedMessage.toUpperCase();
  key = key.toUpperCase();
  let repeatKey = Math.ceil(encryptedMessage.length / key.length);
  key = key.repeat(repeatKey);

  let codeA = 'A'.charCodeAt(0); //A
  let alphabetLength = 26; //26
  let decryptedMessage = [];

  for(let i = 0; i < encryptedMessage.length; i++) {
      if(this.letters.indexOf(encryptedMessage.charAt(i)) === -1) {
      key = key.slice(0, i) + encryptedMessage[i] + key.slice(i);
      decryptedMessage.push(encryptedMessage[i])

    }else{

      let letterIndex = encryptedMessage.charCodeAt(i) - codeA;
      let shift = key.charCodeAt(i) - codeA;

      decryptedMessage.push(
        String.fromCharCode(codeA + (letterIndex - shift + alphabetLength) % alphabetLength)
      )
    }
  }
  if(this.direction) {
    return decryptedMessage.join('')
    } else {
     return decryptedMessage.reverse('').join('')
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
