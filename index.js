const { ZiMusicBot } = require("@ziplayer/express");
const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

// chống crash
process.on("uncaughtException", console.error);
process.on("unhandledRejection", console.error);

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
    ],
});

// READY
client.once("ready", () => {
    console.log(`✅ Bot online: ${client.user.tag}`);
    console.log("🚀 BOT ONLINE RAILWAY");
});

// log lỗi
client.on("error", console.error);
client.on("warn", console.warn);

// init bot nhạc
const ZMusic = new ZiMusicBot(client, {
    prefix: "!",
});

// login
client.login(process.env.TOKEN);