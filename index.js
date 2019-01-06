const Commando = require('discord.js-commando')
const discord = require('discord.js');
const bot = new Commando.Client();
const TOKEN = 'NTMwNzY4MzAzOTYyOTgwMzcy.DxOh7w.Cj_zMl1MOyhoRwkmDQht4uZaz3s'

bot.registry.registerGroup('simple', 'Informazioni');
bot.registry.registerGroup('music', 'Musica');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');



global.servers = {};


















bot.on("guildMemberAdd", function(member)
{
    member.send("Benvenuto nel server");
    let memberRole = member.guild.roles.find("name", "Verificato");
    member.addRole(memberRole);

});

//CHAT
bot.on('message', function(message){
    if(message.content == 'Ciao')
    {
        message.channel.sendMessage('Ciao'+ message.author + ', sei frocio');
    }
    if(message.content == '!help')
    {
        message.member.send("Ti serve qualcosa ?");
        let memberRole = message.member.guild.roles.find('name', 'Verificato');
        message.member.addRole(memberRole);
    }
});

bot.on('message', function(message){
    if(message.content == 'Cosa stai facendo ?')
    {
        message.channel.sendMessage('Mi sto trombando tua madre');
    }
});


//READY
bot.on('ready', function(){
    console.log("Ready");
})

bot.login(TOKEN);