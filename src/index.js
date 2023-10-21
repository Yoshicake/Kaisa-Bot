require("dotenv").config();

const { Client, IntentsBitField} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],

});


client.on("ready", (c) => {
    console.log(`${c.user.tag} is online.`);
});

client.on("messageCreate", (message) => {
    if (message.author.bot) {
        return;
    }

    if (message.content == "!quote") {
        message.reply("Are you the hunter... or the prey?");
    }
});

client.on("interactionCreate", (interaction) => {
    if (!interaction.isChatInputCommand()) {
        return;
    }
    if (interaction.commandName =="hey") {
        interaction.reply("hey!");
    }
    if (interaction.commandName == "selected") {
        interaction.reply("Are you the hunter... or the prey?");
    }
    console.log(interaction.commandName);
});

client.login(process.env.TOKEN);