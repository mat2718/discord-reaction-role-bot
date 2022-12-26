import {ReactionRoleConfiguration} from 'discordjs-reaction-role';
import {
  femaleRoleId,
  genderMessageId,
  maleRoleId,
} from './ApplicationConstants';

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
