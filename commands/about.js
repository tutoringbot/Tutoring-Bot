const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    var randomColor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    //console.log(randomColor)
    const embedmsg = new Discord.MessageEmbed()
        .setColor(randomColor)
        .setTitle('Tutoring Bot')
        .setURL('https://tutoringbot.github.io/')
        .setAuthor(message.author.username, message.author.displayAvatarURL(), 'https://tutoringbot.github.io/')
        .setDescription('Tutoring Bot is an open source discord bot developed to enhance the learning environment using the Wolfram Alpha API. Using the information Wolfram Alpha has, the possibilities with the questions you can ask this bot are basically infinite. Check out how to use the bot with the help command!')
        .setThumbnail('https://cdn.discordapp.com/attachments/713831448427364364/713917021531930694/b34c550ac62c82b3d4ef65519621751d.png')
        .addField('Developed by', '<@327427652254302209>', true)
        .addField('\u200b','<@459754759465861121>',true)
        .addField('\u200b','<@713054876460122223>',true)
        .setTimestamp()
        .setFooter('tutoringbot.github.io', 'https://cdn.discordapp.com/attachments/713831448427364364/713917021531930694/b34c550ac62c82b3d4ef65519621751d.png');
    message.channel.send(embedmsg);
}
exports.configure = {
    command: "about"
}