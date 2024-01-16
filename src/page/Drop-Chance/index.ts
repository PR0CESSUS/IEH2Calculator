import { App } from "../../App";
import { BasicStatsKind } from "../../type/BasicStatsKind";
import { PotionKind } from "../../type/PotionKind";
import { HeroKind } from "../../type/HeroKind";
import { ChallengeKind } from "../../type/ChallengeKind";
import { Util } from "../../Util";
import { Equipment } from "../../data/Equipment/Equipment";
import { EquipmentKind } from "../../type/EquipmentKind";
import { Stats } from "../../type/Stats";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { ChallengeMonsterKind } from "../../type/ChallengeMonsterKind";
import { Enums } from "../../Enums";
import { EquipmentEffectKind } from "../../type/EquipmentEffectKind";
import { EquipmentParameter } from "../../data/Equipment/EquipmentParameter";

export class PageDropChance {
  database = {
    level: 0,
    sdchance: 1,
  };

  endpoint = `page.routes[drop-chance].template.database`;
  constructor() {
    this.database = globalThis.app.database.Connect("drop-chance", this.database);
  }
  Initialization() {}

  getChance() {
    const monsterLevel = this.database.level;
    const sdEnchantChance = this.database.sdchance;

    let data: any = [];
    let data2: any = [];
    let list = [];
    // console.log(Enums.EquipmentEffectKind);
    // console.log((25 / 10) * 1 * 60);

    for (let index = 0; index < Enums.EquipmentEffectKind; index++) {
      let kind = index;
      let value = 0;
      if (monsterLevel >= EquipmentParameter.RequiredLevelIncrement(kind, 1)) {
        value = EquipmentParameter.IsAfter(kind) ? sdEnchantChance / EquipmentParameter.RarityFactor(kind) : 10.0 / EquipmentParameter.RarityFactor(kind);
        // if (EquipmentParameter.IsAfter(kind)) data2.push();
        // else data2.push();
      }
      data2.push(value);
      // list.push({ name: EquipmentEffectKind[index], value: EquipmentParameter.RequiredLevelIncrement(kind, 1) });
    }
    // console.log(data2);
    // console.log(list);

    let num = 0;
    for (let index = 0; index < data2.length; index++) {
      num += data2[index];
    }

    for (let index = 0; index < data2.length; index++) {
      data2[index] *= 1 / num;
      data.push({ kind: EquipmentEffectKind[index], chance: data2[index] });
    }

    let str = "<table>";
    let longest = 0;
    data.forEach((element, index) => {
      str += `<tr><td>#${index}</td><td> ${element.kind}</td>`;
      // str += `${element.kind}`;
      // if (element.kind.length <= 8) str += `\t`;

      for (let index = 0; index < 31 - element.kind.length; index++) str += ` `;

      // if (element.kind.length == 16) str += `\t`;
      // // if (element.kind.length <= 16) str += `\t`;
      // if (element.kind.length <= 20) str += `\t`;
      // if (element.kind.length <= 24) str += `\t`;
      // str += `${element.chance}<br>`;
      str += `<td>${Util.convertTo(element.chance, 5, "%")}</td></tr>`;
      // if (index == 79) longest = element.kind.length;
    });
    str += `</>`;

    return str;
  }

  get html() {
    // console.log(str);

    let html = ``;
    html += `Mob Level: <custom-input data-endpoint="${this.endpoint}.level"></custom-input>`;
    html += `SD Enchant Chance: <custom-input data-endpoint="${this.endpoint}.sdchance" data-convert="true" data-precision="1" data-max="2"></custom-input> (value from 1 - 2)`;

    html += this.getChance();

    return html;
  }
}
