module.exports.run = async (bot, message, args) => {
	message.channel.send("Loading ping...").then(sentMessage => sentMessage.edit(new Date().getTime() - message.createdTimestamp + " ms"));
}
exports.configure = {
command: "ping"
}