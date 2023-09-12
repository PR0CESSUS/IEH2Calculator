import { DataType } from "../type/DataType";
import { equipmentRarity, EquipmentRarity } from "../type/EquipmentRarity";
import { CalculatorMainframe } from "../CalculatorMainframe";

export class LogicProficiency {
  name = "proficiency";
  app: CalculatorMainframe;
  data: any = {};
  html = "";
  constructor(app: CalculatorMainframe) {
    this.app = app;
    // console.log(this.app.data.custom?.dungeon);

    if (!this.app.data.custom?.proficiency) {
      // console.log("brak danych w custom, adding");
      this.defineProperty("equipmentProficiency", 0, "input");
      this.defineProperty("currentLevel", 0, "input");
      this.defineProperty("targetLevel", 0, "input");
      this.defineProperty("rarity", equipmentRarity, "select");
      this.defineProperty("time", this.getRequiredTime(this.data.currentLevel, this.data.targetLevel, this.data.rarity), "time");
      this.app.data.custom.proficiency = this.data;
      this.app.data.save();
      // console.log("save");
    } else {
      // console.log("dane sa, przypisanie");
      this.data = this.app.data.custom?.proficiency;
    }
    // console.log(this);
    // console.log(this.data.rarity);
  }

  // 249.60M = 22m17s for fox item
  // console.log("class constructor aka Init");

  update() {
    // console.log(this.html);
    this.data.time = this.getRequiredTime(this.data.currentLevel, this.data.targetLevel, this.data.rarity) / (this.data.equipmentProficiency / 100);
  }

  getRequiredTime(startLevel: number, stopLevel: number, rarity: EquipmentRarity) {
    let time = 0;
    for (let index = startLevel; index < stopLevel; index++) {
      time += this.requiredProficiency(index, rarity);
    }
    return time;
  }

  requiredProficiency(level: number, rarityName: EquipmentRarity) {
    let rarity = equipmentRarity.indexOf(rarityName);
    let num = Math.pow(3.0, rarity) * (1.0 + 1.5 * rarity) * 300.0 * (level * (1 + rarity) + 1);
    if (rarity >= 4) num *= 10000.0 * Math.pow(10.0, level / 10.0);
    return level <= 10 ? num : num * Math.pow(2.0, level - 10);
  }

  defineProperty(name: string, value: any, type: string = "") {
    if (value instanceof Array) {
      this.data[name] = value[0];
    } else {
      this.data[name] = value;
    }

    switch (type) {
      case "input":
        this.html += `${name}: <input type='text' data-endpoint='custom.${this.name}.${name}'>`;
        break;
      case "select":
        this.html += `${name}: <select data-endpoint='custom.${this.name}.${name}' id='${this.name}-${name}'>`;
        for (let index = 0; index < value.length; index++) {
          this.html += `<option value='${value[index]}'>${value[index]}</option>`;
        }
        this.html += "</select>";
        break;
      case "time":
        this.html += `${name}: <span data-endpoint='custom.${this.name}.${name}' data-type='time'>`;
        break;
      default:
        this.html += `${name}: <span data-endpoint='custom.${this.name}.${name}'>`;
        break;
    }

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
  }
}
