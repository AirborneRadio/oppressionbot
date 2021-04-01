const responses = require('./responses.js')
const dict = require('./dictionary.js')
function msg(author, message, rng)
{
  return responses.getOppress(rng)
}
function delmsg(messageobj, rng)
{
  return responses.getBan(rng)
}
function score(author, message)
{
  let out = 0
  let lowerMessage = message.toLowerCase()
  let words = lowerMessage.split(" ")
  words.forEach(element => (out += dict.isOppress(element)))
  words.forEach(element => (out += dict.isBan(element)))
  return out
}
module.exports = {
  msg,
  score,
  delmsg
}