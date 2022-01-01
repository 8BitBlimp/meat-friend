const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.channel.send(neko.sfw.pat())
  }

  module.exports.help = {
    name: "nekoPat"
  }