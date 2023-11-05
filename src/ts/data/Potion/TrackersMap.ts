import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
export default class TrackersMap extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.TrackersMap;

  passiveEffectMaxValue = 1.0;
  EffectValue(level) {
    return 0.5 * level;
  }

  PassiveEffectValue(level) {
    return Math.min(this.passiveEffectMaxValue, 0.0001 * level);
  }

  SetPassiveEffect() {
    globalThis.data.area.epicSwarmChanceInsteadOfLarge.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Add, () => this.passiveEffectValue));
  }
  SetEffect(heroKind, equipNum) {
    globalThis.data.area.clearCountBonusClass[heroKind].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Add, () => this.effectValue * equipNum()));
  }
}
