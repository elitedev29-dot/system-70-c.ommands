module.exports = {
  name: 'userinfo',
  description: 'userinfo',
  execute(message) {
    const user = message.mentions.users.first() || message.author;
    const joined = message.guild.members.cache.get(user.id)?.joinedAt || 'Unknown';
    message.reply(`User: ${user.tag} | Joined: ${joined}`);
  }
};
