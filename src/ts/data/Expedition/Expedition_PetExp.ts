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
    this.expeditionCtrl.petExpGainMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Expedition, MultiplierType.Mul, () => this.EffectValue()));
  }
}
