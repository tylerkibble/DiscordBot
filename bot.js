const Discord = require("discord.js");
const client = new Discord.Client();
const config = require(".config.json");
const prefix = "!";
client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }
});
 
client.login("NTE0MjM5OTU0MDg0Mjk4NzUy.DtcnpA._kQAoFTiTfxefQzXuaxsBPAdG8o");

