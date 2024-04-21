const { SlashCommandBuilder } = require("discord.js");
const routine = require('../../routine')

module.exports = {
  data: new SlashCommandBuilder()
    .setName("routine")
    .setDescription("get today's routine"),
  async execute(interaction) {
      if(new Date().getDay() === 6)
      
      await interaction.reply("# Happy Saturday")
    else{
    const today = routine[Object.keys(routine)[new Date().getDay()]];
    let string = ""
    today.forEach((el)=>{
        el.group==="both"?
        string+= `${el.subject} - ${el.instructor} [${el.from} - ${el.to}]\n`:
        string+= `${el.group}: ${el.subject} - ${el.instructor} [${el.from} - ${el.to}]\n`

    })
    await interaction.reply("```"+string+"```")
}
  },
};
