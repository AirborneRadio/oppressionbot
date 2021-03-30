const responses = require('./responses.js')
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function msg(author, message, rng)
{

  let sendMSG = 'I\'ve decided to praise you.'
  return sendMSG
}
function score(author, message)
{
  let words = message.split(" ")
  if(message.includes('%praise%'))
  {
    return 3
  }
  return 0
}
module.exports = {
  msg,
  score
}