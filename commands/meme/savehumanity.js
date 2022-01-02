const Meme = require('memer-api');
const memer = new Meme('8gzAiAfiDsh');
const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports.run = async (bot, message, args) => {
    let section = args.slice(0).join(' ');
    try{
        memer.savehumanity(section).then(image => {
            var attachment = new Discord.MessageAttachment(image, "savehumanity.png");
            message.channel.send(attachment)
        })
    }
    catch(error) {
        message.channel.send('Input text after command.')
        
    }
}

  module.exports.help = {
    name: "savehumanity"
  }