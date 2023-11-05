import { MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { ExpeditionKind } from "../../type/ExpeditionKind";
import { ExpeditionGlobalInformation } from "./ExpeditionGlobalInformation";

export class Expedition_Shard extends ExpeditionGlobalInformation {
  kind = ExpeditionKind.Shard;

  get passiveEffectValueIncrementPerLevel() {
    return 0.01 * this.expeditionCtrl.passiveEffectMultiplier.Value();
  }

  SetEffect() {
    // console.log(globalThis.data.town);

    globalThis.data.town.townLevelEffectMultipliers[2].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Expedition, MultiplierType.Add, () => this.EffectValue()));
  }
}
