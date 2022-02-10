const Discord = require('discord.js');
const config = require('./utility-config.json')

module.exports.run = async (bot, message, args) => {
  if(message.member.hasPermission('ADMINISTRATOR')) {
        colour = args[2];
        
        let role = message.guild.roles.cache.find(r => r.id === args[1]);
        role.setColor(colour);

    }
    else{
        message.channel.send(`you don't have permission to do this.`)
    }
  }

  module.exports.help = {
    name: "colour"
  }