const Discord = require('discord.js');
const prettyMilliseconds = require('pretty-ms');
const config = require('./utility-config.json')

module.exports.run = async (bot, message, args) => {
    //send uptime to channel
    // message.channel.send(`Uptime: ${prettyMilliseconds(bot.uptime)}`);
    message.channel.send(prettyMilliseconds(bot.uptime));
}

  module.exports.help = {
    name: "uptime"
  }