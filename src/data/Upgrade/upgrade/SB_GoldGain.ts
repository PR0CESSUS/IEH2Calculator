import { MultiplierInfo } from "@/data/Multiplier";
import { SLIMEBANK_UPGRADE } from "@/data/upgrade/SLIMEBANK_UPGRADE";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { SlimeBankUpgradeKind } from "@type/SlimeBankUpgradeKind";

export class SB_GoldGain extends SLIMEBANK_UPGRADE {
  Start() {
    this.data.stats.GoldGain().RegisterMultiplier(new MultiplierInfo(MultiplierKind.Upgrade, MultiplierType.Mul, () => this.EffectValue()));
  }

  get slimebankKind() {
    return SlimeBankUpgradeKind.GoldGain;
  }

  Cost(level) {
    return 100.0 * Math.pow(1.1, level);
  }

  EffectValue() {
    let level = this.level.value;
    return level * 0.01;
  }
}
