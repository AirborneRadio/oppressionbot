const Hypher = require('hypher')
const english = require('hyphenation.en-us')
const h = new Hypher(english)
const syllable = require('syllable')
const formattedWordArray = require('./formatter.js')

var wordArray = []
let praiseOptions = [
  '@user... We will not tolerate that kind of language',
  ''


]

module.exports = msg => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return {
    msg:
      fiveSyl1.join(' ') +
      '\n' +
      sevenSyl.join(' ') +
      '\n' +
      fiveSyl2.join(' '),
    arrays: { fiveSyl1, sevenSyl, fiveSyl2 }
  }
}
module.exports = score => {

  return {
    score:
    ''
  }
}
