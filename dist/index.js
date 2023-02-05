"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const discordjs_reaction_role_1 = require("discordjs-reaction-role");
const ApplicationConstants_1 = require("./constants/ApplicationConstants");
const Roles_1 = __importDefault(require("./constants/Roles"));
// Create a client with the intents and partials required.
const client = new discord_js_1.Client({
    partials: [discord_js_1.Partials.Message, discord_js_1.Partials.Reaction],
    intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMessages,
        discord_js_1.GatewayIntentBits.GuildMessageReactions,
    ],
});
const manager = new discordjs_reaction_role_1.ReactionRole(client, Roles_1.default);
// Start the bot.
client.on('ready', () => {
    console.log('Bot is online! Example: typescript. DJS version:', discord_js_1.version);
});
client.login(ApplicationConstants_1.discordBotToken);
// Stop the bot when the process is closed (via Ctrl-C).
const destroy = () => {
    manager.teardown();
    client.destroy();
};
process.on('SIGINT', destroy);
process.on('SIGTERM', destroy);
