module.exports = {
  name: 'roll',
  description: 'roll',
  execute(message, args) {
    const max = parseInt(args[0], 10) || 100;
    const n = Math.floor(Math.random() * max) + 1;
    message.reply(`Rolled: ${n}`);
  }
};
