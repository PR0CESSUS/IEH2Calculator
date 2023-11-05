import { MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { ExpeditionKind } from "../../type/ExpeditionKind";
import { ExpeditionGlobalInformation } from "./ExpeditionGlobalInformation";

export class Expedition_WalkDistance extends ExpeditionGlobalInformation {
  kind = ExpeditionKind.WalkDistance;

  get passiveEffectValueIncrementPerLevel() {
    return 0.05 * this.expeditionCtrl.passiveEffectMultiplier.Value();
  }

  SetEffect() {
    this.expeditionCtrl.walkedDistanceGainMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Expedition, MultiplierType.Add, () => this.EffectValue()));
  }
}
