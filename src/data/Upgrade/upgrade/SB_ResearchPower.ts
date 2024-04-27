import { MultiplierInfo } from "@/data/Multiplier";
import { SLIMEBANK_UPGRADE } from "@/data/upgrade/SLIMEBANK_UPGRADE";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { SlimeBankUpgradeKind } from "@type/SlimeBankUpgradeKind";

export class SB_ResearchPower extends SLIMEBANK_UPGRADE {
  Start() {
    for (let index = 0; index < this.data.town.researchPower.length; index++)
      this.data.town.researchPower[index].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Upgrade, MultiplierType.Mul, () => this.EffectValue()));
  }

  get slimebankKind() {
    return SlimeBankUpgradeKind.ResearchPower;
  }

  Cost(level) {
    return 5000.0 * Math.pow(1.25, level);
  }

  EffectValue() {
    let level = this.level.value;
    return level * 0.1;
  }
}
