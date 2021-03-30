const responses = require('./responses.js')

function msg(author, message, rng)
{
  return 'I\'ve decided to oppress you.'
}
function delmsg(messageobj, rng)
{
  return messageobj.author + ': We don\'t say things like:\n"' + messageobj.content +'"\n on this server!'
}
function score(author, message)
{
  let words = message.split(" ")
  if(message.includes('%oppress%'))
  {
    return 3
  }
  if (message.includes('%ban%'))
  {
    return 10
  }
  return 0
}
module.exports = {
  msg,
  score,
  delmsg
}