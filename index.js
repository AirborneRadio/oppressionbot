/*
  OppressionBot - April Fools 2021
  based on: brentcobb/haiku-bot
*/
require('dotenv').config()

const http = require('http')
const Discord = require('discord.js')
const client = new Discord.Client()
const oppressResponse = require('./oppressResponse.js')
const praiseResponse = require('./praiseResponse.js')
const settings = require('./settings.js')
const token = process.env.DISCORD_TOKEN
let lastOppRNG = 0
let lastPraRNG = 0
let lastBanRNG = 0


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

client.on('ready', () => {
  client.user.setActivity('for poor behaviour', { type: "WATCHING" }) //discord bot status
  console.log('I am ready!')
})

client.on('message', message => {
  if (message.member.roles.find(r => r.name === 'Secure')) {
    //Create score variable, isDev check, and create rng variable
    let oppressionCt = 0
    let isDev = message.member.roles.find(r => r.name === 'DEV')
    let rng = 0
    let sendMSG = ''
    //Duplicate response detection & random number generator
    let opprng = getRandomInt(40) //max value set to oppress lookup table plus one
    let prarng = getRandomInt(23) //max value set to praise lookup table plus one
    let banrng = getRandomInt(15) //max value set to ban lookup table plus one
    if (opprng == lastOppRNG) { opprng = getRandomInt(41) }
    if (prarng == lastPraRNG) { prarng = getRandomInt(41) }
    if (banrng == lastBanRNG) { banrng = getRandomInt(41) }
    lastOppRNG = opprng
    lastPraRNG = prarng
    lastBanRNG = banrng

    //get message score to determine response
/*     if(message.content == 'mhs!welcome')
    {
      oppressionCt = 0
      sendMSG = 'Thank you for participating in the Microsoft Family Safety Insider Program!\nThis Discord bot will monitor the chat on this server to protect our impressionable youth.'
      message.channel.send(sendMSG)
    }
    else
    { */
      oppressionCt = (oppressionCt - oppressResponse.score(message.author, message.content))
      oppressionCT = (oppressionCt += praiseResponse.score(message.author, message.content))
    //}

    if(oppressionCt >= settings.praiseThreshold || oppressionCt <= settings.oppressionThreshold)
    {
      if(oppressionCt >= settings.praiseThreshold) { //if praise
         sendMSG = praiseResponse.msg(message.author, message.content, prarng)  //set random praise response
         rng = prarng //set rng value for dev message
        }
      else if(oppressionCt <= settings.banThreshold) {//if ban
        sendMSG = oppressResponse.delmsg(message, banrng) //set random ban response
        message.delete() //delete previous message
        rng = banrng //set rng value for dev message
      }
      else if(oppressionCt <= settings.oppressionThreshold) { //if oppress
        sendMSG = oppressResponse.msg(message.author, message.content, opprng) //set random oppress response 
        rng = opprng //set rng value for dev message
      }
      else{rng = 0}//I have no idea how you got here but oh well

      //finalize and send message
      if(isDev){ sendMSG = (sendMSG + '\n(DEV) RNGVAL: ' + rng + ' | OPSCORE: ' + oppressionCt) }
      sendMSG = sendMSG.replace('%USER%', message.author)
      sendMSG = sendMSG.replace('%MSG%', message.content)
      message.channel.send(sendMSG)
    }
  }
})

// Actually log into Discord
client.login(token)
// pay attention on this port young bot
http.createServer().listen(process.env.PORT)
