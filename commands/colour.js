const Discord = require('discord.js');
const config = require('./utility-config.json')

module.exports.run = async (bot, message, args) => {
  if(message.author.id == '605442511997108224') {
    colour = args[0]
    haha = args[1]
        
    let role = message.guild.roles.cache.find(r => r.id === "941456234182225951");
    role.setColor(args[0]);

    }
  else{
    message.channel.send(`you don't have permission to do this.`)
  }
}

  module.exports.help = {
    name: "colour"
  }