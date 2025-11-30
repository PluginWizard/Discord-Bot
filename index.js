const discord = require('discord.js');
const { Logger } = require('./util/Logger');
require('dotenv').config();

const TOKEN = process.env.DISCORD_TOKEN;

const client = new discord.Client({
    intents: []
})

client.once('ready', () => {
    Logger.info(`Logged in as ${client.user.tag}!`);

    // Set rich presence status
    client.user.setActivity({
        name: "Playing PluginWizard"
    });
});

client.login(TOKEN).catch(err => {
    Logger.error('Failed to login:', err);
})