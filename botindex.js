const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const bot = new Discord.Client();
const fs = require('fs');
const startTime = Date.now();
bot.commands = new Discord.Collection();

function titleCase(str) {
	var splitStr = str.toLowerCase().split(' ');
	return splitStr; 
 };
 
fs.readdir('./commands/', (err, files) => {
	if(err) console.error(err);

	var jsfiles = files.filter(f => f.split('.').pop() === 'js');
	if (jsfiles.length <= 0){
		return console.log('No commands found...')
	} else {
		console.log(jsfiles.length + ' commands found.')
	}

	jsfiles.forEach((f, i) => {
		var cmds = require(`./commands/${f}`);
		console.log(`Command ${f} loading...`)
		bot.commands.set(cmds.configure.command, cmds);
	})
})

bot.on('ready', () => {
	console.log('Ready!\nUse this link to add the bot to your disord server! \nhttps://discord.com/api/oauth2/authorize?client_id=713815087449767997&permissions=67648&scope=bot');
	console.log(`Bot has started with ${bot.users.cache.size} users in ${bot.channels.cache.size} channels on ${bot.guilds.cache.size} servers.`); 
	bot.user.setStatus("online");
	bot.user.setActivity(`!help | ${bot.users.cache.size} Users!`);
	//${bot.guilds.size} Servers |
});

bot.on('message', message => {
	if (!message.content.startsWith(prefix)) return;
	var cont = message.content.slice(prefix.length).split(' ');
	var cscont = titleCase(cont.join(' '));
	var args = cscont.slice(1);
	var sender = message.author;
	var cmd = bot.commands.get(cscont[0])
	if (cmd) cmd.run(bot,message, args);
});

bot.login(token);