const YouTube = require('discord-youtube-api');
const youtube = new YouTube('AIzaSyCkgDEC33msaxWI1uyXiQZHiLM8cyYr3bU');
const Discord = require('discord.js');
const client = require('nekos.life');
const neko = new client();


module.exports.run = async (bot, message, args) => {
    let section = args.slice(0).join(' ');
    let video = await youtube
    
  }

  module.exports.help = {
    name: "play"
  }