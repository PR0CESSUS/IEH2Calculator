import { MultiplierInfo } from "@/data/Multiplier";
import { SLIMEBANK_UPGRADE } from "@/data/upgrade/SLIMEBANK_UPGRADE";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { SlimeBankUpgradeKind } from "@type/SlimeBankUpgradeKind";

export class SB_SlimeCoinCap extends SLIMEBANK_UPGRADE {
  Start() {
    this.data.resource.slimeCoinCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Upgrade, MultiplierType.Add, () => this.EffectValue()));
  }

  get slimebankKind() {
    return SlimeBankUpgradeKind.SlimeCoinCap;
  }

  InitCost() {
    if (this.level.value >= 500000000000000.0) return 1e27 * this.CostModifier();
    if (this.level.value >= 100000000000000.0) return 1e26 * this.CostModifier();
    if (this.level.value >= 50000000000000.0) return 1e25 * this.CostModifier();
    if (this.level.value >= 10000000000000.0) return 1e24 * this.CostModifier();
    if (this.level.value >= 5000000000000.0) return 1e23 * this.CostModifier();
    if (this.level.value >= 1000000000000.0) return 1e22 * this.CostModifier();
    if (this.level.value >= 500000000000.0) return 1e21 * this.CostModifier();
    if (this.level.value >= 100000000000.0) return 1e20 * this.CostModifier();
    if (this.level.value >= 50000000000.0) return 1e19 * this.CostModifier();
    if (this.level.value >= 10000000000.0) return 1e18 * this.CostModifier();
    if (this.level.value >= 5000000000.0) return 1e17 * this.CostModifier();
    if (this.level.value >= 1000000000.0) return 1e16 * this.CostModifier();
    if (this.level.value >= 500000000.0) return 1e15 * this.CostModifier();
    if (this.level.value >= 100000000.0) return 100000000000000.0 * this.CostModifier();
    if (this.level.value >= 50000000.0) return 10000000000000.0 * this.CostModifier();
    return this.level.value >= 10000000.0 ? 1000000000000.0 * this.CostModifier() : 10000.0 * this.CostModifier();
  }

  BaseCost() {
    return this.level.value >= 10000000.0 ? 0.0 : 10000.0 * this.CostModifier();
  }

  EffectValue() {
    let level = this.level.value;
    return 10000.0 + 10000.0 * level + 10.0 * Math.pow(level, 2.0);
  }
}
