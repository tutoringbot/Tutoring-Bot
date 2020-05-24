module.exports.run = async (bot, message, args) => {
    message.channel.send("Use this link to add the bot to your disord server!\nhttps://discord.com/api/oauth2/authorize?client_id=713815087449767997&permissions=67648&scope=bot")
}
exports.configure = {
    command: "invite"
}