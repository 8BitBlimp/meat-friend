const Discord = require('discord.js');
const client = require('nekos.life');
const neko = new client();


module.exports.run = async (bot, message, args) => {
    message.channel.send(neko.sfw.pat())
  }

  module.exports.help = {
    name: "nekoPat"
  }