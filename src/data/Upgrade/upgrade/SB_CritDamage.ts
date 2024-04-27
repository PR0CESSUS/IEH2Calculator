import { MultiplierInfo } from "@/data/Multiplier";
import { SLIMEBANK_UPGRADE } from "@/data/upgrade/SLIMEBANK_UPGRADE";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { SlimeBankUpgradeKind } from "@type/SlimeBankUpgradeKind";
import { Stats } from "@type/Stats";

export class SB_CritDamage extends SLIMEBANK_UPGRADE {
  Start() {
    this.data.stats.SetEffectStats(Stats.CriticalDamage, new MultiplierInfo(MultiplierKind.Upgrade, MultiplierType.Add, () => this.EffectValue()));
  }

  get slimebankKind() {
    return SlimeBankUpgradeKind.CritDamage;
  }

  Cost(level) {
    return 50000.0 * Math.pow(1.1, level);
  }

  EffectValue() {
    let level = this.level.value;
    return 0.025 * level;
  }
}
