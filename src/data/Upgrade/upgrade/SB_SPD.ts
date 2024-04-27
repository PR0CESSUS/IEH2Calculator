import { MultiplierInfo } from "@/data/Multiplier";
import { SLIMEBANK_UPGRADE } from "@/data/upgrade/SLIMEBANK_UPGRADE";
import { BasicStatsKind } from "@type/BasicStatsKind";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { SlimeBankUpgradeKind } from "@type/SlimeBankUpgradeKind";

export class SB_SPD extends SLIMEBANK_UPGRADE {
  Start() {
    this.data.stats.SetEffectBasicStats(BasicStatsKind.SPD, new MultiplierInfo(MultiplierKind.Upgrade, MultiplierType.Add, () => this.EffectValue()));
  }

  get slimebankKind() {
    return SlimeBankUpgradeKind.SPD;
  }

  Cost(level) {
    return 1000.0 * Math.pow(1.1, level);
  }

  EffectValue() {
    let level = this.level.value;
    return 5 * level;
  }

  Name() {
    return "SPD";
  }
}
