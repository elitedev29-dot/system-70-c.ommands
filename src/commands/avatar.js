const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
  name: 'avatar',
  description: 'avatar',
  async execute(message) {
    const user = message.mentions.users.first() || message.author;
    const url = user.displayAvatarURL({ dynamic: true, size: 1024 });
    const embed = new EmbedBuilder().setTitle(`${user.tag}'s Avatar`).setImage(url).setColor(0x00AE86);
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setLabel('Download').setStyle(ButtonStyle.Link).setURL(url)
    );
    await message.channel.send({ embeds: [embed], components: [row] });
  }
};
