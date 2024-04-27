import { MultiplierInfo } from "@/data/Multiplier";
import { SLIMEBANK_UPGRADE } from "@/data/upgrade/SLIMEBANK_UPGRADE";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { SlimeBankUpgradeKind } from "@type/SlimeBankUpgradeKind";

export class SB_ResourceBooster extends SLIMEBANK_UPGRADE {
  Start() {
    this.data.upgrade.resourceMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Upgrade, MultiplierType.Add, () => this.EffectValue()));
  }

  get slimebankKind() {
    return SlimeBankUpgradeKind.ResourceBooster;
  }

  Cost(level) {
    return 500.0 * Math.pow(1.2, level);
  }

  EffectValue() {
    let level = this.level.value;
    return level * 0.25;
  }
}
