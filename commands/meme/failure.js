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
        Promise
            .then(message.channel.send(embed))
            .catch(message.channel.send('Meme failed.'))
    }
    catch (error) {
        let failure = memer.failure(message.author.displayAvatarURL())
        let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`${message.author.tag} here's your failure meme!`)
        .setImage(failure.url)
        Promise
            .then(message.channel.send(embed))
            .catch(error => { message.channel.send('Meme failed.') });
    }
  }

  module.exports.help = {
    name: "failure"
  }