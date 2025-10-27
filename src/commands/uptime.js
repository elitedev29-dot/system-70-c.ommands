module.exports = {
  name: 'uptime',
  description: 'uptime',
  execute(message) {
    message.reply(`${process.uptime()}s`);
  }
};
