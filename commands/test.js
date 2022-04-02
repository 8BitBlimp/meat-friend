const Discord = require('discord.js');
const utility = require('./utility-config.json');
// var config = require('./config.json');

module.exports.run = async (bot, message, args) => {


    // check message senders id


    if(utility.owners.includes(message.author.id)) {
        return message.channel.send('poggers');
    }
    else {
        return message.channel.send(`You don't have permission to use this command.`);
    }


  }

  module.exports.help = {
    name: "test"
}