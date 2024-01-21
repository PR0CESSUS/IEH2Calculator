import { MultiplierInfo } from "../../../Multiplier";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { Stats } from "../../../type/Stats";
import { SLIMEBANK_UPGRADE } from "../SLIMEBANK_UPGRADE";
import { SlimeBankUpgradeKind } from "../../../type/SlimeBankUpgradeKind";

export class SB_CritDamage extends SLIMEBANK_UPGRADE {
  Start() {
    super.Start();
    globalThis.data.stats.SetEffectStats(Stats.CriticalDamage, new MultiplierInfo(MultiplierKind.Upgrade, MultiplierType.Add, () => this.EffectValue(false)));
  }

  get slimebankKind() {
    return SlimeBankUpgradeKind.CritDamage;
  }

  Cost(level) {
    return 50000.0 * Math.pow(1.1, level);
  }

  EffectValue(isNextValue = false) {
    return 0.025 * this.level;
  }
}
