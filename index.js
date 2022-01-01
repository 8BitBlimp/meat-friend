const Discord = require('discord.js');
const config = require('./config.json');
const client = require('nekos.life');
const bot = new Discord.Client();
const neko = new client();
const fs = require("fs");
bot.commands = new Discord.Collection();





const prefix = "!";


fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

jsfile.forEach((f, i) =>{
  let props = require(`./commands/${f}`);
  console.log(`${f} loaded!`);
  bot.commands.set(props.help.name, props);
});

});

fs.readdir("./commands/neko/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find neko commands.");
    return;
  }

jsfile.forEach((f, i) =>{
  let props = require(`./commands/neko/${f}`);
  console.log(`${f} loaded!`);
  bot.commands.set(props.help.name, props);
});

});

/* fs.readdir("./commands/introductions/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

jsfile.forEach((f, i) =>{
  let props = require(`./commands/introductions/${f}`);
  console.log(`${f} loaded!`);
  bot.commands.set(props.help.name, props);
});

}); */


bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
  bot.user.setActivity(`.help | Welcome to Friend Camp! Make sure to make some friends...`, {type: "PLAYING"});

});



bot.on("message", async message => {
  //a little bit of data parsing/general checks
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  let content = message.content.split(" ");
  let command = content[0];
  let args = content.slice(1);
  let prefix = config.prefix;


  //checks if message contains a command and runs it
  let commandfile = bot.commands.get(command.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
})


bot.login('NzU1MzY2ODU0OTY0MjgxMzU0.X2CQNA.dRNVWmdleyY51ynasa8U0TdwHiY')
//bot.login(process.env.FriendTOKEN);

