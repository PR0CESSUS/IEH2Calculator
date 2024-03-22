import { ResourceKind } from "@type/ResourceKind";
import { UpgradeKind } from "@type/UpgradeKind";
import { DATA } from "..";
import { UpgradeLevel } from "./UpgradeLevel";
import { SlimeBankUpgradeKind } from "@/type/SlimeBankUpgradeKind";
import { Util } from "@/Util";

export class UPGRADE {
  data: DATA;
  id;
  level: UpgradeLevel;

  constructor(DATA: DATA) {
    this.data = DATA;
    this.level = new UpgradeLevel(this.data, this.kind, () => this.id);
  }

  get kind() {
    return UpgradeKind.BasicStats;
  }

  get resource() {
    return ResourceKind.Leaf;
  }

  get slimebankKind() {
    return SlimeBankUpgradeKind.CritDamage;
  }

  Start() {}

  CostModifier() {
    const isSlimeBank = this.kind != UpgradeKind.SlimeBank ? 1 : 0;
    return (
      (1.0 - isSlimeBank * this.data.upgrade.costReduction.Value()) *
      (1.0 - isSlimeBank * this.data.upgrade.costReductionFromGuildAbility.Value()) *
      (1.0 - isSlimeBank * this.data.upgrade.costReductionFromGuildSuperAbility.Value()) *
      (1.0 - isSlimeBank * this.data.upgrade.costReductionFromMissionMilestone.Value()) *
      (1.0 - this.data.upgrade.costReductionFromWA.Value())
    );
  }

  Cost(level) {
    return level;
  }

  EffectValue(isNextValue = false) {
    return 1.0;
  }

  ResourceKind() {}

  IsUnlocked() {
    return true;
  }

  Name() {
    return "";
  }
  EffectString() {
    return `${Util.tDigit(this.EffectValue())}`;
  }
  SetUnlockCondition() {}
  Description() {
    return "";
  }
}
