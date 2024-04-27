import { Util } from "@/Util";
import { MultiplierInfo } from "@/data/Multiplier";
import { Localization } from "@/localization/";
import { GuildSuperAbilityKind } from "@/type/GuildSuperAbilityKind";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { GuildSuperAbility } from "../GuildSuperAbility";

export class GSA_SuperFinancing extends GuildSuperAbility {
  get kind() {
    return GuildSuperAbilityKind.SuperFinancing;
  }

  get isIncreaseLevelCap() {
    return true;
  }

  get maxLevel() {
    return 5;
  }

  Cost(level) {
    return 1 + level;
  }

  SetEffect() {
    this.data.upgrade.costReductionFromGuildSuperAbility.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.GuildSuperAbility, MultiplierType.Add, () => this.currentEffectValue)
    );
    // this.guildCtrl.Ability(GuildAbilityKind.UpgradeCost).levelCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.SuperAbility, MultiplierType.Add, (() => this.currentLevelCapIncrement)));
  }

  EffectString(level) {
    return Localization.GuildSuperAbility(this.kind, Util.percent(this.EffectValue(level))).effect1;
  }

  EffectValue(level) {
    return level * 0.1;
  }
}
