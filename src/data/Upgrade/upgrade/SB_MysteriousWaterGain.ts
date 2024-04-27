import { MultiplierInfo } from "@/data/Multiplier";
import { SLIMEBANK_UPGRADE } from "@/data/upgrade/SLIMEBANK_UPGRADE";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { SlimeBankUpgradeKind } from "@type/SlimeBankUpgradeKind";

export class SB_MysteriousWaterGain extends SLIMEBANK_UPGRADE {
  Start() {
    this.data.alchemy.mysteriousWaterProductionPerSec.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Upgrade, MultiplierType.Add, () => this.EffectValue()));
  }

  get slimebankKind() {
    return SlimeBankUpgradeKind.MysteriousWaterGain;
  }

  Cost(level) {
    return 2000.0 * Math.pow(1.25, level);
  }

  EffectValue() {
    let level = this.level.value;
    return level * 0.002;
  }
}
