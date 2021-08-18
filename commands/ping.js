const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    //this is where the actual code for the command goes
    await message.delete()
    return message.reply("Pong!").then(m => m.delete(10000))
  }

  module.exports.help = {
    name: "ping"
  }