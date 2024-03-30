import { MultiplierInfo } from "@/Data/Multiplier";
import { Util } from "@/Util";
import { BuildingKind } from "@/type/BuildingKind";
import { MultiplierKind } from "@/type/MultiplierKind";
import { MultiplierType } from "@/type/MultiplierType";
import { ResourceKind } from "@/type/ResourceKind";
import { Stats } from "@/type/Stats";
import { BUILDING } from "../BUILDING";
import { BuildingPassiveEffect } from "../BuildingPassiveEffect";

export class Dojo extends BUILDING {
  get kind() {
    return BuildingKind.Dojo;
  }

  EffectValue() {
    return this.Level() * 0.05 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[1].Value();
  }

  SetEffect() {
    this.data.stats.SetEffectStats(Stats.SkillProficiencyGain, new MultiplierInfo(MultiplierKind.Town, MultiplierType.Mul, () => this.EffectValue()));
    this.passiveEffectList.push(
      new BuildingPassiveEffect(this.level, 10, (x) => this.data.skill.SetEffectSkillCastSpeedModifier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Mul, () => 0.1, x)))
    );

    this.passiveEffectList.push(
      new BuildingPassiveEffect(this.level, 30, (x) => this.data.skill.SetEffectSkillCastSpeedModifier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Mul, () => 0.2, x)))
    );
    this.passiveEffectList.push(new BuildingPassiveEffect(this.level, 20, (x) => this.data.skill.unlockSkillPassivePersist.RegisterCondition(x)));

    this.passiveEffectList.push(
      new BuildingPassiveEffect(this.level, 40, (x) =>
        this.data.stats.globalSkillSlotNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Add, () => 1.0, x))
      )
    );
    this.passiveEffectList.push(
      new BuildingPassiveEffect(this.level, 50, (x) => this.data.skill.SetEffectSkillCastSpeedModifier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Mul, () => 0.3, x)))
    );
    this.passiveEffectList.push(
      new BuildingPassiveEffect(this.level, 60, (x) =>
        this.data.skill.excessSpeedForHitCount.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Add, () => 0.25, x))
      )
    );
    this.passiveEffectList.push(
      new BuildingPassiveEffect(this.level, 70, (x) => this.data.skill.SetEffectSkillCastSpeedModifier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Mul, () => 0.4, x)))
    );
    this.passiveEffectList.push(
      new BuildingPassiveEffect(this.level, 80, (x) =>
        this.data.skill.excessSpeedForHitCount.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Add, () => 0.25, x))
      )
    );
    this.passiveEffectList.push(
      new BuildingPassiveEffect(this.level, 90, (x) => this.data.skill.SetEffectSkillCastSpeedModifier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Mul, () => 1.0, x)))
    );
    this.passiveEffectList.push(
      new BuildingPassiveEffect(this.level, 100, (x) =>
        this.data.skill.excessSpeedForHitCount.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Add, () => 0.5, x))
      )
    );
  }

  SetResearch() {
    this.data.stats.SetEffectStats(
      Stats.ArmoredFury,
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Stone) * 0.01 * this.ResearchMul(0))
    );
    this.data.stats.SetEffectStats(
      Stats.WardedFury,
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Crystal) * 0.01 * this.ResearchMul(1))
    );
    this.data.stats.SetEffectStats(
      Stats.CriticalDamage,
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Leaf) * 0.01 * this.ResearchMul(2))
    );
  }

  ResearchEffectString(kind: ResourceKind) {
    switch (kind) {
      case ResourceKind.Stone:
        return `Multiply Armored Fury by ${Util.percent(this.ResearchLevel(ResourceKind.Stone) * 0.01 * this.ResearchMul(0) + 1)}`;
      case ResourceKind.Crystal:
        return `Multiply Warded Fury by ${Util.percent(this.ResearchLevel(ResourceKind.Crystal) * 0.01 * this.ResearchMul(1) + 1)}`;
      case ResourceKind.Leaf:
        return `Multiply Critical Damage by ${Util.percent(this.ResearchLevel(ResourceKind.Leaf) * 0.01 * this.ResearchMul(2) + 1)}`;
    }
  }
}
