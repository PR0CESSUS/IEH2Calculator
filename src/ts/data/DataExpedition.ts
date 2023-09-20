import { expeditionKind, ExpeditionKind } from "../type/ExpeditionKind";
import { DataType } from "../type/DataType";
import { monsterSpecies, monsterColor, MonsterKind, MonsterColor, petPassiveEffect } from "../type/MonsterKind";

export class DataExpedition implements ExpeditionKind {
  data: DataType;
  Equipment;
  Brick;
  Shard;
  Log;
  WalkDistance;
  PetExp;
  PetRank;

  // totalLevel = 0;
  constructor(data: DataType) {
    this.data = data;
    // console.log(data);
    const passiveEffectValueIncrementPerLevel = [0.01, 0.01, 0.01, 0.05, 0.02, 0.2, 0.05];
    let passiveEffectMultiplier = 1;
    if (this.totalLevel >= 200) passiveEffectMultiplier += 0.25;
    if (this.totalLevel >= 250) passiveEffectMultiplier += 0.25;

    for (let index = 0; index < expeditionKind.length; index++) {
      const name = expeditionKind[index];
      this[name] = {
        get level() {
          return data.source.expeditionLevels[index];
        },
        set level(value) {
          data.source.expeditionLevels[index] = value;
        },
        // level: data.source.expeditionLevels[index],
        get effect() {
          return data.source.expeditionLevels[index] * passiveEffectValueIncrementPerLevel[index] * passiveEffectMultiplier;
        },
      };
    }
    // console.log(this.getHtml());

    // console.log(this);
  }

  get teams() {
    let team = Array(10).fill(0);

    for (let index = 0; index < this.data.source.expeditionPetIsSet.length; index++) {
      const pet = this.data.source.expeditionPetIsSet[index];
      if (pet) {
        const species = monsterSpecies[this.data.source.expeditionPetSpecies[index]];
        const color = monsterColor[this.data.source.expeditionPetColors[index]];
        // console.log(pet, species, color);
        if (this.data.pet[species][color].team > 0) {
          team[this.data.pet[species][color].team - 1] += this.data.pet[species][color].level;
        }
      }
    }

    return team;
  }

  get totalLevel() {
    return this.data.source.expeditionLevels.reduce((a, b) => a + b, 0);
  }

  html() {
    let html = "";
    html += `<table>  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Level</th>
      <th scope="col">Effect</th>
    </tr>
  </thead>`;

    for (let index = 0; index < expeditionKind.length; index++) {
      const name = expeditionKind[index];
      html += `<tr><td>${name}</td><td><input type='text' data-endpoint='expedition.${name}.level'></td>`;
      html += `<td><span data-endpoint='expedition.${name}.effect' data-precision='2'></span></td></tr>`;
    }

    html += "</table>";
    html += "<hr>";
    html += `totalLevel: <span data-endpoint='expedition.totalLevel' data-precision='0'></span>`;
    html += "<hr>";

    for (let index = 0; index < this.teams.length; index++) {
      html += `Team${index} <span data-endpoint='expedition.teams[${index}]'></span><br>`;
      // html += `a <span data-endpoint='expedition.teams'></span><br>`;
    }

    return html;
  }
}
