const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    var suggestion = message.content.replace("!suggest", " ");
    const embedmsg = new Discord.MessageEmbed()
        .setTitle(message.author.username + "'s Suggestion")
        .setAuthor(message.author.username, message.author.displayAvatarURL(), '')
        .setColor('#42a1f5')
        .setFooter("Suggestion")
        .setTimestamp()
        .addField("Username",message.author.username,true)
        .addField("ID",message.author.id,true)
        .addField("User","<@"+message.author.id+">",true)
        .addField("Suggestion",suggestion,true)
    bot.guilds.cache.get("713533647252357180").channels.cache.get("714127120540106772").send(embedmsg)
    message.channel.send("Suggestion sent to the developers!")
}
exports.configure = {
command: "suggest"
}