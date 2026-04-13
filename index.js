const { ZiMusicBot } = require("@ziplayer/express");
const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

// chống crash toàn cục
process.on("uncaughtException", (err) => {
    console.error("❌ Uncaught Exception:", err);
});

process.on("unhandledRejection", (reason, promise) => {
    console.error("❌ Unhandled Rejection:", reason);
});

//discord client
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
    ],
});

// log trạng thái bot
client.once("ready", () => {
    console.log(`✅ Bot online: ${client.user.tag}`);
});

// log lỗi discord
client.on("error", (err) => {
    console.error("❌ Discord error:", err);
});

client.on("warn", (warn) => {
    console.warn("⚠️ Discord warn:", warn);
});

// init bot nhạc
const ZMusic = new ZiMusicBot(client, {
    prefix: "!",
});

// login
client.login(process.env.TOKEN);