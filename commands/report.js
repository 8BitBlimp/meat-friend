const discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {

    let target = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    let reason = args.slice(1).join(' ');
    let reports = message.guild.channels.cache.find(c => c.name === config.reportsChannel);

    if (!target) return message.reply('Please specify which member you want to report.');
    if (!reason) return message.reply('Please specify a reason.');
    if (!reports) return message.reply(`Please create a reports channel with the name \'${config.reportsChannel}\'.`);

    let embed = new discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail(target.user.avatarURL)
        .addField('Reported member:', `${target.user.username} with the ID: ${target.user.id}`)
        .addField('Member reporting:', `${message.author.username} with the ID: ${message.author.id}`)
        .addField('Time reported:', message.createdAt)
        .addField('Reported In:', message.channel)
        .addField('Reported for:', reason)
        .setFooter('Reported user information:', target.user.displayAvatarURL);
    
    reports.send(embed);
    const user = message.mentions.users.first();
    message.reply(`Successfully reported ${user.tag}`);
};

    module.exports.help = {
    name: 'report'
};