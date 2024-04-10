import { MultiplierInfo } from "@/data/Multiplier";
import { Util } from "@/Util";
import { Localization } from "@/localization/";
import { MultiplierType } from "@type/MultiplierType";
import { MultiplierKind } from "@type/MultiplierKind";

import { GuildSuperAbility } from "../GuildSuperAbility";
import { GuildSuperAbilityKind } from "@/type/GuildSuperAbilityKind";

export class GSA_Haggling extends GuildSuperAbility {
  get kind() {
    return GuildSuperAbilityKind.Haggling;
  }

  get maxLevel() {
    return 10;
  }

  Cost(level) {
    return 2.0;
  }

  SetEffect() {
    return this.data.sdg.upgradeCtrl.costReduction.RegisterMultiplier(new MultiplierInfo(MultiplierKind.GuildSuperAbility, MultiplierType.Add, () => this.currentEffectValue));
  }

  EffectString(level) {
    return Localization.GuildSuperAbility(this.kind, Util.percent(this.EffectValue(level))).effect1;
  }

  EffectValue(level) {
    return 0.075 * level;
  }
}
