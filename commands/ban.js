const Discord = require('discord.js');
const fs = require("fs");



module.exports.run = async (bot, message, args) => {
    const user = message.mentions.users.first();
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('You do not not have the permissions to do that!');
    if (user) {
        const member = message.guild.member(user);
        if (member) {
            member
              .ban(`action performed by ${message.author.tag}`)
              .then(() => {
                message.reply(`Successfully banned ${user.tag}`);
              })
              .catch(err => {
                message.reply('I was unable to ban the member');
                console.error(err);
              });
          } else {
            message.reply("That user isn't in this guild!");
          }
        } else {
          message.reply("You didn't mention the user to ban!");
        }
    }

  module.exports.help = {
    name: "ban"
  }