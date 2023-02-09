import {ReactionRoleConfiguration} from 'discordjs-reaction-role';

const genderMessageId = '1068947528457916446';
const maleRoleId = '1038872911324397710';
const femaleRoleId = '1038872691911958740';
const transRoleId = '1068967699167858799';
const nonRoleId = '1038873511361523752';

const pronounsMessageId = '1069000041324367903';
const sheRoleId = '1038871552114053120';
const heRoleId = '1038871748969504899';
const theyRoleId = '1038871893039665294';
const askRoleId = '1038873844594774076';
const allRoleId = '1038873980213407835';

const locationMessageId = '1069006644828188704';
const naRoleId = '1038875551034785883';
const saRoleId = '1038875769717407856';
const euRoleId = '1038876078023917671';
const afRoleId = '1038876239101952000';
const ocRoleId = '1038876656204529734';
const asRoleId = '1038877524010213457';

const ageMessageId = '1069008787849089185';
const thirteenRoleId = '1068858334779817984';
const eighteenRoleId = '1068858497757892648';
const twentythreeRoleId = '1068858547183558728';
const twentyeightRoleId = '1068858594134601789';

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
  {
    messageId: pronounsMessageId,
    reaction: '🧡',
    roleId: sheRoleId,
  },
  {
    messageId: pronounsMessageId,
    reaction: '💙',
    roleId: heRoleId,
  },
  {
    messageId: pronounsMessageId,
    reaction: '💜',
    roleId: theyRoleId,
  },
  {
    messageId: pronounsMessageId,
    reaction: '💛',
    roleId: allRoleId,
  },
  {
    messageId: pronounsMessageId,
    reaction: '🤍',
    roleId: askRoleId,
  },
  {
    messageId: locationMessageId,
    reaction: '🍉',
    roleId: naRoleId,
  },
  {
    messageId: locationMessageId,
    reaction: '🍌',
    roleId: saRoleId,
  },
  {
    messageId: locationMessageId,
    reaction: '🍅',
    roleId: euRoleId,
  },
  {
    messageId: locationMessageId,
    reaction: '🍈',
    roleId: afRoleId,
  },
  {
    messageId: locationMessageId,
    reaction: '🍍',
    roleId: ocRoleId,
  },
  {
    messageId: locationMessageId,
    reaction: '🥭',
    roleId: asRoleId,
  },
  {
    messageId: ageMessageId,
    reaction: '🌸',
    roleId: thirteenRoleId,
  },
  {
    messageId: ageMessageId,
    reaction: '🌼',
    roleId: eighteenRoleId,
  },
  {
    messageId: ageMessageId,
    reaction: '🍀',
    roleId: twentythreeRoleId,
  },
  {
    messageId: ageMessageId,
    reaction: '🌻',
    roleId: twentyeightRoleId,
  },
];

/* It's creating a new array and pushing the contents of genderRoles into it. */
const configurations: ReactionRoleConfiguration[] = [];
configurations.push(...genderRoles);

export default configurations;
