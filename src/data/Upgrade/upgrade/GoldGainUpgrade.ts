import { UPGRADE } from "@/data/upgrade/UPGRADE";
import { UpgradeKind } from "@type/UpgradeKind";

export class GoldGainUpgrade extends UPGRADE {
  //   get resource() {return this.data.resource.gold;}

  get kind() {
    return UpgradeKind.GoldGain;
  }

  Cost(level) {
    return 200.0 * Math.pow(1.5, level);
  }

  EffectValue() {
    let level = this.level.value;
    return level * this.data.upgrade.statsMultiplier.Value();
  }

  Name(): string {
    return "Stats [Gold Gain]";
  }
}
