import { MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { ExpeditionKind } from "../../type/ExpeditionKind";
import { Stats } from "../../type/Stats";
import { ExpeditionGlobalInformation } from "./ExpeditionGlobalInformation";
export class Expedition_Equipment extends ExpeditionGlobalInformation {
  kind = ExpeditionKind.Equipment;

  get passiveEffectValueIncrementPerLevel() {
    return 0.02 * this.expeditionCtrl.passiveEffectMultiplier.Value();
  }

  SetEffect() {
    globalThis.data.stats.SetEffectStats(
      Stats.EquipmentProficiencyGain,
      new MultiplierInfo(MultiplierKind.Expedition, MultiplierType.Mul, () => this.EffectValue())
    );
  }
  RewardAmount(expedition, pet, timeHour) {
    return (
      1200.0 *
      (1.0 + 0.1 * this.level) *
      (1.0 + 0.05 * pet.rank.value) *
      Math.max(0.55478474, Math.pow(timeHour, this.expeditionCtrl.rewardModifierPerHour.Value())) *
      expedition.expeditionCtrl.rewardMultiplier.Value()
    );
  }
}
