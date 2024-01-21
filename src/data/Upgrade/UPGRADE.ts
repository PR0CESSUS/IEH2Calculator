import { UpgradeKind } from "./../../type/UpgradeKind";
import { ResourceKind } from "../../type/ResourceKind";
import { SlimeBankUpgradeKind } from "../../type/SlimeBankUpgradeKind";

export class UPGRADE {
  id;

  kind: UpgradeKind;

  get level() {
    switch (this.kind) {
      case UpgradeKind.SlimeBank:
        return globalThis.data.source.upgradeLevelsSlimebank[this.slimebankKind];

      default:
        return 0;
    }
  }

  get resource() {
    return ResourceKind.Stone;
  }

  get slimebankKind() {
    return 0;
  }
  Start() {
    return this.Set();
  }

  Set() {
    // this.unlock = new Unlock();
    // this.level = new UpgradeLevel(this.kind, this.id);
    // this.SetTransaction();
    // this.SetUnlockCondition();
  }

  CostModifier() {
    return (
      (1.0 - +(this.kind != UpgradeKind.SlimeBank) * globalThis.data.upgrade.costReduction.Value()) *
      (1.0 - +(this.kind != UpgradeKind.SlimeBank) * globalThis.data.upgrade.costReductionFromGuildAbility.Value()) *
      (1.0 - +(this.kind != UpgradeKind.SlimeBank) * globalThis.data.upgrade.costReductionFromGuildSuperAbility.Value()) *
      (1.0 - +(this.kind != UpgradeKind.SlimeBank) * globalThis.data.upgrade.costReductionFromMissionMilestone.Value()) *
      (1.0 - globalThis.data.upgrade.costReductionFromWA.Value())
    );
  }

  Cost(level) {
    return level;
  }

  EffectValue(isNextValue = false) {
    return 1.0;
  }

  IsUnlocked() {
    // for (let index = 0; index < this.unlockConditions.length; index++) {
    //   if (!this.unlockConditions[index]())
    //     return false;
    // }
    // return this.unlock.IsUnlocked();
  }

  Name() {
    return "";
  }

  Description() {
    return "";
  }

  SetUnlockCondition() {}
}
