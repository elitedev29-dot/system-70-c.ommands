module.exports = {
  name: 'calc',
  description: 'calc',
  execute(message, args) {
    const expr = args.join(' ');
    if (!expr) return message.reply('Provide expression.');
    try {
      const res = Function(`return (${expr})`)();
      message.reply(String(res));
    } catch (e) {
      message.reply('Invalid expression.');
    }
  }
};
