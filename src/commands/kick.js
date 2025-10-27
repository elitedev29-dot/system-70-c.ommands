module.exports = {
  name: 'kick',
  description: 'kick',
  async execute(message) {
    const member = message.mentions.members.first();
    if (!member) return message.reply('No member specified.');
    if (!member.kickable) return message.reply('Cannot kick that member.');
    await member.kick();
    message.reply('Member kicked.');
  }
};
