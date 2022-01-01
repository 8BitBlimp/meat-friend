const Discord = require('discord.js');
const client = require('nekos.life');
const neko = new client();


module.exports.run = async (bot, message, args) => {
    const GIF = await neko.sfw.baka();
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${message.author.tag} here's a random baka image/gif`)
    .setImage(GIF.url)
    message.channel.send(embed);
  }

  module.exports.help = {
    name: "baka"
  }