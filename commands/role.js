const Discord = require('discord.js');
const config = require('./utility-config.json')

module.exports.run = async (bot, message, args) => {
  if(config.owners.includes(message.author.id)) {

    //check if args is undefined
    if(!args[0]) {
        message.channel.send(`Please use format roleID;userID`)
    } 
    else {
        if(args[0].includes(';')) {
            let code = args[0]
            let userID = code.split(";")[1]
            let roleID = code.split(";")[0]
            
                
            let role = message.guild.roles.cache.find(r => r.id === roleID);
            let user = message.guild.members.cache.find(u => u.id === userID);
            user.roles.add(role);
        }
        else{
            message.channel.send(`Please use format roleID;userID`)
        }
    }
  } 
  else{
    message.channel.send(`you don't have permission to do this.`)
  }
}

  module.exports.help = {
    name: "role"
  }