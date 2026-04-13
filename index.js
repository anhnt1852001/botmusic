// import { ZiMusicBot } from "@ziplayer/express";
// import { Client, GatewayIntentBits } from "discord.js";

const {ZiMusicBot} = require("@ziplayer/express");
const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

//discordjs Client
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildVoiceStates,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMessages,
	],
});

const ZMusic = new ZiMusicBot(client, {
	prefix: "!",
});


client.login(process.env.TOKEN);