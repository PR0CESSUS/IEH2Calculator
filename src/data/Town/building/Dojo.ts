import { BuildingKind } from "@/type/BuildingKind";
import { BUILDING } from "../BUILDING";
import { Stats } from "@/type/Stats";
import { MultiplierInfo } from "@/Data/Multiplier";
import { MultiplierKind } from "@/type/MultiplierKind";
import { MultiplierType } from "@/type/MultiplierType";
import { ResourceKind } from "@/type/ResourceKind";
import { DATA } from "@/Data";
import { Util } from "@/Util";

export class Dojo extends BUILDING {
  constructor(DATA: DATA) {
    super(DATA);
    this.kind = BuildingKind.Dojo;
  }

  EffectValue() {
    return this.Level() * 0.05 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[1].Value();
  }

  SetEffect() {
    this.data.stats.SetEffectStats(Stats.SkillProficiencyGain, new MultiplierInfo(MultiplierKind.Town, MultiplierType.Mul, () => this.EffectValue()));
    //   this.passiveEffectList.push(new BuildingPassiveEffect(this.level, 10, (x => globalThis.data.skill.SetEffectSkillCastSpeedModifier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Mul, (() => 0.1), x))), (() => Localized.localized.BuildingString(136, UsefulMethod.percent(0.1)))));
    //   this.passiveEffectList.push(new BuildingPassiveEffect(this.level, 20, (x => globalThis.data.stats.globalSkillSlotNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Add, (() => 1.0), x))), (() => Localized.localized.BuildingString(135, "1"))));
    //   this.passiveEffectList.push(new BuildingPassiveEffect(this.level, 30, (x => globalThis.data.skill.SetEffectSkillCastSpeedModifier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Mul, (() => 0.2), x))), (() => Localized.localized.BuildingString(136, UsefulMethod.percent(0.2)))));
    // this.passiveEffectList.push(new BuildingPassiveEffect(this.level, 40, (x => globalThis.data.skill.unlockSkillPassivePersist.RegisterCondition(x)), (() => Localized.localized.BuildingString(138))));

    this.data.skill.unlockSkillPassivePersist = () => this.Level() >= 40;

    //   this.passiveEffectList.push(new BuildingPassiveEffect(this.level, 50, (x => globalThis.data.skill.SetEffectSkillCastSpeedModifier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Mul, (() => 0.3), x))), (() => Localized.localized.BuildingString(136, UsefulMethod.percent(0.3)))));
    //   this.passiveEffectList.push(new BuildingPassiveEffect(this.level, 60, (x => globalThis.data.skill.excessSpeedForHitCount.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Add, (() => 0.25), x))), (() => Localized.localized.BuildingString(134, "25%"))));
    //   this.passiveEffectList.push(new BuildingPassiveEffect(this.level, 70, (x => globalThis.data.skill.SetEffectSkillCastSpeedModifier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Mul, (() => 0.4), x))), (() => Localized.localized.BuildingString(136, UsefulMethod.percent(0.4)))));
    //   this.passiveEffectList.push(new BuildingPassiveEffect(this.level, 80, (x => globalThis.data.skill.excessSpeedForHitCount.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Add, (() => 0.25), x))), (() => Localized.localized.BuildingString(137, "50%"))));
    //   this.passiveEffectList.push(new BuildingPassiveEffect(this.level, 90, (x => globalThis.data.skill.SetEffectSkillCastSpeedModifier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Mul, (() => 1.0), x))), (() => Localized.localized.BuildingString(136, UsefulMethod.percent(1.0)))));
    //   this.passiveEffectList.push(new BuildingPassiveEffect(this.level, 100, (x => globalThis.data.skill.excessSpeedForHitCount.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Add, (() => 0.5), x))), (() => Localized.localized.BuildingString(137, "100%"))));
    //   this.passiveRankEffectList.push(new BuildingPassiveEffect(this.rank, 1, (x => globalThis.data.skill.maxRank.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Add, (() => 10.0), x))), (() => Localized.localized.BuildingString(133, "10"))));
    //   this.passiveRankEffectList.push(new BuildingPassiveEffect(this.rank, 2, (x => globalThis.data.skill.maxRank.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Add, (() => 20.0), x))), (() => Localized.localized.BuildingString(133, "20"))));
    //   this.passiveRankEffectList.push(new BuildingPassiveEffect(this.rank, 3, (x => globalThis.data.skill.maxRank.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Add, (() => 30.0), x))), (() => Localized.localized.BuildingString(133, "30"))));
    //   this.passiveRankEffectList.push(new BuildingPassiveEffect(this.rank, 4, (x => globalThis.data.skill.maxRank.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Add, (() => 40.0), x))), (() => Localized.localized.BuildingString(133, "40"))));
    //   this.passiveRankEffectList.push(new BuildingPassiveEffect(this.rank, 5, (x => globalThis.data.skill.maxRank.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Add, (() => 50.0), x))), (() => Localized.localized.BuildingString(133, "50"))));
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
