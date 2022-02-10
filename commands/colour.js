const Discord = require('discord.js');
const config = require('./utility-config.json')

module.exports.run = async (bot, message, args) => {
  if(message.member.hasPermission('ADMINISTRATOR')) {
        colour = arguments[1];
        
        let role = message.guild.roles.cache.find(r => r.id === arguments[0]);
        role.setColor(colour);

    }
    else{
        message.channel.send(`you don't have permission to do this.`)
    }
  }

  module.exports.help = {
    name: "colour"
  }