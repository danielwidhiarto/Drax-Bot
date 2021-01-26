module.exports = {
    name: 'ping',
    description: "sends the sender pings",
    execute(message, args){
        message.channel.send(`🏓Pong! Your latency is ${Date.now() - message.createdTimestamp}ms.`);
        }
    }