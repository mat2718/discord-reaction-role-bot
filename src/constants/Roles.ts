import {ReactionRoleConfiguration} from 'discordjs-reaction-role';

const genderMessageId = '1056825757453787146';
const maleRoleId = '1038872911324397710';
const femaleRoleId = '1038872691911958740';

const genderRoles: ReactionRoleConfiguration[] = [
  {
    messageId: genderMessageId,
    reaction: '♂️',
    roleId: maleRoleId,
  },
  {
    messageId: genderMessageId,
    reaction: '♀️',
    roleId: femaleRoleId,
  },
  {
    messageId: '',
    reaction: '',
    roleId: '',
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
