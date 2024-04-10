import { Util } from "@/Util";
import { MultiplierInfo } from "@/data/Multiplier";
import { Localization } from "@/localization/";
import { GuildSuperAbilityKind } from "@/type/GuildSuperAbilityKind";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { GuildSuperAbility } from "../GuildSuperAbility";

export class GSA_Racing extends GuildSuperAbility {
  get kind() {
    return GuildSuperAbilityKind.Racing;
  }

  get maxLevel() {
    return 10;
  }

  Cost(level) {
    return 1 + level;
  }

  SetEffect() {
    return this.data.nitro.nitroCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GuildSuperAbility, MultiplierType.Mul, () => this.currentEffectValue));
  }

  EffectString(level) {
    return Localization.GuildSuperAbility(this.kind, Util.percent(1.0 + this.EffectValue(level))).effect1;
  }

  EffectValue(level) {
    return 0.05 * level;
  }
}
