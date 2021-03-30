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
const token = process.env.DISCORD_TOKEN

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

client.on('ready', () => {
  console.log('I am ready!')
})

client.on('message', message => {
  if (message.member.roles.find(r => r.name === 'Oppressed')) {
    let oppressionCt = 0
    let isDev = message.member.roles.find(r => r.name === 'DEV')
    let rng = getRandomInt(15)
    oppressionCt = (oppressionCt - oppressResponse.score(message.author, message.content))
    oppressionCT = (oppressionCt += praiseResponse.score(message.author, message.content))
    if(oppressionCt >= 3 || oppressionCt <= -3)
    {
      let sendMSG = ''
      if(oppressionCt >= 3) { sendMSG = praiseResponse.msg(message.author, message.content, rng) }
      else if(oppressionCt <= -10) {
        sendMSG = oppressResponse.delmsg(message, rng)
        message.delete()
      }
      else if(oppressionCt <= -3) { sendMSG = oppressResponse.msg(message.author, message.content, rng) }
      if(isDev){ sendMSG = (sendMSG + '\n(DEV) RNGVAL: ' + rng + ' | OPSCORE: ' + oppressionCt) }
      message.channel.send(sendMSG)
    }
  }
})

// Actually log into Discord
client.login(token)
// pay attention on this port young bot
http.createServer().listen(process.env.PORT)
