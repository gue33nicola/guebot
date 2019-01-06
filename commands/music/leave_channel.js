const commando = require('discord.js-commando');

class LeaveChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'via',
            group: 'music',
            memberName: 'via',
            description: 'Va via dal tuo canale'
        });  
    }
    async run(message, args)
    {
        if(message.guild.voiceConnection)
        {
          message.guild.voiceConnection.disconnect();
        }
        else
        {
           message.reply("Vado a scoparmi tua madre!");
        }
    }
}
module.exports = LeaveChannelCommand;