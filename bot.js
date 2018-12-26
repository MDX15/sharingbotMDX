const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
لو سمحت ممكن تدخل سيرفرى
يا رهيب 
اتمني تستمتع بالسيرفر
                               [ https://discord.gg/WE7PcyB ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})
A7MD.login('NTI3NTc0MTI1MDY2MDU5Nzc3.DwVtWg.qTaC8ct93mWdVxaog0zeciK7RYw');
