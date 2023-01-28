import {ReactionRoleConfiguration} from 'discordjs-reaction-role';

const genderMessageId = '1068947528457916446';
const maleRoleId = '1038872911324397710';
const femaleRoleId = '1038872691911958740';
const transRoleId = '1068967699167858799';
const nonRoleId = '1038873511361523752';

/* It's creating a new array and pushing the contents of genderRoles into it.
</code> */
const genderRoles: ReactionRoleConfiguration[] = [
  {
    // TODO decide on emoji
    messageId: genderMessageId,
    reaction: '🛸',
    roleId: femaleRoleId,
  },
  {
    // TODO decide on emoji
    messageId: genderMessageId,
    reaction: '🚀',
    roleId: maleRoleId,
  },
  {
    messageId: genderMessageId,
    reaction: '🪐',
    // TODO decide what this is in discord. like the actual role name
    roleId: transRoleId,
  },
  {
    messageId: genderMessageId,
    reaction: '🌙',
    // TODO decide what this is in discord. like the actual role name
    roleId: nonRoleId,
  },
];

/* It's creating a new array and pushing the contents of genderRoles into it. */
const configurations: ReactionRoleConfiguration[] = [];
configurations.push(...genderRoles);

export default configurations;
