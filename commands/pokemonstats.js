const WolframAlphaAPI = require('wolfram-alpha-api');
const waApi = WolframAlphaAPI('')

module.exports.run = async (bot, message, args) => {
    var userinput = message.content.replace("!pokemonstats "," ")
    waApi.getFull({
        input: userinput,
        includepodid: 'Statistics:PokemonData',
        format: 'plaintext',
      }).then((queryresult) => {
        //console.log(queryresult.pods[0].subpods[0].plaintext)
        message.channel.send(queryresult.pods[0].subpods[0].plaintext)
      }).catch(console.error)
	
}
exports.configure = {
  command: "pokemonstats"
}