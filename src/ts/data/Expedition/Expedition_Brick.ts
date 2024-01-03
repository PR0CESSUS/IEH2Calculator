import { MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { ExpeditionKind } from "../../type/ExpeditionKind";
import { ExpeditionGlobalInformation } from "./ExpeditionGlobalInformation";

export class Expedition_Brick extends ExpeditionGlobalInformation {
  kind = ExpeditionKind.Brick;

  get passiveEffectValueIncrementPerLevel() {
    return 0.01 * this.expeditionCtrl.passiveEffectMultiplier.Value();
  }

  SetEffect() {
    globalThis.data.town.townLevelEffectMultipliers[0].RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.Expedition, MultiplierType.Add, () => this.EffectValue())
    );
  }
  RewardAmount(expedition, pet, timeHour) {
    return (
      60.0 *
      Math.pow(1.1, this.level) *
      globalThis.data.town.MaxTownMaterialGainMultiplier() *
      (1.0 + 0.5 * pet.rank) *
      Math.max(0.55478474, Math.pow(timeHour, this.expeditionCtrl.rewardModifierPerHour.Value())) *
      expedition.expeditionCtrl.rewardMultiplier.Value()
    );
  }
}
