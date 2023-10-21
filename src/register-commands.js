require('dotenv').config();
const {REST , Routes} = require("discord.js");

const commands = [
    {
        name: 'hey',
        description: 'Replies with hey!',
    },
    { 
        name: 'selected',
        description: 'Replies with a Kaisa quote.'
    }
]

const rest = new REST({Version: '10'}).setToken(process.env.TOKEN);

(async () => {

    console.log("Registering slash commands...");

    try {
        await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
        {body: commands}
        
        );
        console.log("Slash commands were registered successfully!")
    } catch (error) {
        console.log("Error");
    }
})();