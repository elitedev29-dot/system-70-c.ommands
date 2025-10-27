module.exports = {
  name: 'poll',
  description: 'poll',
  async execute(message, args) {
    const q = args.join(' ');
    if (!q) return message.reply('Provide poll question.');
    const m = await message.channel.send(`Poll: ${q}`);
    await m.react('👍');
    await m.react('👎');
  }
};
