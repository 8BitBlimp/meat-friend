const Discord = require('discord.js');
const client = require('nekos.life');
const neko = new client();


module.exports.run = async (bot, message, args) => {
    if(message.author.id == '593436987911045140') {

        message.channel.send('https://c.tenor.com/_4YgA77ExHEAAAAC/rick-roll.gif')
        
    }
    else{
        const GIF = await neko.nsfw.anal();
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`${message.author.tag} here's a random anal image/gif`)
        .setImage(GIF.url)
        message.channel.send(embed);
    }
}

  module.exports.help = {
    name: "anal"
  }