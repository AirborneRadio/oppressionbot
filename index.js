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
let lastRNG = 0


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

client.on('ready', () => {
  client.user.setStatus('watching for treason')
  console.log('I am ready!')
})

client.on('message', message => {
  if (message.member.roles.find(r => r.name === 'Oppressed')) {
    let oppressionCt = 0
    let isDev = message.member.roles.find(r => r.name === 'DEV')
    let rng = getRandomInt(41) //max value set to lookup table plus one
    if (rng == lastRNG) { rng = getRandomInt(41) }
    if (rng == lastRNG) { rng = getRandomInt(41) }
    lastRNG = rng
    //rng = 1 //sets rng value for testing
    oppressionCt = (oppressionCt - oppressResponse.score(message.author, message.content))
    oppressionCT = (oppressionCt += praiseResponse.score(message.author, message.content))
    if(oppressionCt >= settings.praiseThreshold || oppressionCt <= settings.oppressionThreshold)
    {
      let sendMSG = ''
      if(oppressionCt >= settings.praiseThreshold) { sendMSG = praiseResponse.msg(message.author, message.content, rng) }
      else if(oppressionCt <= settings.banThreshold) {
        sendMSG = oppressResponse.delmsg(message, rng)
        message.delete()
      }
      else if(oppressionCt <= settings.oppressionThreshold) { sendMSG = oppressResponse.msg(message.author, message.content, rng) }
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
