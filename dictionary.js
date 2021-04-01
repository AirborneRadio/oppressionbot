const oppressList = [
    'sabotage',
    'unconc',
    'absolutely',
    'ban',
    '1984',
    'oppress',
    'blacklist',
    'when',
    'where',
    'what',
    'why',
    'this',
    'that',
    'then',
    'i',
    'want',
    'trick',
    'don\'t',
    'not',
    'me',
    'sounds',
    'quit',
    'worst',
    'waiting',
    'really',
    'apparently',
    'never',
    'make',
    'no',
    'not',
    'this',
    'ass',
    'asshole',
    'crap',
    'sucks',
    'suck'
]
const banList = [
    'fuck',
    'shit',
    'swear',
    'connor',
    'kounavi',
    'spider',
    'spiders',
    'snake',
    'snakes',
    'free',
    'china',
    'slave',
    'slavery',
    'motherfucker',
    'motherfuckers',
    'chaos',
    '-_-',
    ':/',
    ':\\',

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
    'good',
    'support',
    'appreciate',
    'wish',
    'wishes',
    'heck',
    'hekkin',
    'hecken',
    'heckin',
    ':3',
    ':d',
    ':p',
    '^-^',
    'xd',
    'champ'


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