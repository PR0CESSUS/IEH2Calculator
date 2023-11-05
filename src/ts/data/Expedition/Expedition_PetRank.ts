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
    globalThis.data.stats.SetEffectStats(Stats.TamingPointGain, new MultiplierInfo(MultiplierKind.Expedition, MultiplierType.Mul, () => this.EffectValue()));
  }
}
