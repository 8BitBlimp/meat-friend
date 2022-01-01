const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(message.author.id == '605442511997108224') {
        print('Shutting down')
        message.channel.send('Shutting down')
        Discord.Shard.kill(Discord.Shard.id)
    }
    else{
        message.channel.send(`you don't have permission to do this.`)
    }
  }

  module.exports.help = {
    name: "kiss"
  }