import {Client, GatewayIntentBits, Partials, version} from 'discord.js';
import {ReactionRole} from 'discordjs-reaction-role';
import {discordBotToken} from './constants/ApplicationConstants';
import configurations from './constants/Roles';

// Create a client with the intents and partials required.
const client = new Client({
  partials: [Partials.Message, Partials.Reaction],
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
  ],
});

const manager = new ReactionRole(client, configurations);

// Start the bot.
client.on('ready', () => {
  console.log('Bot is online! Example: typescript. DJS version:', version);
});
client.login(discordBotToken);

// Stop the bot when the process is closed (via Ctrl-C).
const destroy = () => {
  manager.teardown();
  client.destroy();
};
process.on('SIGINT', destroy);
process.on('SIGTERM', destroy);
