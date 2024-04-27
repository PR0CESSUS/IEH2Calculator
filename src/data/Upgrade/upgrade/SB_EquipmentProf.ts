import { MultiplierInfo } from "@/data/Multiplier";
import { SLIMEBANK_UPGRADE } from "@/data/upgrade/SLIMEBANK_UPGRADE";
import { Localization } from "@/localization/";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { SlimeBankUpgradeKind } from "@type/SlimeBankUpgradeKind";
import { Stats } from "@type/Stats";

export class SB_EquipmentProf extends SLIMEBANK_UPGRADE {
  Start() {
    this.data.stats.SetEffectStats(Stats.EquipmentProficiencyGain, new MultiplierInfo(MultiplierKind.Upgrade, MultiplierType.Add, () => this.EffectValue()));
  }

  get slimebankKind() {
    return SlimeBankUpgradeKind.EquipmentProf;
  }

  Cost(level) {
    return 10000.0 * Math.pow(1.2, level);
  }

  EffectValue() {
    let level = this.level.value;
    return level * 0.05;
  }

  Name() {
    return Localization.Stat(Stats.EquipmentProficiencyGain);
  }
}
