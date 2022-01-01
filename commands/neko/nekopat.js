const Discord = require('discord.js');
const client = require('nekos.life');
const neko = new client();


module.exports.run = async (bot, message, args) => {
    neko.sfw.pat().then(pat => {console.log(pat);});
  }

  module.exports.help = {
    name: "nekopat"
  }