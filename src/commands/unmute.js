module.exports = {
  name: 'unmute',
  description: 'unmute',
  async execute(message) {
    const member = message.mentions.members.first();
    if (!member) return message.reply('No member specified.');
    const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');
    if (!role) return message.reply('Muted role not found.');
    await member.roles.remove(role);
    message.reply('Member unmuted.');
  }
};
