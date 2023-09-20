import { DataType } from "../type/DataType";

export class CalculatorGuild {
  data: DataType;
  custom = {
    expPerHour: 0,
    targetLevel: 0,
  };
  constructor(data: DataType) {
    this.data = data;
    if (!this.data.custom.guild) {
      this.data.custom.guild = this.custom;
    } else {
      this.custom = this.data.custom.guild;
    }
    // console.log(this.html());
  }

  // console.log("class constructor aka Init");

  get requiredTime() {
    let levelTotal = this.custom.targetLevel - this.data.guild.level;
    // console.log(levelTotal);

    let time = 0;
    let requiredExpTotal = 0;
    let expPerSeconds = (this.custom.expPerHour / 3600) * this.data.misc.nitroSpeed;
    if (levelTotal > 0 && this.custom.expPerHour > 0) {
      for (let i = 0; i < levelTotal; i++) {
        let level = this.data.guild.level + i;
        let requiredExp =
          Math.floor(
            500.0 * (level + 1) +
              50.0 * Math.pow(level, 2.0) +
              500.0 * Math.pow(level / 5.0, 3.0) +
              2000.0 * Math.pow(level / 10.0, 6.0) +
              25000.0 * Math.pow(level / 20.0, 9.0) +
              300000.0 * Math.pow(level / 30.0, 12.0)
          ) *
          (1 - this.data.talisman.GuildMembersEmblem.effect);

        requiredExpTotal += requiredExp;
        // console.log(requiredExpTotal, requiredExp);
      }
      // console.log(this.data.talisman.GuildMembersEmblem.effect);

      //@ts-ignore
      time = parseInt(requiredExpTotal / expPerSeconds);
    }
    return time;
  }

  html() {
    let html = "";
    html += `<h3>Guild</h3>

    <div>
    <img src="./img/nitro.png" class="icon"> Nitro Speed:<br>
        <input id="anvil.nitro.speed" type="text" data-endpoint="misc.nitroSpeed" class="default-input warning">
        <p>
            <label>Guild EXP per hour:</label>
            <input type="text" id="guild.expPerHour" class="default-input custom" data-endpoint="calculator.guild.custom.expPerHour"
                data-precision="2">
        </p>
        <p> <label>Target Level:</label>
            <input type="text" id="guild.levelTarget" class="default-input custom" data-endpoint="calculator.guild.custom.targetLevel">
        </p>
        <p>
            <label for="source.guildLevel">Current Level:</label>
            <input id="source.guildLevel" type="text" data-endpoint="guild.level" class="default-input warning">
    
        </p>
        <p>
            <label for="talisman.GuildMembersEmblem.disassembled">Guild Member's Emblem Disasambled:</label>
            <input id="talisman.GuildMembersEmblem.disassembled " type="text"
                data-endpoint="talisman.GuildMembersEmblem.disassembled" class="default-input warning">
    
        </p>
    
        <p>
            <label>Time Needed:</label>
            <span id="guild.time" data-endpoint="calculator.guild.requiredTime" data-type="time" ></span>
    
        </p>
    
    
    </div>`;

    // html += `${name}: <span data-endpoint='custom.${this.name}.${name}'>`;

    //     <select id="anvil.dungeon.0.name" data-endpoint="custom.dungeon[0].name">
    //     <option value="herolevel">Spider 4 (Hero Level)</option>
    //     <option value="requiredability">Bat 4 (Required Ability)</option>
    //     <option value="proficiencygain">Fairy 4 (Proficiency Gain)</option>
    //     <option value="equipmenteffect">Fox 4 (Equipment Effect)</option>
    //     <option value="herolevel2">Treant 3 (Hero Level)</option>
    //     <option value="requiredability2">Treant 4 (Required Ability)</option>
    //     <option value="proficiencygain2">Flametiger 1 (Proficiency Gain)</option>
    //     <option value="equipmenteffect2">Flametiger 3 (Equipment Effect)</option>
    //     <option value="purifyofcursedeffect">Flametiger 4 (Purify of Cursed Effect)</option>
    // </select>
    return html;
  }
}
