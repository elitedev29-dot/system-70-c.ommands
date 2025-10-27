module.exports = {
  name: 'choose',
  description: 'choose',
  execute(message, args) {
    if (!args.length) return message.reply('Provide options separated by |');
    const parts = args.join(' ').split('|').map(s => s.trim()).filter(Boolean);
    if (!parts.length) return message.reply('No valid options.');
    const pick = parts[Math.floor(Math.random() * parts.length)];
    message.reply(`Chosen: ${pick}`);
  }
};
