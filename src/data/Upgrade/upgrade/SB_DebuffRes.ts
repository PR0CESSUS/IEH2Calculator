import { MultiplierInfo } from "@/data/Multiplier";
import { SLIMEBANK_UPGRADE } from "@/data/upgrade/SLIMEBANK_UPGRADE";
import { Localization } from "@/localization/";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { SlimeBankUpgradeKind } from "@type/SlimeBankUpgradeKind";
import { Stats } from "@type/Stats";

export class SB_DebuffRes extends SLIMEBANK_UPGRADE {
  Start() {
    this.data.stats.SetEffectStats(Stats.DebuffRes, new MultiplierInfo(MultiplierKind.Upgrade, MultiplierType.Add, () => this.EffectValue()));
  }

  get slimebankKind() {
    return SlimeBankUpgradeKind.DebuffRes;
  }

  Cost(level) {
    return 4000.0 * Math.pow(1.25, level);
  }

  EffectValue() {
    let level = this.level.value;
    return level * (1.0 / 400.0);
  }

  Name() {
    return Localization.Stat(Stats.DebuffRes);
  }
}
