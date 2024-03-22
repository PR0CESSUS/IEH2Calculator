import { MultiplierInfo } from "@/data/Multiplier";
import { SLIMEBANK_UPGRADE } from "@/data/upgrade/SLIMEBANK_UPGRADE";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { SlimeBankUpgradeKind } from "@type/SlimeBankUpgradeKind";

export class SB_UpgradeCostReduction extends SLIMEBANK_UPGRADE {
  Start() {
    this.data.upgrade.costReduction.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Upgrade, MultiplierType.Add, () => this.EffectValue()));
  }

  get slimebankKind() {
    return SlimeBankUpgradeKind.UpgradeCostReduction;
  }

  Cost(level) {
    return 100.0 * Math.pow(1.35, level);
  }

  EffectValue() {
    let level = this.level.value;
    return level * (1.0 / 400.0);
  }
}
