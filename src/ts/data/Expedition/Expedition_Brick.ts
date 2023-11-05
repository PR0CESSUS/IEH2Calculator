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
    globalThis.data.town.townLevelEffectMultipliers[0].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Expedition, MultiplierType.Add, () => this.EffectValue()));
  }
}
