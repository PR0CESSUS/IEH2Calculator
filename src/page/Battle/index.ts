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

export class PageBattle {
  endpoint = `page.routes[battle].template.database`;
  database = {
    species: 0,
    color: 0,
    challange: 0,
    level: 1,
  };
  constructor() {
    this.database = globalThis.app.database.Connect("battle-simulator", this.database);

    this.Update();
  }
  Update() {
    globalThis.data.battle.monster.level = this.database.level;
    globalThis.data.battle.challengeMonster.level = this.database.level;
    globalThis.data.battle.monster.species = this.database.species;
    if (this.database.species == MonsterSpecies.Mimic) this.database.color = MonsterColor.Normal;
    globalThis.data.battle.monster.color = this.database.color;
    globalThis.data.battle.challengeMonster.challengeMonsterKind = this.database.challange;
  }

  get html() {
    // console.log(str);
    this.Update();
    let html = ``;

    html += `Species: <custom-select data-type="${CustomSelectType.MonsterSpecies}" data-endpoint="${this.endpoint}.species">${this.database.species}</custom-select>`;
    if (this.database.species == MonsterSpecies.ChallengeBoss) {
      html += `Color: <custom-select data-type="${CustomSelectType.ChallengeMonsterKind}" data-endpoint="${this.endpoint}.challange">${this.database.challange}</custom-select>`;
    } else if (this.database.species != MonsterSpecies.Mimic) {
      html += `Color: <custom-select data-type="${CustomSelectType.MonsterColor}" data-endpoint="${this.endpoint}.color">${this.database.color}</custom-select>`;
    }
    html += `Level: <custom-input data-endpoint="${this.endpoint}.level"></custom-input>`;
    html += `<battle-simulator data-species="${this.database.species}"></battle-simulator>`;
    html += `<hero-stat></hero-stat>`;
    return html;
  }
}
