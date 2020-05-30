const Discord = require('discord.js');
const bot = new Discord.Client();
const conf = require('./config.json');

bot.on('ready', () => {
	    console.log("Time to tell him he's wrong");
});

bot.on('message', msg => {
	    if (msg.author.id === '380524075518394380')  {
		msg.reply(" you're wrong and gay.");
		        }
	
});

bot.login(conf.token);
