  //variables:
  //%USER% -> @username#1234
  //%MSG% -> Message we're replying to

  const oppressResponses = [
    'Wait a minute, that\'s not a pro gamer move.',
    'I can\'t believe you\'ve done this',
    'Why don\'t you say that to your mother?',
    '<@305753443405004802> put you up to this, didn\'t they?',
    'To disable Microsoftâ„˘ Family Safety, you need to post a letter to:\n~~Santa Claus~~ Microsoft, \nNorth Pole, \nH0H 0H0, \nCanada \nContaining: Your SIN, Address, Blood Type, and Browser History.',
    'You\'ve been successfully reported.',
    'Are you sure you wanted to post that?',
    'https://cdn.discordapp.com/attachments/826579609516376074/826833976861392946/x37wd2mzh6n31.png', //tanjiro cringe
    'yikes... :cold_face:',
    '%USER%.exe has stopped responding',
    'familysafety.exe has recovered successfully.',
    '%USER%\'s attempt at comedy has failed successfully',
    'Riiiiight....',
    '*whispers* did they really just say that?',
    'trashtastetrashtastetrashtastetrashtastetrashtaste',
    'don\'t worry, i\'m definitely not telling @staff... :wink:',
    'I\'ve seen calculators with more charm...',
    'I\'m 99.852% sure you\'re not talking about me. Right? :gun:',
    'https://imgur.com/uYivX2n', //slam head into wall
    '<@391742118948896778> why are you making me listen to this?',
    '<@391742118948896778> I quit.\nAn unhandled exception has occurred. User does not have permission to use command:\ndiscord.thisuser.guild.leave()',
    ':GHNOffendPhoenix:',
    ':pstlOh:',
    ':pstlGibbsMood:',
    ':pstlHuh:',
    ':pstlWhat:',
    ':pstlWhatIsThis:',
    ':ghnDipREE:',
    'https://tenor.com/view/fuck-u-gif-13749885',
    'https://www.youtube.com/watch?v=Yje5oIQr92w',
    'https://tenor.com/view/miror-b-gif-19660101',
    'I found a gif of you:\nhttps://tenor.com/view/danganronpa-crossover-kill-la-kill-girl-fight-girls-gif-5469047',
    'https://tenor.com/view/kaguya-sama-love-is-war-chika-fujiwara-laugh-giggle-evil-laugh-gif-17149742',
    'https://tenor.com/view/psyduck-farfetchd-pokemon-gif-17872492',
    'https://tenor.com/view/angry-cat-noises-shout-anime-scream-angry-gif-16517686',
    'https://cdn.discordapp.com/attachments/826571917845987398/829767670671867964/dealwithit.gif',
    'With that attitude, you must be Team Chitoge #kosakifam',
    'I can\'t believe <@391742118948896778> learned node.js for this...',
    '<@391742118948896778>. This one. Right here.',
    '%USER%: You don\'t wanna see the kind of information I can see about you through Discord.API',
    'See everyone? This is why we can\'t have nice things.'
  ]
  const praiseResponses = [
    'Thank you for your commitment to maintaining this Christianâ„˘ Minecraftâ„˘ serverâ„˘.',
    'Now THAT\'S a pro gamerâ„˘ move',
    'Why thank you! ^-^ :heart:',
    'Ya know? Maybe i\'ll stay for a bit longer.',
    'You might not be so bad after all...',
    'Hey Everyone! %USER% is a fucking bro.',
    'Aw... %USER% :heart:',
    'https://tenor.com/view/dance-till-you-are-dead-meme-lol-on-yt-dog-gif-13446009',
    'https://tenor.com/view/ichiban-gif-19058538',
    'https://tenor.com/view/kazuma-kiryu-yakuza-sega-ryu-gif-7190078',
    'https://tenor.com/view/hug-anime-gif-15793126',
    'Fun fact: Most of the memes here have been stolen because my creator is unoriginal AF :rofl:',
    'https://tenor.com/view/dk-nintendo-donkey-kong-gif-4472496',
    'https://tenor.com/view/loli-disguise-police-gif-14116329',
    'Maybe <@391742118948896778> will let you see my source code :3',
    'You\'re pissing me off. Stop being so nice to me BAKA',
    'Author\'s note: I was super tempted to put the entire list of Minecraft title messages here',
    'Author\'s note: It only took 6 hours to build the framework for this bot, and at least double that for the dictionary and responses :D',
    'If you want me to stay after today, that might be arranged ^-^',
    'You should\'ve seen my early prototypes, it\'s pretty rough...',
    'I can guarantee <@391742118948896778> is tuning this as we go :D',
    'I\'m open source, and freaking excited to be here.',
    'I probably don\'t have programmed biases against certain people :thinking:', //23
  ]
  const banResponses = [
    'We\'ve protected you from seeing a message from %USER% containing adult content:\nThis action was taken automatically, so you don\'t need to do anything.',
    'Whoa there. We noticed you used language that doesn\'t belong in this Christianâ„˘ Minecraftâ„˘ serverâ„˘:\n%USER%: "%MSG%"\nThat\'s not a pro gamer move...',
    '%USER%: I\'ve taken the liberty of deleting the message you just sent to protect you.\nYou\'re very welcome :wink:',
    '%USER%: We\'ve successfully uploaded a list of your most recent Discord DMs:\nhttps://bit.ly/3sFFCqa',
    'I\'m afraid I can\'t let you do that ~~Dave~~%USER%...',
    'Look what you made me do %USER%: https://tenor.com/view/elmo-fire-burning-gif-8869638',
    '%USER%: https://tenor.com/view/menacing-anime-uno-reverse-card-girl-serious-gif-17955997',
    '%USER%: https://tenor.com/view/congrats-djkhlaed-player-yourself-foolingyourself-gif-4961672',
    '%USER%: Don\'t make me send you to HORNYJAIL.',
    '%USER%: I can\'t believe you actually posted that to Discord. You should be ashamed of yourself.',
    '%USER%: Next time i\'m going to send a copy of that to all your closest living relatives.',
    '%USER%: https://cdn.discordapp.com/attachments/826579609516376074/826847400630681650/1bc8d785b9e3965ec43127224df94f7f.png',
    '%USER%: https://tenor.com/view/anime-smile-waving-knife-gif-16552686',
    'Yea... I\'m just gonna delete that. Don\'t worry, I won\'t tell you who sent that.',
    'Rather than waste everyone\'s time, watch this instead %USER%\nhttps://www.youtube.com/watch?v=jQRb4DZnhn8', //15
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
