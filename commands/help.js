const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let section = args.slice(0).join(' ');

  if(section == 'fun'){
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
      message.channel.send(embed);
  }
  else if(section == 'introduction') {
    let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Introduction')
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
  else if(section == 'mod') {
    let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Mod')
        .addField(`Mod Commands:`, `Ban
        Kick`)
        message.channel.send(embed);
  }
  else if(section == 'misc') {
    let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Misc')
        .addField(`Misc Commands:`, `Avatar
        Help
        Kissultra
        Ping
        Report`)
        message.channel.send(embed);
  }
  else{
    let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Categories')
        .addField(`Fun:`, `Interaction commands.`)
        .addField(`Introduction:`, `A list of all introduction commands.`)
        .addField(`Mod:`, 'A list of all the commands a mod has access to.')
        .addField(`Misc:`, `A list of random/unsorted commands everyone can use.`)
        .setFooter('Use ".help {category}" to get more info.')

    message.channel.send(embed);
  }
}
    

  module.exports.help = {
    name: "help"
  }
