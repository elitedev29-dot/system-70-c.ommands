const fs = require('fs');
const path = require('path');

const dataDir = path.resolve(__dirname, '../../data');
const filePath = path.join(dataDir, 'langs.json');

function load() {
  try {
    if (!fs.existsSync(filePath)) return {};
    return JSON.parse(fs.readFileSync(filePath, 'utf8') || '{}');
  } catch (e) {
    return {};
  }
}

function save(obj) {
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(obj, null, 2), 'utf8');
}

module.exports = {
  name: 'set-lang',
  description: 'set server language (ar|en)',
  execute(message, args) {
    if (!message.guild) return message.reply('This command works in a server.');
    const v = (args[0] || '').toLowerCase();
    const map = { ar: 'ar', arabic: 'ar', عربي: 'ar', en: 'en', english: 'en', إنجليزي: 'en', english: 'en' };
    const lang = map[v];
    if (!lang) return message.reply('Usage: set-lang <ar|en>');
    const store = load();
    store[message.guild.id] = lang;
    save(store);
    if (lang === 'ar') return message.reply('تم تغيير لغة السيرفر إلى العربية.');
    return message.reply('Server language set to English.');
  }
};
