const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const amount = args[0]
    
    if(!amount || isNaN(amount)) return message.reply(`${amount} isn't a valid number!`)

    const amountParsed = parseInt(amount);
    if(amountParsed > 100) return message.reply(`You can't clear more than 100 messages!`)

    message.channel.bulkDelete(amountParsed);

    const msg = await message.channel.send(`Cleared ${amount}!`)

    setTimeout(() => msg.delete(), 5000);
}


  module.exports.help = {
    name: "clear"
  }