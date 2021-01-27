const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '%';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
client.once('ready', () => {
    console.log('Draxbot is online!');
    client.user.setPresence({ activity: { name: "%bantuan" }, status: "online"})
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'youtube'){
        client.commands.get('youtube').execute(message, args);
    }else if (command == 'bantuan'){
        client.commands.get('bantuan').execute(message, args);
    } else if (command == 'danang'){
        client.commands.get('danang').execute(message, args);
    } else if (command == 'tofel'){
        client.commands.get('tofel').execute(message, args);
    } else if (command == 'fanto'){
        client.commands.get('fanto').execute(message, args);
    } else if (command == 'danangrakitpc'){
        client.commands.get('danangrakitpc').execute(message, args);
    } else if (command == 'panggilanku'){
        client.commands.get('panggilanku').execute(message, args);
    } else if (command == 'bangjago'){
        client.commands.get('bangjago').execute(message, args);
    }  else if (command == 'sasageyo'){
        client.commands.get('sasageyo').execute(message, args);
    } else if (command === 'mainkan') {
        client.commands.get('mainkan').execute(message, args);
    } else if (command === 'pergi') {
        client.commands.get('pergi').execute(message, args);
    }
});

  bot.login(process.env.token);