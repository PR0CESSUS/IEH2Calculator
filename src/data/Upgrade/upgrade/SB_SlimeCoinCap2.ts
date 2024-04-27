import { MultiplierInfo } from "@/data/Multiplier";
import { SLIMEBANK_UPGRADE } from "@/data/upgrade/SLIMEBANK_UPGRADE";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { SlimeBankUpgradeKind } from "@type/SlimeBankUpgradeKind";

export class SB_SlimeCoinCap2 extends SLIMEBANK_UPGRADE {
  Start() {
    this.data.resource.slimeCoinCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Upgrade, MultiplierType.Mul, () => this.EffectValue()));
  }

  get slimebankKind() {
    return SlimeBankUpgradeKind.SlimeCoinCap2;
  }

  Cost(level) {
    return 10000000000.0 * Math.pow(2.0, level);
  }

  EffectValue() {
    let level = this.level.value;
    return 0.1 * Math.pow(level, 2.0);
  }
}
