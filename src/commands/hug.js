module.exports = {
  name: 'hug',
  description: 'hug',
  execute(message) {
    const target = message.mentions.users.first() || message.author;
    message.reply(`${message.author.tag} hugs ${target.tag}`);
  }
};
