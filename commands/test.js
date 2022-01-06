const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(message.author.id == '605442511997108224') {
        colour = args[0];
        
        role = Role.name('Professional Campers')
        role.setColor('#F0F768')
        
    }
    else{
        message.channel.send(`you don't have permission to do this.`)
    }
  }

  module.exports.help = {
    name: "kiss"
  }