import * as fs from 'fs'

const splitEncryptedMessageByWords = (message) => message.split(' ')

const isTwoNumbersAsci = (num) => num >= 97 && num < 100

const numberToAsci = (num) => String.fromCharCode(num)

const unencryptWord = (message) => {
  const unencryptedWord = []
  let counter = 0

  while (counter < message.length) {
    let letter = []

    if (isTwoNumbersAsci(message.slice(counter, counter + 2))) {
      letter = numberToAsci(message.slice(counter, counter + 2))
      counter = counter + 2
    } else {
      letter = numberToAsci(message.slice(counter, counter + 3))
      counter = counter + 3
    }

    unencryptedWord.push(letter)
  }

  return unencryptedWord.join('')
}

export default function challenge02 () {
  const encryptedMessage = fs.readFileSync('./challenge02/encrypted.txt', 'utf8')
  const splittedEncryptedMessage = splitEncryptedMessageByWords(encryptedMessage)

  const unencryptedMessage = []

  splittedEncryptedMessage.map((encryptedWord) => (
    unencryptedMessage.push(unencryptWord(encryptedWord))
  ))

  return unencryptedMessage.join(' ')
}
