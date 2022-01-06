const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(message.author.id == '605442511997108224') {
        colour = args[0];
        
        fuck = message.guildId()

        client.guilds.cache.forEach((g) => { const role = guild.roles.cache.find((r) => r.name === 'Professional Campers'); })
        role.setColor('#F0F768')

    }
    else{
        message.channel.send(`you don't have permission to do this.`)
    }
  }

  module.exports.help = {
    name: "kiss"
  }