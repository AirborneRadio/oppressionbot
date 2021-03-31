const oppressList = [
    'sabotage',
    'unconc',
    'absolutely',
    'ban',
    '1984',
    'oppress',
    'blacklist'
]
const banList = [
    'fuck',
    'shit',
    'swear',
    'connor',
    'kounavi',

]
const praiseList = [
    'great',
    'gibbs',
    'pastel',
    'love',
    'awesome',
    'cool',
    'dope',
    'sweet',
    'amazing',
    'gorgeous',
    'pog',
    'epic',
    'potato',
    'favorite',
    'favourite',
    'good'

]
const settings = require('./settings.js')
function isOppress(word)
{
if(oppressList.find(r => r === word))
{
    return settings.oppressCost
}
else
{
    return 0
}
}
function isPraise(word)
{
    if(praiseList.find(r => r === word))
{
    return settings.praiseCost
}
else
{
    return 0
}
}
function isBan(word)
{
    if(banList.find(r => r === word))
{
    return settings.banCost
}
else
{
    return 0
}
}
module.exports = {
    isOppress,
    isPraise,
    isBan
  }