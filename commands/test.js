const Discord = require('discord.js');
const config = require('./utility-config.json')

module.exports.run = async (bot, message, args) => {


  //read nickname of user
  //check if args contains a mention
  let user = message.mentions.users.first();

  if(!user) {
    user = message.author;
  }
  let nickname = message.guild.members.cache.get(user).nickname;

  console.log(nickname);


  
}

  module.exports.help = {
    name: "test"
  }