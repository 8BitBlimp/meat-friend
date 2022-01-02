const Meme = require('memer-api');
const memer = new Meme('8gzAiAfiDsh');
const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports.run = async (bot, message, args) => {
    const user = message.mentions.users.first();
    try{
        pain = `https://memer-api.live/api/v4/failure?token=8gzAiAfiDsh&avatars=` + user.displayAvatarURL()
        console.log(pain);
        fetch(pain)
        .then(res => res.buffer())
        .then(data => console.log(data))
        .catch(e => console.error(e));
    }
    catch(error) {
        fetch(`https://memer-api.live/api/v4/failure?token=8gzAiAfiDsh&avatars=` + message.author.displayAvatarURL())
        .then(res => res.bffer())
        .then(data => message.channel.send(data))
    }
    
}

  module.exports.help = {
    name: "failure"
  }