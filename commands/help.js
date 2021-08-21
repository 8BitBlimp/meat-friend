const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Commands')
        .addField('Introduction Commands:', 'Adrienne', 'Amber', 'Emma', 'Magnus', 'Michael', 'Molly', 'Nicolas', 'Rebecca', 'Teo', 'Valerie')
        .addField('Mod Commands:', 'Ban', 'Kick')
        .addField('Misc commands:', 'Avatar', 'Help', 'Kiss', 'Kissultra', 'Ping', 'Report');
        
    message.channel.send(embed);
  }

  module.exports.help = {
    name: "help"
  }
