const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const TOKEN = "MTEyMTMyNzk0ODY1MDI1MDM0MA.GG86rj.QhFF3rjdcuVUcuQkWmqtutV8Wqu6mdcPiKBVuM";
const GUILD_ID = "1121331958501347401";

exports.DiscordNotify = (message) => {
    client.on('ready', () => {
        console.log(`Discord Bot Running: ${client.user.tag}!`);
        const logChannel = client.guilds.cache.get(GUILD_ID).channels.cache.find(channel => channel.name === 'log-channel');
        if (logChannel) {
            logChannel.send(message);
        } else {
            console.log('ไม่พบช่องทาง log ในเซิร์ฟเวอร์');
        }
    });

    client.on('interactionCreate', async (interaction) => {
        if (!interaction.isCommand()) return;

        if (interaction.commandName === 'ping') {
            await interaction.reply('Pong!');
        }
    });

    client.login(TOKEN);
};
