const Discord = require('discord.js');
const config = require('./utility-config.json')

module.exports.run = async (bot, message, args) => {
  if(message.member.hasPermission('ADMINISTRATOR')) {
        colour = args[0];
        
        let role = message.guild.roles.cache.find(r => r.id === message.mentions.roles.first());
        role.setColor(args[0]);

    }
    else{
        message.channel.send(`you don't have permission to do this.`)
    }
  }

  module.exports.help = {
    name: "colour"
  }