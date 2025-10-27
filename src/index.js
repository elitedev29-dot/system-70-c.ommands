const fs = require('fs');
const path = require('path');
const { Client, Collection, GatewayIntentBits, EmbedBuilder } = require('discord.js');
require('dotenv').config();
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
if (fs.existsSync(commandsPath)) {
  const commandFiles = fs.readdirSync(commandsPath).filter(f => f.endsWith('.js') && !f.startsWith('cmd'));
  for (const file of commandFiles) {
    const mod = require(path.join(commandsPath, file));
    if (Array.isArray(mod.commands)) {
      for (const c of mod.commands) if (c && c.name) client.commands.set(c.name, c);
    } else if (mod && mod.name) client.commands.set(mod.name, mod);
  }
}
const prefix = process.env.PREFIX || '.';
client.on('ready', () => console.log(`${client.user.tag} ready`));
client.on('messageCreate', async message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/\s+/);
  const commandName = args.shift().toLowerCase();
  const command = client.commands.get(commandName);
  if (!command) return;
  try {
    await command.execute(message, args);
  } catch (err) {
    console.error(err);
    message.reply('Error executing command.');
  }
});
client.on('interactionCreate', async interaction => {
  if (!interaction.isStringSelectMenu()) return;
  if (interaction.customId !== 'help_select') return;
  const choice = interaction.values[0];
  const categories = {
    general: ['ping', 'invite', 'say', 'help'],
    moderation: ['kick', 'ban', 'mute', 'unmute', 'warn', 'clear'],
    fun: ['hug', 'slap', 'meme', 'joke', 'roll', 'choose', 'poll', 'vote'],
    utilities: ['avatar', 'userinfo', 'serverinfo', 'stats', 'uptime', 'calc']
  };
  const cmds = categories[choice] || [];
  const embed = new EmbedBuilder().setTitle(`Commands: ${choice}`).setDescription(cmds.length ? cmds.join(', ') : 'No commands').setColor(0x00AE86);
  try {
    await interaction.update({ embeds: [embed], components: [] });
  } catch (err) {
    await interaction.reply({ embeds: [embed], ephemeral: true });
  }
});
client.login(process.env.TOKEN);
