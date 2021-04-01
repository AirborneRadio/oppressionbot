const responses = require('./responses.js')
const dict = require('./dictionary.js')
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function msg(author, message, rng)
{
  return responses.getPraise(rng)
}
function score(author, message)
{
  let out = 0
  let lowerMessage = message.toLowerCase()
  let words = lowerMessage.split(" ")
  words.forEach(element => (out += dict.isPraise(element)))
  return out
}
module.exports = {
  msg,
  score
}