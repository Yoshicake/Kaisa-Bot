require('dotenv').config();
const {REST , Routes, ApplicationCommandOptionType} = require("discord.js");

const commands = [
    {
        name: 'hey',
        description: 'Replies with hey!',
    },
    { 
        name: 'selected',
        description: 'Replies with her character select quote.'
    },
    { 
        name: 'build',
        description: 'Sends a link to a champ\'s builds.',
        options: [
            {
                name: 'champion',
                description: 'Name of champion you want to search up. All lowercase and no spaces.',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
        ],
    },
    { 
        name: 'league',
        description: 'Sends a link to a user\'s tracker.gg profile.',
        options: [
            {
                name: 'region',
                description: 'Region the user plays in.',
                type: ApplicationCommandOptionType.String,
                required: true,
                choices: [
                    {
                        name: 'Brazil',
                        value: 'BR',
                    },
                    {
                        name: 'Europe Nordic & East',
                        value: 'EUNE',
                    },
                    {
                        name: 'Europe West',
                        value: 'EUW',
                    },
                    {
                        name: 'Latin America North',
                        value: 'LAN',
                    },
                    {
                        name: 'Latin America South',
                        value: 'LAS',
                    },
                    {
                        name: 'North America',
                        value: 'NA',
                    },
                    {
                        name: 'Oceania',
                        value: 'OCE',
                    },
                    {
                        name: 'Russia',
                        value: 'RU',
                    },
                    {
                        name: 'Turkey',
                        value: 'TR',
                    },
                    {
                        name: 'Japan',
                        value: 'JP',
                    },
                    {
                        name: 'Korea',
                        value: 'KR',
                    },
                    {
                        name: 'Philippines',
                        value: 'PH',
                    },
                    {
                        name: 'Singapore',
                        value: 'SG',
                    },
                    {
                        name: 'Taiwan',
                        value: 'TW',
                    },
                    {
                        name: 'Thailand',
                        value: 'TH',
                    },
                    {
                        name: 'Vietnam',
                        value: 'VN',
                    },
                    
                ] 
            },
            {
                name: 'username',
                description: 'User you want to search up.',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name: 'tag',
                description: 'Tag of the user.',
                type: ApplicationCommandOptionType.String,
                required: true,
            },

        ],
    },
    {
        name: 'fortnite',
        description: "Links to a player\'s tracker.gg profile",
        options: [
            {
                name: 'username',
                description: "Epic Games username.",
                type: ApplicationCommandOptionType.String,
                required: true,

            }
        ]
    },
    {
        name: 'rps',
        description: "Play rock, paper, scissors with Kai'sa.",
        options: [ 
            {
            name: 'move',
            description: 'Choose your move!',
            type: ApplicationCommandOptionType.String,
            required: true,
            choices: [
                {
                    name: 'rock',
                    value: 'rock',
                },
                {
                    name: 'paper',
                    value: 'paper',
                },
                {
                    name: 'scissors',
                    value: 'scissors',
                },
            ],
            },
        ],
    },
    {
        name: 'flip',
        description: "Flip a coin and Kai'sa will tell you what you got!",
        options: [ 
            {
            name: 'move',
            description: 'Choose your move!',
            type: ApplicationCommandOptionType.String,
            required: true,
            choices: [
                {
                    name: 'heads',
                    value: 'heads',
                },
                {
                    name: 'tails',
                    value: 'tails',
                },
            ],
            },
        ],
    },
    
];

const rest = new REST({Version: '10'}).setToken(process.env.TOKEN);

(async () => {

    console.log("Registering slash commands...");

    try {
        await rest.put(Routes.applicationCommands(process.env.CLIENT_ID),
        {body: commands}
        
        );
        console.log("Slash commands were registered successfully!")
    } catch (error) {
        console.log("Error");
    }
})();
