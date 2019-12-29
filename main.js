const { Client } = require('discord.js');
const client = new Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "ping") msg.channel.send("Pong!");
  if (msg.content === "everyone") msg.channel.send("@everyone, salut à tous !", { disableEveryone: false });
  if (msg.content === "noteveryone") msg.channel.send("@everyone (noteveryone), salut à tous !");
});

client.login("NjYwOTMxMjQ0ODU0MzQ1NzI5.XgkKXQ.Z5SrdqY0qZwXTn19VCCzg1AO4Is");
