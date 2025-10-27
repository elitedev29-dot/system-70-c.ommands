module.exports = {
  name: 'warn',
  description: 'warn',
  execute(message) {
    const member = message.mentions.members.first();
    if (!member) return message.reply('No member specified.');
    const reason = message.content.split(/\s+/).slice(2).join(' ') || 'No reason provided.';
    message.reply(`${member.user.tag} warned: ${reason}`);
  }
};
