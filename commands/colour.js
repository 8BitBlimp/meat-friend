const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(message.author.id == '605442511997108224') {
        colour = args[0];
        
        let role = message.guild.roles.cache.find(r => r.id === "827907813699092511");
        role.setColor(args[0]);

    }
    else{
        message.channel.send(`you don't have permission to do this.`)
    }
  }

  module.exports.help = {
    name: "colour"
  }