const WolframAlphaAPI = require('wolfram-alpha-api');
const waApi = WolframAlphaAPI('')
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var userinput = message.content.replace("!calculate "," ")
    waApi.getFull({
        input: userinput,
      }).then((queryresult) => {
        var data = queryresult;  
        var textinput = userinput.split(' ').join('+');
        var waurl = "https://www.wolframalpha.com/input/?i=" + textinput
        //console.log(data)
        var numberofpods = queryresult.numpods;
        //console.log(numberofpods)
        var answer2 = [];
        /*for (var i = 0; i <= numberofpods; ++i) {
            answer2[i] = queryresult.pods[i].subpods[0].plaintext
            image2[i] = queryresult.pods[i].subpods[0].img.src
        }*/
        //console.log(answer2)
        try{
            answer = queryresult.pods[0].subpods[0].plaintext
            image = queryresult.pods[1].subpods[0].img.src
        }
        catch(error){
            message.channel.send("Hmmmm... I wasn't able to understand your input. Please try again!")
            return
        }
        //console.log(answer)
        //console.log(image)
        const embedmsg = new Discord.MessageEmbed()
            .setColor('#42a1f5')
            .setTitle('Results for' + userinput)
            .setURL(waurl)
            .setAuthor(message.author.username, message.author.displayAvatarURL(), 'https://tutoringbot.github.io/')
            //.setDescription(answer)
            .setThumbnail('https://cdn.discordapp.com/attachments/713831448427364364/713917021531930694/b34c550ac62c82b3d4ef65519621751d.png')
            .setImage(image)
            .setTimestamp()
            .setFooter('Wolfram Alpha', 'https://www.symbols.com/images/symbol/2886_wolfram-alpha-logo.png');    
            for (var i = 0; i <= numberofpods-1; i++) {
                if(typeof queryresult.pods[i].subpods[0].value === undefined || queryresult.pods[i].subpods[0].plaintext.length == 0 || queryresult.pods[i].subpods[0].plaintext.length > 256){
                    break
                }else{
                    answer2.push(queryresult.pods[i].subpods[0].plaintext)
                    //console.log(answer2)
                    try{
                        embedmsg.addField('\u200b', answer2[i], false)
                    }
                    catch(error){
                        message.channel.send("Hmmmm... I wasn't able to understand your input. Please try again!")
                        break
                    }
                }
            }
        
        message.channel.send(embedmsg);
      }).catch(console.error)
}
exports.configure = {
    command: "calculate"
}