import { Talisman } from "./../../data/Potion/Talisman";
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
import { CustomSelectType } from "../../type/CustomSelectType";
import { MonsterSpecies } from "../../type/MonsterSpecies";
import { MonsterColor } from "../../type/MonsterColor";
import { Localization } from "../../localization";

export class PageTalisman {
  endpoint = `page.routes[talisman].template.database`;
  database = {
    perWA: Array(globalThis.data.potion.talismans.length).fill(0),
  };
  constructor() {
    this.database = globalThis.app.database.Connect("talisman", this.database);

    // this.Update();
  }
  Update() {
    // globalThis.data.battle.monster.level = this.database.level;
    // globalThis.data.battle.challengeMonster.level = this.database.level;
    // globalThis.data.battle.monster.species = this.database.species;
    // if (this.database.species == MonsterSpecies.Mimic) this.database.color = MonsterColor.Normal;
    // globalThis.data.battle.monster.color = this.database.color;
    // globalThis.data.battle.challengeMonster.challengeMonsterKind = this.database.challange;
  }

  get html() {
    let bestEfficiency = 0;
    let bestTalisman;
    let totalFragments = 0;
    this.Update();
    let html = ``;
    html += `<table>`;
    html += `<tr><th>Talisman</th><th>Level</th><th>Cost</th><th>Fragments</th><th>Per WA</th><th>frag / cost</th></tr>`;
    for (let index = 0; index < globalThis.data.potion.talismans.length; index++) {
      const talisman = globalThis.data.potion.talismans[index];
      const localization = Localization.PotionName(talisman.kind);
      const fragments = talisman.talismanDisassembleFragmentNumPerLevel * talisman.level * this.database.perWA[index];
      const cost = talisman.level == 50 ? 0 : talisman.Cost(talisman.level + 1);
      const efficiency = cost ? fragments / cost : 0;
      if (bestEfficiency < efficiency) {
        bestEfficiency = efficiency;
        bestTalisman = localization;
      }
      totalFragments += fragments;
      html += `<tr>`;
      html += `<td>${localization}</td><td><custom-input data-endpoint="data.potion.talismans[${index}].level"></custom-input></td>`;
      html += `<td style="padding-right: 10px;">${cost ? Util.tDigit(cost) : '<span class="orange">MAX</span>'}</td></td>`;
      html += `<td>${fragments}</td></td>`;
      html += `<td><custom-input data-endpoint="${this.endpoint}.perWA[${index}]"></custom-input></td>`;
      html += `<td>${efficiency ? Util.tDigit(efficiency, 5) : 0}</td>`;
      html += `</tr>`;
    }
    html += `</table>`;
    html += `<hr>`;
    html += `<p>Most efficient talisman to level up: <span class="green">${bestTalisman}</span></p>`;
    html += `<p>Total talisman fragments per WA: <span class="green">${Util.tDigit(totalFragments)}</span></p>`;

    // html += `Species: <custom-select data-type="${CustomSelectType.MonsterSpecies}" data-endpoint="${this.endpoint}.species">${this.database.species}</custom-select>`;
    // if (this.database.species == MonsterSpecies.ChallengeBoss) {
    //   html += `Color: <custom-select data-type="${CustomSelectType.ChallengeMonsterKind}" data-endpoint="${this.endpoint}.challange">${this.database.challange}</custom-select>`;
    // } else if (this.database.species != MonsterSpecies.Mimic) {
    //   html += `Color: <custom-select data-type="${CustomSelectType.MonsterColor}" data-endpoint="${this.endpoint}.color">${this.database.color}</custom-select>`;
    // }
    // html += `Level: <custom-input data-endpoint="${this.endpoint}.level"></custom-input>`;
    // html += `<battle-simulator></battle-simulator>`;

    return html;
  }
}
