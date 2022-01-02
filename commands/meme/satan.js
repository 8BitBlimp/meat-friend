const Meme = require('memer-api');
const memer = new Meme('8gzAiAfiDsh');
const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports.run = async (bot, message, args) => {
    const user = message.mentions.users.first();
    try{
        memer.satan(user.displayAvatarURL()).then(image => {
            var attachment = new Discord.MessageAttachment(image, "satan.png");
            message.channel.send(attachment)
        })
    }
    catch(error) {
        memer.satan(message.author.displayAvatarURL()).then(image => {
            var attachment = new Discord.MessageAttachment(image, "satan.png");
            message.channel.send(attachment)
        })
    }
}

  module.exports.help = {
    name: "satan"
  }