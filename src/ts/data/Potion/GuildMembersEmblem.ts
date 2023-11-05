import { PotionKind } from "../../type/PotionKind";
import { Potion } from "./Potion";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
export default class GuildMembersEmblem extends Potion {
  constructor() {
    super();
  }
  kind = PotionKind.GuildMembersEmblem;

  passiveEffectMaxValue = 0.99;
  EffectValue(level) {
    return 0.05 * level;
  }

  PassiveEffectValue(level) {
    return Math.min(this.passiveEffectMaxValue, 0.0001 * level);
  }

  SetPassiveEffect() {
    globalThis.data.guild.expRequirementReduction.RegisterMultiplier(new MultiplierInfo(MultiplierKind.TalismanPassive, MultiplierType.Add, () => this.passiveEffectValue));
  }
  SetEffect(heroKind, equipNum) {
    globalThis.data.stats.heroes[heroKind].guildExpGain.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Talisman, MultiplierType.Mul, () => this.effectValue * equipNum()));
  }
}
