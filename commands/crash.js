const Discord = require('discord.js');
const utility = require('./utility-config.json');
//var config = require('./meat-friend/config.json');

module.exports.run = async (bot, message, args) => {

    if(!utility.owners.includes(message.author.id)) {
        return message.channel.send('You do not have permission to use this command.');
    }
    else {
        // return message, shutting down the bot
        return message.channel.send('Shutting down...').then(() => {
            process.exit(0);
        });
        
    }

}
  module.exports.help = {
    name: "crash"
}