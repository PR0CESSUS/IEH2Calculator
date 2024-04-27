import { MultiplierInfo } from "@/data/Multiplier";
import { SLIMEBANK_UPGRADE } from "@/data/upgrade/SLIMEBANK_UPGRADE";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { SlimeBankUpgradeKind } from "@type/SlimeBankUpgradeKind";

export class SB_ShopTimer extends SLIMEBANK_UPGRADE {
  Start() {
    this.level.maxValue = () => 118;
    this.data.shop.restockTimesec.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Upgrade, MultiplierType.Add, () => -this.EffectValue()));
  }

  get slimebankKind() {
    return SlimeBankUpgradeKind.ShopTimer;
  }

  Cost(level) {
    return 10000.0 * Math.pow(1.2, level);
  }

  EffectValue() {
    let level = this.level.value;
    return Math.min(590, level * 5);
  }
}
