const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDE0OTc4MDQwODc2MjM2ODAw.DWvN-w.Ntr09qDPzojWi7EwtRpHb-2WW7U';


client.on('ready', () => {
console.log('Sqaaakoi Kitten Bot Running');
});

client.on("ready", () => {
console.log(`Kitten's computer is now on, connected to ${client.users.size} creatures and ${client.guilds.size} memes.`);
client.user.setActivity(`with a computer!`, { type: `PLAYING` });
client.user.setStatus(`online`);
});


client.on("message", async message => {

  if(message.author.bot) return;

  if(message.content.startsWith("<@414978040876236800>")) {
      if(message.content.length <= 22) {
  message.channel.send({embed: {
          "color": 1146986,
          "fields": [{
              "name": `Commands`,
              "value": `Send Message: <@${client.user.id}> <message> \nInvite Bot: invite-<@${client.user.id}>`,
       },
          ],
          "footer": {
           "icon_url": client.user.avatarURL,
           "text": `Meow!`
               }
             }
           });
  }}

  if(message.content.startsWith("<@!414978040876236800>")) {
    if(message.content.length <= 23) {
message.channel.send({embed: {
        "color": 1146986,
        "fields": [{
            "name": `Commands`,
            "value": `Send Message: <@${client.user.id}> <message> \nInvite Bot: invite-<@${client.user.id}>`,
     },
        ],
        "footer": {
         "icon_url": client.user.avatarURL,
         "text": `Meow!`
             }
           }
         });
  }}


if(message.content.startsWith("<@414978040876236800>")) {
    if(message.content.length >= 23) {
const args = message.content.slice(`21`).trim().split(/ +/g);
let saysend = args.join(" ");
message.delete().catch();
message.channel.send(saysend);
}}

if(message.content.startsWith("<@!414978040876236800>")) {
  if(message.content.length >= 24) {
const args = message.content.slice(`22`).trim().split(/ +/g);
let saysend = args.join(" ");
message.delete().catch();
message.channel.send(saysend);
}}

if(message.content.startsWith("invite-<@414978040876236800>")) {
      if(message.channel.type !== `dm`) {
          message.channel.send(`:mailbox_with_mail: Invite link sent to DM!`)
        }
  message.author.send({embed: {
          "color": 2067276,
          "fields": [{
              "name": `Invite me!`,
              "value": `[Click here to invite me to your server!](https://discordapp.com/oauth2/authorize?client_id=414978040876236800&permissions=93192&scope=bot)`,
       },
          ],
          "footer": {
           "icon_url": client.user.avatarURL,
           "text": `Meow!`
               }
             }
           });
console.log('Invite');
 }

if(message.content.startsWith("invite-<@!414978040876236800>")) {
  if(message.channel.type !== `dm`) {
      message.channel.send(`:mailbox_with_mail: Invite link sent to DM!`)
    }
 message.author.send({embed: {
         "color": 2067276,
         "fields": [{
             "name": `Invite me!`,
             "value": `[Click here to invite me to your server!](https://discordapp.com/oauth2/authorize?client_id=414978040876236800&permissions=93192&scope=bot)`,
      },
         ],
         "footer": {
          "icon_url": client.user.avatarURL,
          "text": `Meow!`
              }
            }
          });
console.log('Invite');
 }

})

client.login(token);
