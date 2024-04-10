import { Util } from "@/Util";
import { MultiplierInfo } from "@/data/Multiplier";
import { Localization } from "@/localization/";
import { GuildSuperAbilityKind } from "@/type/GuildSuperAbilityKind";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { GuildSuperAbility } from "../GuildSuperAbility";

export class GSA_SuperBanking extends GuildSuperAbility {
  get kind() {
    return GuildSuperAbilityKind.SuperBanking;
  }

  get isIncreaseLevelCap() {
    return true;
  }

  get maxLevel() {
    return 10;
  }

  Cost(level) {
    return 1 + level;
  }

  SetEffect() {
    this.data.resource.goldCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GuildSuperAbility, MultiplierType.Mul, () => this.currentEffectValue));
    // this.guildCtrl.Ability(GuildAbilityKind.GoldCap).levelCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.SuperAbility, MultiplierType.Add, (() => this.currentLevelCapIncrement)));
  }

  EffectString(level) {
    return Localization.GuildSuperAbility(this.kind, Util.percent(1.0 + this.EffectValue(level))).effect1;
  }

  EffectValue(level) {
    return level * 0.1;
  }
}
