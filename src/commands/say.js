module.exports = {
  name: 'say',
  description: 'say',
  execute(message, args) {
    const text = args.join(' ');
    if (!text) return message.reply('Provide text.');
    message.channel.send(text);
  }
};
