  //variables:
  //%USER% -> @username#1234
  //%MSG% -> Message we're replying to

  const oppressResponses = [
    'I\'ve decided to oppress you.',
    'OPPRESS: %USER% -> %MSG%'
  
  
  ]
  const praiseResponses = [
    'I\'ve decided to praise you.',
    'PRAISE: %USER% -> %MSG%'
  
  
  ]
  const banResponses = [
    '%USER%... We don\'t say things like:\n%MSG%\n on this server!',
    'message 2. yes i was too lazy to make something here. deal with it'
  
  
  ]
  function getOppress(rng){
    return oppressResponses[rng]
  }
  function getPraise(rng){
    return praiseResponses[rng]
  }
  function getBan(rng){
    return banResponses[rng]
  }
  module.exports = {
    getOppress,
    getPraise,
    getBan
  }