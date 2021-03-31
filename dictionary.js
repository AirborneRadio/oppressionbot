const oppressList = [
    'suck',
    'potato',
    '1987'
]
const banList = [
    'fuck',
    'shit',
    'swear'
]
const praiseList = [
    'great',
    'gibbs',
    'pastel'
]
const oppressCost = 3
const banCost = 10
const praiseCost = 3
function isOppress(word)
{
if(oppressList.find(r => r === word))
{
    return oppressCost
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
    return praiseCost
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
    return banCost
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