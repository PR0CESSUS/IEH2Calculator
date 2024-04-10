import { Util } from "@/Util";
import { MultiplierInfo } from "@/data/Multiplier";
import { Localization } from "@/localization/";
import { GuildSuperAbilityKind } from "@/type/GuildSuperAbilityKind";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { GuildSuperAbility } from "../GuildSuperAbility";

export class GSA_SuperTrapping extends GuildSuperAbility {
  get kind() {
    return GuildSuperAbilityKind.SuperTrapping;
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
    this.data.monster.SetEffectTripleCaptureChance(new MultiplierInfo(MultiplierKind.GuildSuperAbility, MultiplierType.Add, () => this.currentEffectValue));
    // this.guildCtrl.Ability(GuildAbilityKind.Trapping).levelCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.SuperAbility, MultiplierType.Add, (() => this.currentLevelCapIncrement)));
  }

  EffectString(level) {
    return Localization.GuildSuperAbility(this.kind, Util.percent(this.EffectValue(level))).effect1;
  }

  EffectValue(level) {
    return level * 0.1;
  }
}
