const Discord = require('discord.js');
const config = require('./utility-config.json')

module.exports.run = async (bot, message, args) => {


  //read nickname of user
  //check if args contains a mention
  let user = message.mentions.users.first();
  
  if(!user) {
    user = message.author;
  }
  let dumb = user.username
  let person = message.guild.members.cache.get(user.id).nickname;

  if(person === null) {
    message.channel.send(`${dumb} doesn't have a nickname.`);
  } else{
    message.channel.send(`${dumb}'s nickname is ${person}`);
  }


  
}

  module.exports.help = {
    name: "nickname"
  }