const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    var randomColor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    //console.log(randomColor)
    const exampleEmbed = new Discord.MessageEmbed()
        .setColor(randomColor)
        .setTitle('Tutoring Bot Help Menu')
        .setURL('https://tutoringbot.github.io/')
        .setAuthor(message.author.username, message.author.displayAvatarURL(), 'https://tutoringbot.github.io/')
        .setDescription('Check out our [website](https://tutoringbot.github.io/) for use cases! The prefix to use the bot is ! ')
        .setThumbnail('https://cdn.discordapp.com/attachments/713831448427364364/713917021531930694/b34c550ac62c82b3d4ef65519621751d.png')
        .addField('about', 'Gives info describing the bot', true)
        .addField('calculate','Used to calculate almost anything!',true)
        .addField('help','This command right here!',true)
        .addField('invite', 'Gives a URL to invite the bot!', true)
        .addField('ping','Pong :ping_pong:',true)
        .addField('pokemonstats','Just some fun :wink:',true)
        .addField('support','Invite to the support server!',true)
        .setTimestamp()
        .setFooter('tutoringbot.github.io', 'https://cdn.discordapp.com/attachments/713831448427364364/713917021531930694/b34c550ac62c82b3d4ef65519621751d.png');
    message.channel.send(exampleEmbed);
}
exports.configure = {
    command: "help"
}