require("dotenv").config();

const express = require("express");
const app = express();
const axios = require("axios");

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
const wishes = require("./wish")

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
  const dayMap = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
  };

  if (commandName === "routine") {
    // Execute the /routine slash command
    const command = client.commands.get("routine");
    if (!command) return console.error("The routine command was not found.");
    console.log(Object.keys(dayMap)[new Date().getDay()]);
    try {
      // Create a fake interaction object to simulate a slash command interaction
      const fakeInteraction = {
        commandName: "routine",
        options: {
          getString: () => Object.keys(dayMap)[new Date().getDay()],
        },
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
  if (commandName === "routinext") {
    // Execute the /routine slash command
    const command = client.commands.get("routine");
    if (!command) return console.error("The routine command was not found.");
    console.log(Object.keys(dayMap)[new Date().getDay()]);
    try {
      // Create a fake interaction object to simulate a slash command interaction
      const fakeInteraction = {
        commandName: "routine",
        options: {
          getString: () => Object.keys(dayMap)[(new Date().getDay()+1)%7 ],
        },
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
  if (commandName === "laugh") {
    // Execute the /routine slash command
    const command = client.commands.get("laugh");
    if (!command) return console.error("The routine command was not found.");

    try {
      // Create a fake interaction object to simulate a slash command interaction
      const fakeInteraction = {
        commandName: "laugh",
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
    if (message.content.startsWith("?wish")) {
      const mentionedUser = message.mentions.users.first();
      if (!mentionedUser)
        return message.reply("Returns happy birthday, mention user to use it");

      const name = `<@${mentionedUser.id}>`; 
      console.log(
        wishes[Math.floor(Math.random() * wishes.length)].message
          .split("[Friend's Name]")
          .join(name)
      );
      message.reply(
        `${wishes[Math.floor(Math.random() * wishes.length)].message
          .split("[Friend's Name]")
          .join(name)}`
      );
    }
  } catch (err) {
    console.log(err);
  }
});

app.get("/", (req, res, next) => {
  res.send("You're not supposed to see this.");
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
  loginToDiscord();
  setInterval(keepAlive, 1000 * 60 * 4);
});

function loginToDiscord() {
  client
    .destroy()
    .then(() => {
      return client.login(process.env.DISCORD_TOKEN);
    })
    .catch(console.error);
}

async function keepAlive() {
  try {
    const response = await axios.get(`https://discord-wawy.onrender.com`);
    const another = await axios.get(`https://bhitta.onrender.com/hello`)
    console.log(`keepAlive response: ${response.status}`);
  } catch (err) {
    console.error(`keepAlive failed: ${err.message}`);
  }
}

// Reconnect to Discord every 10 minutes
const reconnectInterval = setInterval(() => {
  loginToDiscord();
}, 1000 * 60 * 10);

process.on("exit", () => {
  clearInterval(reconnectInterval);
});
