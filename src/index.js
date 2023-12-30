require("dotenv").config();

const { Client, IntentsBitField, ActivityType} = require('discord.js');

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

    client.user.setActivity({
        name: 'Summoner\'s Rift',
        type: ActivityType.Competing,
    })
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
        interaction.reply("Hey!");
    }
    if (interaction.commandName == "selected") {
        interaction.reply("Are you the hunter... or the prey?");
    }
    if (interaction.commandName == "build") {
        let champ = interaction.options.get('champion').value;
        champ = champ.split(" ").join("");
        interaction.reply("https://u.gg/lol/champions/" + champ + "/build");
        console.log(champ);
    }
    if (interaction.commandName == "league") {
        let summoner = interaction.options.get('username').value;
        summoner = summoner.split(" ").join("%20");
        tagVal = interaction.options.get('tag').value;

        interaction.reply("https://tracker.gg/lol/profile/riot/" + 
            interaction.options.get('region').value + "/"+ summoner + 
            "%23" + interaction.options.get('tag').value + "/");
        
        console.log(summoner);
    }
    if (interaction.commandName == "rps") {
        choice = interaction.options.get('move').value;
        kMove = Math.floor(Math.random()*3);
         // 0 = rock, 1 = paper, 2 = scissors
        kChoice = "n/a";
        if (kMove == 0){
            kChoice = 'rock';
        }
        else if (kMove == 1) {
            kChoice = 'paper';
        }
        else {
            kChoice = 'scissors';
        }
        result = "n/a";

        if ((kMove == 0 && choice == 'scissors') || (kMove == 1 && choice == 'rock') || (kMove == 2 && choice == 'paper')) {
            result = "I win!";
        }
        else if ((kMove == 0 && choice == 'paper') || (kMove == 1 && choice == 'scissors') || (kMove == 2 && choice == 'rock')) {
            result = "You win!";
        }
        else {
            result = "Tie!"
        }
        interaction.reply("You chose: " + choice + "\nI chose: " + kChoice + "\n" + result);

    }
    if (interaction.commandName == "flip") {
        choice = interaction.options.get('move').value;
        kMove = Math.floor(Math.random()*2);
        value = "n/a";
        if (kMove == 0) {
            value = "heads";
        } else {
            value = "tails";
        }
        if (value == choice) {
            interaction.reply("You chose: " + choice + "\nThe coin was: " + value + '\nYou win!');
        }
        else {
            interaction.reply("You chose: " + choice + "\nThe coin was: " + value + '\nBetter luck next time!');
        }
        
    }
    if (interaction.commandName == "fortnite") {
        interaction.reply("https://fortnitetracker.com/profile/all/" + interaction.options.get('username').value);
    }
    console.log(interaction.commandName);
});

client.login(process.env.TOKEN);
