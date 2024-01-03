import { MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { ExpeditionKind } from "../../type/ExpeditionKind";
import { Stats } from "../../type/Stats";
import { ExpeditionGlobalInformation } from "./ExpeditionGlobalInformation";
export class Expedition_PetRank extends ExpeditionGlobalInformation {
  kind = ExpeditionKind.PetRank;

  get passiveEffectValueIncrementPerLevel() {
    return 0.05 * this.expeditionCtrl.passiveEffectMultiplier.Value();
  }

  SetEffect() {
    globalThis.data.stats.SetEffectStats(
      Stats.TamingPointGain,
      new MultiplierInfo(MultiplierKind.Expedition, MultiplierType.Mul, () => this.EffectValue())
    );
  }
  RewardAmount(expedition, pet, timeHour) {
    return (
      4.0 *
      globalThis.data.stats.MaxTPGAmongHeroes() *
      Math.pow(1.1, this.level) *
      (1.0 + 0.1 * pet.rank) *
      Math.max(0.55478474, Math.pow(timeHour, globalThis.data.expedition.rewardModifierPerHour.Value())) *
      globalThis.data.expedition.rewardMultiplier.Value()
    );
  }
}
