import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { Debuff } from "../../type/Debuff";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
export default class BlazingAuraDraught extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.BlazingAuraDraught;
  SetEffect(heroKind, equipNum) {
    globalThis.data.stats.DebuffChance(heroKind, Debuff.Knockback).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Potion, MultiplierType.Add, () => this.effectValue));
  }

  EffectValue(level) {
    return 0.25 + level * 0.005;
  }

  AlchemyPointGain(level) {
    return 7.0 * globalThis.data.alchemy.alchemyPointGainMultiplier.Value();
  }
}
