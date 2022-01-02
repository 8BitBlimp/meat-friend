

module.exports.run = async (bot, message, args) => {
    const user = message.mentions.users.first();
    try {
        message.channel.send(memer.failure(user.displayAvatarURL()))
    }
    catch (error) {
        message.channel.send(memer.failure(message.author.displayAvatarURL()))
    }
  }

  module.exports.help = {
    name: "failure"
  }