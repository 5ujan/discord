require("dotenv").config();

const express = require('express')
const app = express()

const fs = require("node:fs");
const path = require("node:path");
const { Client, Collection, Events, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

client.commands = new Collection();
const foldersPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".js"));
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    // Set a new item in the Collection with the key as the command name and the value as the exported module
    if ("data" in command && "execute" in command) {
      client.commands.set(command.data.name, command);
    } else {
      console.log(
        `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
      );
    }
  }
}

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = interaction.client.commands.get(interaction.commandName);

  if (!command) {
    console.error(`No command matching ${interaction.commandName} was found.`);
    return;
  }

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    } else {
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return; // Ignore messages from bots
  if (!message.content.startsWith("?")) return; // Ignore messages that don't start with '?'

  const args = message.content.slice(1).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (commandName === "routine") {
    // Execute the /routine slash command
    const command = client.commands.get("routine");
    if (!command) return console.error("The routine command was not found.");

    try {
      // Create a fake interaction object to simulate a slash command interaction
      const fakeInteraction = {
        commandName: "routine",
        options: {},
        user: message.author,
        channel: message.channel,
        guild: message.guild,
        reply: async (options) => {
          await message.reply(options);
        },
      };

      await command.execute(fakeInteraction);
    } catch (error) {
      console.error(error);
      await message.reply("There was an error while executing this command!");
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return; // Ignore messages from bots
  if (!message.content.startsWith("?")) return; // Ignore messages that don't start with '?'
  try {
    console.log(message.content);
    const userMention = `<@732097515763269643>`;

    if (message.content === "?bestmodever") {
      message.reply(`${userMention}, obviously`);
    }
  } catch (err) {
    console.log(err);
  }
});

app.get("/", (req, res, next)=>{
  res.send("You're not supposed to see this.")
})

app.listen(8000, () => {
  console.log("Server started on port 8000");
  loginToDiscord();
});

function loginToDiscord() {
  client.login(process.env.DISCORD_TOKEN).catch(console.error);
}

const reconnectInterval = setInterval(() => {
 client
   .destroy()
   .then(() => {
     return client.login(process.env.DISCORD_TOKEN);
   })
   .catch(console.error);}, 1000 * 60 * 10);

process.on("exit", () => {
  clearInterval(reconnectInterval);
});
