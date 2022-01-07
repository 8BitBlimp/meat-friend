const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(message.author.id == '605442511997108224') {
        
        let role = message.guild.roles.cache.find(r => r.id === args[0]);
        role.setColor(args[1]);

    }
    else{
        message.channel.send(`you don't have permission to do this.`)
    }
  }

  module.exports.help = {
    name: "colour"
  }