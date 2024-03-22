import { MultiplierInfo } from "@/data/Multiplier";
import { SLIMEBANK_UPGRADE } from "@/data/upgrade/SLIMEBANK_UPGRADE";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { SlimeBankUpgradeKind } from "@type/SlimeBankUpgradeKind";

export class SB_SlimeCoinEfficiency extends SLIMEBANK_UPGRADE {
  Start() {
    this.data.resource.slimeCoinEfficiency.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Upgrade, MultiplierType.Add, () => this.EffectValue()));
  }

  get slimebankKind() {
    return SlimeBankUpgradeKind.SlimeCoinEfficiency;
  }

  Cost(level) {
    return 7500.0 * Math.pow(2.0, level);
  }

  EffectValue() {
    let level = this.level.value;
    return 0.0005 + level * 0.00025;
  }
}
