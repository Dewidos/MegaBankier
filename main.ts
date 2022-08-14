import {Client, IntentsBitField} from "discord.js"
import 'dotenv/config'

const client = new Client({intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMessages]})

client.once('ready', () => {
    console.log("The bot is ready!")
})

// noinspection JSIgnoredPromiseFromCall
client.login(process.env['TOKEN'])