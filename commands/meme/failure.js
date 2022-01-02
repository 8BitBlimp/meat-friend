const Meme = require('memer-api');
const memer = new Meme('8gzAiAfiDsh');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const user = message.mentions.users.first();
    try {
        let failure = memer.failure(user.displayAvatarURL())
        let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`${message.author.tag} here's your failure meme!`)
        .setImage(failure.url)
        message.channel.send(embed);
    }
    catch (error) {
        let failure = memer.failure(message.author.displayAvatarURL())
        let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`${message.author.tag} here's your failure meme!`)
        .setImage(failure.url)
        message.channel.send(embed);
        console.log(failure)
    }
  }

  module.exports.help = {
    name: "failure"
  }