import { MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { ExpeditionKind } from "../../type/ExpeditionKind";
import { ExpeditionGlobalInformation } from "./ExpeditionGlobalInformation";
import { HeroKind } from "../../type/HeroKind";

export class Expedition_WalkDistance extends ExpeditionGlobalInformation {
  kind = ExpeditionKind.WalkDistance;

  get passiveEffectValueIncrementPerLevel() {
    return 0.05 * this.expeditionCtrl.passiveEffectMultiplier.Value();
  }

  SetEffect() {
    this.expeditionCtrl.walkedDistanceGainMultiplier.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.Expedition, MultiplierType.Add, () => this.EffectValue())
    );
  }

  RewardAmount(expedition, pet, timeHour) {
    return (
      1800.0 *
      pet.globalInfo.MoveSpeed(0, 0.0, false, HeroKind.Warrior) *
      Math.pow(1.2, this.level) *
      (1.0 + 0.1 * expedition.TotalRank()) *
      Math.max(0.55478474, Math.pow(timeHour, this.expeditionCtrl.rewardModifierPerHour.Value())) *
      expedition.expeditionCtrl.rewardMultiplier.Value()
    );
  }
}
