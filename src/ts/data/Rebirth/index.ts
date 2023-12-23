import { Enums } from "../../Enums";
import { RebirthParameter } from "./RebirthParameter";
import { MultiplierInfo, Multiplier } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { HeroKind } from "../../type/HeroKind";
import { Rebirth } from "./Rebirth";
import { SetRebirthBonuses } from "./SetRebirthBonuses";
export class DataRebirth {
  isVisitedFavoriteAreaAfterLazyQuestingThisRebirth: boolean[] = Array(Enums.HeroKind);
  rebirth = Array(Enums.HeroKind);
  rebirthList = Array(Enums.HeroKind);
  // unlocks = new Unlock[6];
  requiredHeroLevelReduction = new Multiplier(
    new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0),
    () => 100.0,
    () => 0.0
  );
  tier1AbilityPointBonusLevelCap = new Multiplier(
    new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => RebirthParameter.tierHeroLevel[1])
  );
  tier2AbilityPointBonusLevelCap = new Multiplier(
    new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => RebirthParameter.tierHeroLevel[2])
  );

  constructor() {
    for (let index = 0; index < Enums.HeroKind; index++) {
      this.rebirth[index] = [];
      this.rebirth[index][0] = new Rebirth(this, 0, index);
      this.rebirth[index][1] = new Rebirth(this, 1, index);
      this.rebirth[index][2] = new Rebirth(this, 2, index);
    }
  }

  Start() {
    SetRebirthBonuses();
  }

  Rebirth(heroKind: HeroKind, tier) {
    return this.rebirth[heroKind][tier];
  }
}
