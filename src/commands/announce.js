module.exports = {
  name: 'announce',
  description: 'announce',
  execute(message, args) {
    const text = args.join(' ');
    if (!text) return message.reply('Provide announcement text.');
    message.channel.send(`Announcement: ${text}`);
  }
};
