import { UpgradeKind } from "./../../type/UpgradeKind";
import { ResourceKind } from "../../type/ResourceKind";
import { SlimeBankUpgradeKind } from "../../type/SlimeBankUpgradeKind";
import { DATA } from "..";
import { Stats } from "../../type/Stats";
import { MultiplierInfo } from "../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";

export class UPGRADE {
  data: DATA;
  id;
  kind: UpgradeKind;
  slimebankKind: SlimeBankUpgradeKind;

  constructor(DATA: DATA, kind: UpgradeKind, slimeBankKind: SlimeBankUpgradeKind = 0) {
    this.data = DATA;
    this.kind = kind;
    this.slimebankKind = slimeBankKind;
  }

  get level() {
    switch (this.kind) {
      case UpgradeKind.SlimeBank:
        return this.data.source.upgradeLevelsSlimebank[this.slimebankKind];

      default:
        return 0;
    }
  }

  get resource() {
    return ResourceKind.Stone;
  }

  Start() {
    switch (this.kind) {
      case UpgradeKind.SlimeBank:
        switch (this.slimebankKind) {
          case SlimeBankUpgradeKind.CritDamage:
            this.data.stats.SetEffectStats(Stats.CriticalDamage, new MultiplierInfo(MultiplierKind.Upgrade, MultiplierType.Add, () => this.EffectValue()));
            break;

          default:
            break;
        }

        break;

      default:
        break;
    }
  }

  Set() {
    // this.unlock = new Unlock();
    // this.level = new UpgradeLevel(this.kind, this.id);
    // this.SetTransaction();
    // this.SetUnlockCondition();
  }

  CostModifier() {
    return (
      (1.0 - +(this.kind != UpgradeKind.SlimeBank) * this.data.upgrade.costReduction.Value()) *
      (1.0 - +(this.kind != UpgradeKind.SlimeBank) * this.data.upgrade.costReductionFromGuildAbility.Value()) *
      (1.0 - +(this.kind != UpgradeKind.SlimeBank) * this.data.upgrade.costReductionFromGuildSuperAbility.Value()) *
      (1.0 - +(this.kind != UpgradeKind.SlimeBank) * this.data.upgrade.costReductionFromMissionMilestone.Value()) *
      (1.0 - this.data.upgrade.costReductionFromWA.Value())
    );
  }

  Cost(level) {
    switch (this.kind) {
      case UpgradeKind.SlimeBank:
        switch (this.slimebankKind) {
          case SlimeBankUpgradeKind.CritDamage:
            return 50000.0 * Math.pow(1.1, level);

          default:
            return 0;
        }

      default:
        return 0;
    }
    return level;
  }

  EffectValue() {
    switch (this.kind) {
      case UpgradeKind.SlimeBank:
        switch (this.slimebankKind) {
          case SlimeBankUpgradeKind.CritDamage:
            return 0.025 * this.level;

          default:
            return 0;
        }

      default:
        return 0;
    }
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
