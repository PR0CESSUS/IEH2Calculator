import { MultiplierInfo } from "@/data/Multiplier";
import { Localization } from "@/localization/";
import { GuildSuperAbilityKind } from "@/type/GuildSuperAbilityKind";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { Stats } from "@type/Stats";
import { GuildSuperAbility } from "../GuildSuperAbility";
import { Util } from "@/Util";

export class GSA_Artificing extends GuildSuperAbility {
  get kind() {
    return GuildSuperAbilityKind.Artificing;
  }

  get maxLevel() {
    return 10;
  }

  Cost(level) {
    return 1 + level;
  }

  SetEffect() {
    return this.data.stats.SetEffectStats(Stats.ArtifactProficiencyGain, new MultiplierInfo(MultiplierKind.GuildSuperAbility, MultiplierType.Mul, () => this.currentEffectValue));
  }

  EffectString(level) {
    return Localization.GuildSuperAbility(this.kind, Util.percent(1.0 + this.EffectValue(level))).effect1;
  }

  EffectValue(level) {
    return 0.1 * level;
  }
}
