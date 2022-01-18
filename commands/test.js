const Discord = require('discord.js');
const utility = require('./utility-config.json');

module.exports.run = async (bot, message, args) => {
    if(utility.roleID.includes(message.author.id())) {
        message.channel.send('Test succeeded!')
        
    }
    else {
        console.error();
    }
  }

  module.exports.help = {
    name: "test"
}