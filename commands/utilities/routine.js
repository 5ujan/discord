const { SlashCommandBuilder } = require("discord.js");
const routine = require("../../routine");

const dayMap = {
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thuursday: 4,
  friday: 5,
  saturday: 6
}
console.log(dayMap['tue'])

module.exports = {
  data: new SlashCommandBuilder()
    .setName("routine")
    .setDescription("get today's routine")
    .addStringOption((option) => option.setName("day").setDescription("which day")),
  async execute(interaction) {

    console.log("=================\n"+dayMap[interaction.options.getString(
      "day"
    )]+ "\n===================================")
    const day = dayMap[interaction.options.getString("day")] || new Date().getDay()
    console.log(day)
    if (day=== 6) await interaction.reply("# Happy Saturday");
    else {
      const today = routine[Object.keys(routine)[day]];
      let string = "";
      today.forEach((el) => {
        el.group === "both"
          ? (string += `${el.subject} - ${el.instructor} [${el.from} - ${el.to}]\n`)
          : (string += `${el.group}: ${el.subject} - ${el.instructor} [${el.from} - ${el.to}]\n`);
      });
      await interaction.reply("```" + string + "```");
    }
  },
};
