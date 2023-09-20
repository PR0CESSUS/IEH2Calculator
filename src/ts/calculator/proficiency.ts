import { DataType } from "../type/DataType";
import { equipmentRarity, EquipmentRarity } from "../type/EquipmentRarity";

export class CalculatorProficiency {
  data: DataType;
  custom = {
    currentLevel: 0,
    targetLevel: 0,
    rarity: "Common" as EquipmentRarity,
    equipmentProficiency: 0,
  };
  constructor(data: DataType) {
    this.data = data;
    // console.log(this.app.data.custom?.dungeon);
    if (!this.data.custom.proficiency) {
      this.data.custom.proficiency = this.custom;
    } else {
      this.custom = this.data.custom.proficiency;
    }
    // console.log(this.html());
  }

  get requiredTime() {
    let time = 0;
    for (let index = this.custom.currentLevel; index < this.custom.targetLevel; index++) {
      time += this.requiredProficiency(index);
    }
    return time / (this.custom.equipmentProficiency / 100);
  }

  requiredProficiency(level: number) {
    let rarity = equipmentRarity.indexOf(this.custom.rarity);
    let num = Math.pow(3.0, rarity) * (1.0 + 1.5 * rarity) * 300.0 * (level * (1 + rarity) + 1);
    if (rarity >= 4) num *= 10000.0 * Math.pow(10.0, level / 10.0);
    return level <= 10 ? num : num * Math.pow(2.0, level - 10);
  }

  html() {
    let html = "";
    html += `<h3>Equipment Proficiency</h3>`;
    html += `equipmentProficiency: <input type='text' data-endpoint='calculator.proficiency.custom.equipmentProficiency' data-precision="2">%<br>`;
    html += `currentLevel: <input type='text' data-endpoint='calculator.proficiency.custom.currentLevel'><br>`;
    html += `targetLevel: <input type='text' data-endpoint='calculator.proficiency.custom.targetLevel'><br>`;
    html += `rarity: <select data-endpoint='calculator.proficiency.custom.rarity' id='calculator.proficiency.rarity'>`;
    for (let index = 0; index < equipmentRarity.length; index++) {
      html += `<option value='${equipmentRarity[index]}'>${equipmentRarity[index]}</option>`;
    }
    html += "</select><br>";
    html += `time: <span data-endpoint='calculator.proficiency.requiredTime' data-type='time'>`;
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
