module.exports = {
  name: 'ban',
  description: 'ban',
  async execute(message) {
    const member = message.mentions.members.first();
    if (!member) return message.reply('No member specified.');
    if (!member.bannable) return message.reply('Cannot ban that member.');
    await member.ban();
    message.reply('Member banned.');
  }
};
