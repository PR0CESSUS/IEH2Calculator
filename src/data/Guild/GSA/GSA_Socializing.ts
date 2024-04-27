import { Util } from "@/Util";
import { MultiplierInfo } from "@/data/Multiplier";
import { Localization } from "@/localization/";
import { GuildSuperAbilityKind } from "@/type/GuildSuperAbilityKind";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { GuildSuperAbility } from "../GuildSuperAbility";

export class GSA_Socializing extends GuildSuperAbility {
  get kind() {
    return GuildSuperAbilityKind.Socializing;
  }

  get maxLevel() {
    return 10;
  }

  Cost(level) {
    return 1.0;
  }

  SetEffect() {
    return this.data.guild.guildLevelCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GuildSuperAbility, MultiplierType.Add, () => this.currentEffectValue));
  }

  EffectString(level) {
    return Localization.GuildSuperAbility(this.kind, Util.tDigit(this.EffectValue(level))).effect1;
  }

  EffectValue(level) {
    return 20 * level;
  }
}
