import { MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { ExpeditionKind } from "../../type/ExpeditionKind";
import { ExpeditionGlobalInformation } from "./ExpeditionGlobalInformation";
export class Expedition_PetExp extends ExpeditionGlobalInformation {
  kind = ExpeditionKind.PetExp;

  get passiveEffectValueIncrementPerLevel() {
    return 0.2 * this.expeditionCtrl.passiveEffectMultiplier.Value() * this.expeditionCtrl.fieldTrainingPassiveEffectMultiplier.Value();
  }

  SetEffect() {
    this.expeditionCtrl.petExpGainMultiplier.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.Expedition, MultiplierType.Mul, () => this.EffectValue())
    );
  }
  RewardAmount(expedition, pet, timeHour) {
    return (
      18000.0 *
      Math.pow(1.2, this.level) *
      (1.0 + 0.1 * expedition.TotalRank()) *
      Math.max(0.55478474, Math.pow(timeHour, this.expeditionCtrl.rewardModifierPerHour.Value())) *
      globalThis.data.stats.MaxPetEXPGainAmongHeroes() *
      this.expeditionCtrl.petExpGainMultiplier.Value() *
      expedition.expeditionCtrl.rewardMultiplier.Value()
    );
  }
}
