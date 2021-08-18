const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const user = message.mentions.users.first();

    
    try {
        message.channel.send(user.displayAvatarURL());
    } catch (error) {
        message.channel.send(message.author.displayAvatarURL());
    }
  }


  module.exports.help = {
    name: "avatar"
  }