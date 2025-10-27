module.exports = {
  name: 'clear',
  description: 'clear',
  async execute(message, args) {
    const amount = parseInt(args[0], 10);
    if (!amount || amount < 1 || amount > 100) return message.reply('Provide a number between 1 and 100.');
    await message.channel.bulkDelete(amount, true);
    message.reply(`Deleted ${amount} messages.`).then(m => setTimeout(() => m.delete(), 3000));
  }
};
