import { UPGRADE } from "@/data/upgrade/UPGRADE";
import { UpgradeKind } from "@type/UpgradeKind";

export class ExpGainUpgrade extends UPGRADE {
  get kind() {
    return UpgradeKind.ExpGain;
  }

  EffectValue() {
    let level = this.level.value;
    return level * 20 * this.data.upgrade.statsMultiplier.Value();
  }

  Name(): string {
    return "Stats [EXP Gain]";
  }
}
