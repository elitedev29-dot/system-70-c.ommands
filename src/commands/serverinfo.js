module.exports = {
  name: 'serverinfo',
  description: 'serverinfo',
  execute(message) {
    const g = message.guild;
    message.reply(`Server: ${g.name} | Members: ${g.memberCount}`);
  }
};
