const Discord = require('discord.js');
const owners = ['605442511997108224', '368081723344420866'];

module.exports.run = async (bot, message, args) => {
    
  if(owners.includes(message.author.id())) {
    print('Shutting down')
    message.channel.send('Shutting down')
    Discord.Shard.kill(Discord.Shard.id)
  }

  else{
    message.channel.send(`you don't have permission to do this.`)
  }
}

  module.exports.help = {
    name: "shutdown"
}