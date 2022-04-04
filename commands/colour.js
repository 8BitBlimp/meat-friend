const Discord = require('discord.js');
const config = require('./utility-config.json')

module.exports.run = async (bot, message, args) => {
  if(config.owners.includes(message.author.id)) {

    //check if args is undefined
    if(!args[0]) {
        message.channel.send(`Please use format roleID;hexcode`)
    } 
    else {
        if(args[0].includes(';')) {
            let code = args[0]
            let colour = code.split(";")[1]
            let id = code.split(";")[0]
            
                
            let role = message.guild.roles.cache.find(r => r.id === id);
            role.setColor(colour);
        }
        else{
            message.channel.send(`Please use format roleID;hexcode`)
        }
    }
  } 
  else{
    message.channel.send(`you don't have permission to do this.`)
  }
}

  module.exports.help = {
    name: "colour"
  }