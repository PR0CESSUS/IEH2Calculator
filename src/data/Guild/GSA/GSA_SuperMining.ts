import { Util } from "@/Util";
import { MultiplierInfo } from "@/data/Multiplier";
import { Localization } from "@/localization/";
import { GuildSuperAbilityKind } from "@/type/GuildSuperAbilityKind";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { GuildSuperAbility } from "../GuildSuperAbility";

export class GSA_SuperMining extends GuildSuperAbility {
  get kind() {
    return GuildSuperAbilityKind.SuperMining;
  }

  get isIncreaseLevelCap() {
    return true;
  }

  get maxLevel() {
    return 20;
  }

  Cost(level) {
    return 1.0;
  }

  SetEffect() {
    this.data.stats.globalStats[1].RegisterMultiplier(new MultiplierInfo(MultiplierKind.GuildSuperAbility, MultiplierType.Mul, () => this.currentEffectValue));
    // this.guildCtrl.Ability(GuildAbilityKind.StoneGain).levelCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.SuperAbility, MultiplierType.Add, (() => this.currentLevelCapIncrement)));
  }

  EffectString(level) {
    return Localization.GuildSuperAbility(this.kind, Util.percent(1.0 + this.EffectValue(level))).effect1;
  }

  EffectValue(level) {
    return Math.pow(2.0, level) - 1.0;
  }
}
