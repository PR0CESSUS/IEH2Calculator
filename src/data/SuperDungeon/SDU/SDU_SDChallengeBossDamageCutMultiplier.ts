import { Enums } from "../../../Enums";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { MultiplierType } from "../../../type/MultiplierType";
import { SuperDungeonUpgradeKind } from "../../../type/SuperDungeonUpgradeKind";
import { SuperDungeonUpgrade } from "../SuperDungeonUpgrade";
import { SDModifierKind } from "../../../type/SDModifierKind";

export class SDU_SDChallengeBossDamageCutMultiplier extends SuperDungeonUpgrade {
  get kind() {
    return SuperDungeonUpgradeKind.SDChallengeBossDamageCutMultiplier;
  }

  Cost(level) {
    return (100 + 100 * level) * Math.pow(2.0, level / 20.0);
  }

  SetEffect() {
    for (let index = 0; index < Enums.HeroKind; index++)
      this.sdgCtrl.data.battles[index].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.SDUpgrade,
          MultiplierType.Mul,
          () => this.EffectValue(),
          () => this.IsActive()
        )
      );
  }

  get maxLevel() {
    return 1000;
  }

  get initEffectValue() {
    return 0.0;
  }

  get incrementEffectValuePerLevel() {
    return 0.025;
  }

  IsActive() {
    return !this.sdgCtrl.data.source.isActiveSdModifiers[950 + SDModifierKind.RemoveSDUpgrade1];
  }
}
