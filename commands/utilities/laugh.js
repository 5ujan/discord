const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("laugh")
    .setDescription("for funny occasions"),
  async execute(interaction) {
    if (interaction.user.id === '732097515763269643'){console.log(interaction.user.id)
         await interaction.reply("hahahaha");}
      else await interaction.reply("that was lame");

  },
};
