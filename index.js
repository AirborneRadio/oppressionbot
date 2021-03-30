/*
  OppressionBot - April Fools 2021
  based on: brentcobb/haiku-bot
*/
if (process.env.ENVIRONMENT === 'local') {
  require('dotenv').config()
}

const http = require('http')
const Discord = require('discord.js')
const client = new Discord.Client()
const oppressResponse = require('./oppressResponse.js')
const praiseResponse = require('./praiseResponse.js')
const token = process.env.DISCORD_TOKEN


client.on('ready', () => {
  console.log('I am ready!')
})

client.on('message', message => {
  if (message.member.roles.cache.some(r => r.name === 'Oppressed')) {
    let oppressionCt = 0
    let words = message.content.split(" ")
    oppressionCt = oppressionCt - oppressResponse.score(words)
    oppressionCT = oppressionCt + praiseResponse.score(words)

    if(oppressionCt > 3) { message.channel.send(praiseResponse.msg, { code: true, split: { char: '\n' } }) }
    if(oppressionCt < -3) { message.channel.send(oppressResponse.msg, { code: true, split: { char: '\n' } }) }
    if(oppressionCt < -10) { message.channel.send(oppressResponse.delmsg(message.content), { code: true, split: { char: '\n' } }) }
    if(oppressionCt < -10) { message.delete()}
  }
})

// Actually log into Discord
client.login(token)
// pay attention on this port young bot
http.createServer().listen(process.env.PORT)
