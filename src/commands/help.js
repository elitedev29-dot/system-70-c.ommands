const { ActionRowBuilder, StringSelectMenuBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'help',
  description: 'help',
  async execute(message) {
    const options = [
      { label: 'General', value: 'general', description: 'Basic commands' },
      { label: 'Moderation', value: 'moderation', description: 'Moderation tools' },
      { label: 'Fun', value: 'fun', description: 'Fun commands' },
      { label: 'Utilities', value: 'utilities', description: 'Utility commands' }
    ];
    const row = new ActionRowBuilder().addComponents(
      new StringSelectMenuBuilder().setCustomId('help_select').setPlaceholder('Select a category').addOptions(options)
    );
    const embed = new EmbedBuilder().setTitle('Help').setDescription('اختر عن طريق القائمة لعرض الأوامر (الرد سيكون مخفيًا)').setColor(0x00AE86);
    await message.channel.send({ embeds: [embed], components: [row] });
  }
};
