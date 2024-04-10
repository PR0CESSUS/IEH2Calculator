import { Enums } from "@/Enums";
import { Util } from "@/Util";
import { MultiplierInfo } from "@/data/Multiplier";
import { Localization } from "@/localization/";
import { GuildSuperAbilityKind } from "@/type/GuildSuperAbilityKind";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { GuildSuperAbility } from "../GuildSuperAbility";

export class GSA_Finding extends GuildSuperAbility {
  get kind() {
    return GuildSuperAbilityKind.Finding;
  }

  get maxLevel() {
    return 10;
  }

  Cost(level) {
    return 1 + level;
  }

  SetEffect() {
    for (let index = 0; index < Enums.HeroKind; index++) {
      this.data.stats.MaterialLootGain(index).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Guild, MultiplierType.Mul, () => this.currentEffectValue));
    }
  }

  EffectString(level) {
    return Localization.GuildSuperAbility(this.kind, Util.percent(1.0 + this.EffectValue(level))).effect1;
  }

  EffectValue(level) {
    return 0.25 * level;
  }
}
