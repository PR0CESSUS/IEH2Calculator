export class LogicGuild {
  name = "guild";
  data;
  constructor(data) {
    this.data = data;
  }

  // console.log("class constructor aka Init");

  update() {
    let guildLevel = this.data.get("source.guildLevel");
    let guildexpPerHour = this.data.get("custom.guildexpPerHour");
    let talismanPassive = 1 - this.data.get("talisman.GuildMembersEmblem.passiveEffectValue");

    let nitroSpeed = this.data.get("source.nitroSpeed");
    let levelTotal = this.data.get("custom.guildLevelTarget") - guildLevel;

    if (levelTotal > 0 && guildexpPerHour > 0) {
      let requiredExpTotal = 0;
      let time = 0;

      for (let i = 0; i < levelTotal; i++) {
        let level = guildLevel + i;
        let requiredExp =
          Math.floor(
            500.0 * (level + 1) +
              50.0 * Math.pow(level, 2.0) +
              500.0 * Math.pow(level / 5.0, 3.0) +
              2000.0 * Math.pow(level / 10.0, 6.0) +
              25000.0 * Math.pow(level / 20.0, 9.0) +
              300000.0 * Math.pow(level / 30.0, 12.0)
          ) * talismanPassive;

        requiredExpTotal += requiredExp;
      }

      let expPerSeconds = (guildexpPerHour / 3600) * nitroSpeed;
      //@ts-ignore
      time = parseInt(requiredExpTotal / expPerSeconds);
      // console.log("expPerSeconds " + parseInt(expPerSeconds));
      // console.log("requiredExpTotal " + requiredExpTotal);

      // console.log("seconds " + time);

      // GuildParameter.RequiredExp(level) * (1.0 - this.expRequirementReduction.Value());
      //@ts-ignore
      this.data.set("custom.guildtime", time);
      //   this.data.custom.guildtime = time;
    } else {
      this.data.set("custom.guildtime", 0);
    }
    //
  }
}
