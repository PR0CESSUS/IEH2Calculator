import { Enums } from "../../Enums";
import { RebirthParameter } from "./RebirthParameter";
import { MultiplierInfo, Multiplier } from "../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { HeroKind } from "../../type/HeroKind";
import { Rebirth } from "./Rebirth";
import { DATA } from "..";
export class DataRebirth {
  #data: DATA;
  rebirth = Array(Enums.HeroKind);
  requiredHeroLevelReduction: Multiplier;
  tier1AbilityPointBonusLevelCap: Multiplier;
  tier2AbilityPointBonusLevelCap: Multiplier;

  constructor(DATA: DATA) {
    this.#data = DATA;
    this.requiredHeroLevelReduction = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0),
      () => 100.0,
      () => 0.0
    );
    this.tier1AbilityPointBonusLevelCap = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => RebirthParameter.tierHeroLevel[1]));
    this.tier2AbilityPointBonusLevelCap = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => RebirthParameter.tierHeroLevel[2]));
    for (let index = 0; index < Enums.HeroKind; index++) {
      this.rebirth[index] = [];
      this.rebirth[index][0] = new Rebirth(this.#data, 0, index);
      this.rebirth[index][1] = new Rebirth(this.#data, 1, index);
      this.rebirth[index][2] = new Rebirth(this.#data, 2, index);
    }
  }

  Start() {
    for (let index = 0; index < this.rebirth.length; index++) {
      for (let i = 0; i < this.rebirth[index].length; i++) {
        this.rebirth[index][i].Start();
      }
    }

    // SetRebirthBonuses();
  }

  Rebirth(heroKind: HeroKind, tier) {
    return this.rebirth[heroKind][tier];
  }
  SetPointMultiplier(info: MultiplierInfo) {
    for (let index = 0; index < this.rebirth.length; ++index) {
      this.rebirth[index][0].rebirthPointGainFactor.RegisterMultiplier(info);
      this.rebirth[index][1].rebirthPointGainFactor.RegisterMultiplier(info);
      this.rebirth[index][2].rebirthPointGainFactor.RegisterMultiplier(info);
    }
  }
  get currentHero() {
    return this.rebirth[this.#data.source.currentHero];
  }
}
