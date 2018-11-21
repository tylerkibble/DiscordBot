const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";
client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
 
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "IP")) {
    message.channel.send("IP: SnowsFactions.mcpro.io Enjoy!");
  }
});
 
client.login("NTE0MjM5OTU0MDg0Mjk4NzUy.DtcnpA._kQAoFTiTfxefQzXuaxsBPAdG8o");
