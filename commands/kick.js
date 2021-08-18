const Discord = require('discord.js');
const fs = require("fs");



module.exports.run = async (bot, message, args) => {
    const user = message.mentions.users.first();
    const member = message.guild.member(user);

    //if (message.mentions.users.first(bot)) {
        //message.author
            //.kick(`being a dumbass`)
    //}
    if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('You do not not have the permissions to do that!');
    if (user) {
        const member = message.guild.member(user);
        if (member) {
            member
              .kick(`action performed by ${message.author.tag}`)
              .then(() => {
                message.reply(`Successfully kicked ${user.tag}`);
              })
              .catch(err => {
                // An error happened
                // This is generally due to the bot not being able to kick the member,
                // either due to missing permissions or role hierarchy
                message.reply('I was unable to kick the member');
                // Log the error
                console.error(err);
              });
          } else {
            // The mentioned user isn't in this guild
            message.reply("That user isn't in this guild!");
          }
          // Otherwise, if no user was mentioned
        } else {
          message.reply("You didn't mention the user to kick!");
        }
    }

  module.exports.help = {
    name: "kick"
  }