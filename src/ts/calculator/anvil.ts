import { DataType } from "../type/DataType";
import { dungeonReward } from "../type/DungeonReward";

export class CalculatorAnvil {
  data: DataType;
  custom = Array(10).fill({ type: 0, time: 1, difficulty: 1 });
  dungeon = [];
  constructor(data: DataType) {
    this.data = data;
    // console.log(this.data.custom?.dungeon);

    if (!this.data.custom.anvil) {
      this.data.custom.anvil = this.custom;
    } else {
      this.custom = this.data.custom.anvil;
    }

    // console.log(this.html());
    const custom = this.custom;
    for (let index = 0; index < 10; index++) {
      this.dungeon[index] = {
        get reward() {
          // console.log(this);
          function getReward(type) {
            switch (dungeonReward[type]) {
              case "herolevel":
              case "requiredability":
                return 5;

              case "herolevel2":
              case "requiredability2":
                return 10;

              case "proficiencygain":
                return 1;

              case "equipmenteffect":
                return 0.1;

              case "purifyofcursedeffect":
                return 0.01;

              case "proficiencygain2":
                return 2;

              case "equipmenteffect2":
                return 0.2;
            }
          }

          let perHour = 3600 / custom[index].time;
          let reward = getReward(custom[index].type);
          return Math.round(perHour * reward * custom[index].difficulty * data.misc.nitroSpeed);
        },
        get orbCost() {
          return Math.round((3600 / custom[index].time) * data.misc.nitroSpeed);
        },
      };
    }
  }

  // console.log("class constructor aka Init");

  html() {
    let html = "";
    html += `<h3>Anvil</h3><table>
    <tr>
      <td>Dungeon</td>
      <td>Diff</td>
      <td>Time (s)</td>
      <td>Per hour</td>
      <td>Orb used</td>
    </tr>`;
    for (let index = 0; index < 10; index++) {
      html += `<tr>`;
      html += `<td>
        <form class="dungeon-select">                
          <select id="calculator.anvil.${index}.type" data-endpoint="calculator.anvil.custom[${index}].type">
  <option value="${dungeonReward.herolevel}">Spider 4 (Hero Level)</option>
  <option value="${dungeonReward.requiredability}">Bat 4 (Required Ability)</option>
  <option value="${dungeonReward.proficiencygain}">Fairy 4 (Proficiency Gain)</option>
  <option value="${dungeonReward.equipmenteffect}">Fox 4 (Equipment Effect)</option>
  <option value="${dungeonReward.herolevel2}">Treant 3 (Hero Level)</option>
  <option value="${dungeonReward.requiredability2}">Treant 4 (Required Ability)</option>
  <option value="${dungeonReward.proficiencygain2}">Flametiger 1 (Proficiency Gain)</option>
  <option value="${dungeonReward.equipmenteffect2}">Flametiger 3 (Equipment Effect)</option>
  <option value="${dungeonReward.purifyofcursedeffect}">Flametiger 4 (Purify of Cursed Effect)</option>
</select>
    </form></td><td>
    <form class="dungeon-select">
      <select id="calculator.anvil.${index}.difficulty" data-endpoint="calculator.anvil.custom[${index}].difficulty">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </form>
  </td>
  <td><input id="anvil.dungeon.0.time" data-endpoint="calculator.anvil.custom[${index}].time" type="text" value="1" size="4" /></td>
            <td id="anvil.dungeon.0.reward" data-endpoint="calculator.anvil.dungeon[${index}].reward">value</td>
            <td id="anvil.dungeon.0.orb" data-endpoint="calculator.anvil.dungeon[${index}].orbCost">orb</td>`;
      // html += `<td><input type='text' data-endpoint='pet.${species}.${color}.level'></td>`;
      // html += `<td><input type='text' data-endpoint='pet.${species}.${color}.rank'></td>`;
      // html += `<td><input type='text' data-endpoint='pet.${species}.${color}.loyalty'></td>`;
      // html += `<td><span data-endpoint='pet.${species}.${color}.effect' data-precision='2'></span></td>`;
      html += `</tr>`;
    }
    html += `</table>`;
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
