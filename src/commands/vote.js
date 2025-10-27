module.exports = {
  name: 'vote',
  description: 'vote',
  execute(message, args) {
    const text = args.join(' ');
    if (!text) return message.reply('Provide vote text.');
    message.channel.send(`Vote: ${text}`).then(m => { m.react('✅'); m.react('❌'); });
  }
};
