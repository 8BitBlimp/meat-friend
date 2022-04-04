const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let section = args.slice(0).join(' ');

  if(section == 'fun'){
    let embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('Fun')
      .addField(`Interaction commands:`, `Baka
      Cuddle
      Feed
      Foxgirl
      gecg (genetically engineered catgirl)
      Goose
      Holo
      Hug
      Kemonomimi
      Kiss
      Lizard
      Meow
      Neko
      NekoGif
      Pat
      Poke
      Slap
      Smug
      Tickle
      Waifu
      Wallpaper
      Woof`)
      
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
        Kick
        Role
        Removerole
        Colour`)
        message.channel.send(embed);
  }
  else if(section == 'nsfw') {
    let embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('NSFW')
      .addField(`NSFW commands:`, `Anal
      rAvatar
      BJ
      Blowjob
      Boobs
      Classic
      CumArts
      Cumsluts
      Ero
      EroFeet
      EroKemonomimi
      EroKitsune
      EroNeko
      EroYuri
      Feet
      FeetGif
      Femdom
      Futanari
      Gasm
      GirlSolo
      GirlSoloGif
      Hentai
      rHolo
      HoloEro
      rKemonomimi
      Keta
      rKitsune
      Kuni
      Lesbian
      rNeko
      rNekoGif
      Pussy
      PussyArts
      PussyWankGif
      RandomHentaiGif
      Spank
      Tits
      Trap
      Yuri`)
      message.channel.send(embed)
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
  else if(section == 'meme') {
    let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Meme')
        .addField(`Meme Commands:`, `Aborted
        Bongocat
        Communism
        Disability
        Failure
        Hitler
        Laid
        Notstonks
        Satan
        Savehumanity
        Stonks`)
        message.channel.send(embed);
  }
  else{
    let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setImage(message.author.displayAvatarURL())
        .setTitle('Categories')
        .addField(`Fun:`, `Interaction commands.`)
        .addField(`Meme:`, 'A list of all the meme commands.')
        .addField(`Introduction:`, `A list of all introduction commands.`)
        .addField(`Mod:`, 'A list of all the commands a mod has access to.')
        .addField(`Misc:`, `A list of random/unsorted commands everyone can use.`)
        .addField(`NSFW:`, `A list of all NSFW commands (dont' use outside NSFW channel)`)
        .setFooter('Use ".help {category}" to get more info.')

    message.channel.send(embed);
  }
}
    

  module.exports.help = {
    name: "help"
  }
