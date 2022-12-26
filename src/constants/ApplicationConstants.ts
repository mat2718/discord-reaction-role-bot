import * as dotenv from 'dotenv';
import {elseThrow} from '../utils/TsUtil';
dotenv.config();

export const discordBotToken =
  process.env.DISCORD_BOT_TOKEN ?? elseThrow(`Undefined DISCORD_BOT_TOKEN`);

// Message IDs for the messages that will be used for the reaction roles.
export const genderMessageId =
  process.env.DISCORD_GENDER_MESSAGE_ID ??
  elseThrow(`Undefined DISCORD_GENDER_MESSAGE_ID`);

// export const regionMessageId =
//   process.env.DISCORD_REGION_MESSAGE_ID ??
//   elseThrow(`Undefined DISCORD_REGION_MESSAGE_ID`);

// Role IDs for the roles that will be used for the reaction roles.
export const maleRoleId =
  process.env.DISCORD_GENDER_MALE_ROLE_ID ??
  elseThrow(`Undefined DISCORD_GENDER_MALE_ROLE_ID`);

export const femaleRoleId =
  process.env.DISCORD_GENDER_FEMALE_ROLE_ID ??
  elseThrow(`Undefined DISCORD_GENDER_FEMALE_ROLE_ID`);
