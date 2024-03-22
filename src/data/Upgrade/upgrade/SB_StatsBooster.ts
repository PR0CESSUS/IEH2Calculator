import { MultiplierInfo } from "@/data/Multiplier";
import { SLIMEBANK_UPGRADE } from "@/data/upgrade/SLIMEBANK_UPGRADE";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { SlimeBankUpgradeKind } from "@type/SlimeBankUpgradeKind";

export class SB_StatsBooster extends SLIMEBANK_UPGRADE {
  Start() {
    this.data.upgrade.statsMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Upgrade, MultiplierType.Add, () => this.EffectValue()));
  }

  get slimebankKind() {
    return SlimeBankUpgradeKind.StatsBooster;
  }

  Cost(level) {
    return 1000.0 * Math.pow(1.5, level);
  }

  EffectValue() {
    let level = this.level.value;
    return level * 0.2;
  }
}
