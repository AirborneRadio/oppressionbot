const oppressionThreshold = -4 //sets what the score needs to be to respond with oppression
const banThreshold = -40 //sets what the score needs to be to respond with ban phrases
const praiseThreshold = 3 //sets what the score needs to be to respond with praise
const oppressCommon = false //adds the 3000 most common english words to the oppress list

const oppressCost = 2 //sets the score cost of each oppress word
const banCost = 20 //sets the score cost of each ban word
const praiseCost = 8 //sets the score increase of each praise word

module.exports = {
    oppressionThreshold,
    banThreshold,
    praiseThreshold,
    oppressCommon,
    oppressCost,
    banCost,
    praiseCost
  }