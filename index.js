const { readdirSync, statSync, fs } = require('fs');
require('dotenv').config();
const Discord = require('discord.js'),
  client = new Discord.Client({
    intents: 0x31feff,
    partials: ['CHANNEL', 'GUILD_MEMBER', 'USER'],
    allowedMentions: {
      parse: ['roles', 'users', 'everyone'],
      repliedUser: true
    }
  });
const {
  Intents,
  Collection,
  Client,
  GuildMember,
  MessageActionRow,
  WebhookClient,
  MessagePayload,
  GatewayIntentBits,
  MessageSelectMenu,
  Modal,
  MessageEmbed,
  MessageButton,
  MessageAttachment,
  Permissions,
  TextInputComponent
} = require('discord.js');
const chalk = require('chalk');
const { CommandCooldown, msToMinutes } = require('discord-command-cooldown');
const ms = require('ms');
const paypal = require('paypal-rest-sdk');
const { Database, MongoDriver, JSONDriver } = require('st.db');

const options = { driver: new JSONDriver('./database/database.json') };
const options2 = { driver: new JSONDriver('./database/Tickets.json') };
const options3 = { driver: new JSONDriver('./database/TicketCount.json') };
const options4 = { driver: new JSONDriver('./database/Points.json') };
const options5 = { driver: new JSONDriver('./database/ClosedTicket.json') };
const db = new Database(options);
const dbTickets = new Database(options2);
const TC = new Database(options3);
const dbpoint = new Database(options4);
const dbCloseTicket = new Database(options5);
const privateSPath = require('./data/privateS.json');
const settings = require('./config/settings.js');
const app = require('./function/Express.js')(settings.port, chalk);
const prefix = settings.prefix;

module.exports = {
  app,
  client,
  db,
  prefix,
  dbpoint,
  dbCloseTicket,
  dbTickets,
  TC,
  settings
};

require('./function/function/ready.js')(client, chalk);
const initializeCommands = require('./function/commands.js');
initializeCommands();

app.set('views', './views');
app.set('view engine', 'ejs');

const logAndReturn = (error) => console.log(error);
process.on('unhandledRejection', logAndReturn);
process.on('uncaughtException', logAndReturn);
process.on('multipleResolves', logAndReturn);
process.on('uncaughtExceptionMonitor', logAndReturn);

client.login(process.env.token);