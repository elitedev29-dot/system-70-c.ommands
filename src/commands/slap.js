const { EmbedBuilder } = require('discord.js');

const characters = [
  'Naruto Uzumaki',
  'Sakura Haruno',
  'Sasuke Uchiha',
  'Goku',
  'Luffy',
  'Mikasa Ackerman',
  'Levi',
  'Rem',
  'Zero Two',
  'Ichigo Kurosaki'
];

module.exports = {
  name: 'slap',
  description: 'slap',
  execute(message) {
    const target = message.mentions.users.first() || message.author;
    const character = characters[Math.floor(Math.random() * characters.length)];
    const embed = new EmbedBuilder().setTitle('Slap!').setDescription(`${message.author.tag} slapped ${target.tag}` ).addFields({ name: 'Used by', value: character }).setThumbnail(target.displayAvatarURL({ dynamic: true }));
    message.channel.send({ embeds: [embed] });
  }
};
