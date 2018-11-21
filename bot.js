const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("I am ready!");
});
 
client.on("message", (message) => {
  if (message.content.startsWith("ip")) {
    message.channel.send("Hey there! The Factions Server IP is IP:SnowsFactions.mcpro.io");
  }
});
});
 
client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("Pong!");
  }
});
 
client.login("NTE0MjM5OTU0MDg0Mjk4NzUy.DtZH0Q.row6NYRgH4TtzjtlgUtzYVzZ-nY");
