import {Client, GatewayIntentBits, Partials, version} from 'discord.js';
import {ReactionRole} from 'discordjs-reaction-role';
import {discordBotToken} from './constants/ApplicationConstants';
import configurations from './constants/Roles';

/* Creating a new client with the intents and partials required. */
const client = new Client({
  partials: [Partials.Message, Partials.Reaction],
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
  ],
});

/* Creating a new instance of the ReactionRole class. */
const manager = new ReactionRole(client, configurations);

/* Logging the bot into discord. */
client.on('ready', () => {
  console.log('Bot is online! Example: typescript. DJS version:', version);
});
client.login(discordBotToken);

/**
 * It destroys the manager and client
 */
const destroy = () => {
  manager.teardown();
  client.destroy();
};
process.on('SIGINT', destroy);
process.on('SIGTERM', destroy);
