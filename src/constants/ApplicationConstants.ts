import * as dotenv from 'dotenv';
import {elseThrow} from '../utils/TsUtil';
dotenv.config();

// attempts to capture the discord token from the environment variable and return it or and error if it doesnt exist
export const discordBotToken =
  process.env.DISCORD_BOT_TOKEN ?? elseThrow(`Undefined DISCORD_BOT_TOKEN`);
