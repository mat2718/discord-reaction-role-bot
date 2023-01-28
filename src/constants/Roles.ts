import {ReactionRoleConfiguration} from 'discordjs-reaction-role';

const genderMessageId = '1068947528457916446';
const maleRoleId = '1038872911324397710';
const femaleRoleId = '1038872691911958740';
const transRoleId = '1038873511361523752';
const nonRoleId = '1038873511361523752';

const genderRoles: ReactionRoleConfiguration[] = [
  {
    messageId: genderMessageId,
    reaction: '🚀',
    roleId: maleRoleId,
  },
  {
    messageId: genderMessageId,
    reaction: '🛸',
    roleId: femaleRoleId,
  },
  {
    messageId: genderMessageId,
    reaction: '🪐',
    roleId: transRoleId,
  },
  {
    messageId: genderMessageId,
    reaction: '🌌',
    roleId: nonRoleId,
  },
];

// const regionRoles: ReactionRoleConfiguration[] = [
//   {
//     messageId: genderMessageId,
//     reaction: '🤖',
//     roleId: '858186589187735565',
//   },
// ];

const configurations: ReactionRoleConfiguration[] = [];
configurations.push(...genderRoles);

export default configurations;
