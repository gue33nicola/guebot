const commando =require('discord.js-commando');
const discord = require('discord.js');

class InfoAboutMeCommand extends commando.Command 
{
    constructor(client)
    {
        super(client,{
            name: 'info',
            group: 'simple',
            memberName: 'info',
            description:'Leggi di più su di me!'
        });
    }
    

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
            .setDescription('Ciao sfigato, il mio nome è Què!')
            .setColor('#8a2be2')
            .setFooter("Mi scopo tua madre, tua sorella e se non fai il bravo pure te!")
            
            
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = InfoAboutMeCommand;