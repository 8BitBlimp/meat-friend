const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  if(args == 'fun'){
    let embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('Fun')
      .addField(`SFW:`, `baka
      pat
      poke
      slap
      smug
      tickle`)
      .addField(`NSFW:`, `none yet`)
  }
  else if(args == 'introduction') {
    let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Commands')
        .addField(`Introduction Commands:`, `Adrienne
        Amber
        Emma
        Magnus
        Michael
        Molly
        Nicolas
        Rebecca 
        Teo 
        Valerie`)
        message.channel.send(embed);
  }
  else{
    let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Commands')
        .addField(`Introduction Commands:`, `Adrienne
        Amber
        Emma
        Magnus
        Michael
        Molly
        Nicolas
        Rebecca 
        Teo 
        Valerie`)
        .addField('Mod Commands:', `Ban 
        Kick`)
        .addField('Misc commands:', `Avatar
        Help
        Kiss
        Kissultra
        Ping
        Report`)

    message.channel.send(embed);
  }
}
    

  module.exports.help = {
    name: "help"
  }
