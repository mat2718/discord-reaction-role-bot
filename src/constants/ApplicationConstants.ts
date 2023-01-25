import * as dotenv from 'dotenv';
import {elseThrow} from '../utils/TsUtil';
dotenv.config();

export const discordBotToken =
  process.env.DISCORD_BOT_TOKEN ?? elseThrow(`Undefined DISCORD_BOT_TOKEN`);
