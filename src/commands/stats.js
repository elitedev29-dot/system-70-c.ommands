module.exports = {
  name: 'stats',
  description: 'stats',
  execute(message) {
    const up = process.uptime();
    message.reply(`Uptime: ${Math.floor(up)}s`);
  }
};
