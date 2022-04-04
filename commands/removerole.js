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

            if(roleID == 'all') {
                //find all a users roles
                let user = message.guild.members.cache.find(u => u.id === userID);
                let roles = user.roles.cache.array();
                //remove all roles
                for(let i = 0; i < roles.length; i++) {
                    user.roles.remove(roles[i]);
                }
            }
            
                
            let role = message.guild.roles.cache.find(r => r.id === roleID);
            let user = message.guild.members.cache.find(u => u.id === userID);
            //remove role from user
            user.roles.remove(role);
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
    name: "removerole"
  }