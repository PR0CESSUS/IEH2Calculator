import { SkillPassiveEffect } from "../../SkillPassiveEffect";
import { SKILL } from "../../SKILL";
import { MultiplierType } from "../../../../type/MultiplierType";
import { HeroKind } from "../../../../type/HeroKind";
import { BasicStatsKind } from "../../../../type/BasicStatsKind";
import { Stats } from "../../../../type/Stats";
import { SkillType } from "../../../../type/SkillType";
import { SkillPassiveEffectKind } from "../../../../type/SkillPassiveEffectKind";

export class RushOrder extends SKILL {
  tempMul;

  isTry;

  constructor(data, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 10, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 20, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 30, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Mul, 0.05));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 40, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Mul, 0.05));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 60, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 70, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 80, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Mul, 0.15));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 90, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Mul, 0.15));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 110, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Mul, 0.2));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 120, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Mul, 0.2));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 130, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Mul, 0.25));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 140, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Mul, 0.25));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 175, SkillPassiveEffectKind.HeroStats, Stats.MoveSpeed, MultiplierType.Mul, 0.05));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 225, SkillPassiveEffectKind.BasicStats, BasicStatsKind.MATK, MultiplierType.Mul, 0.5));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 250, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Mul, 0.5));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 500, SkillPassiveEffectKind.HeroStats, Stats.SkillProficiencyGain, MultiplierType.Add, 1.0));
  }

  get type() {
    return SkillType.Order;
  }

  EffectValue() {
    this.tempMul = this.level < 200 ? (this.level < 150 ? (this.level < 100 ? (this.level < 50 ? 1.0 : 2.0) : 4.0) : 8.0) : 16.0;
    let num = this.Damage() * this.tempMul;
    if (this.isLog && num >= 1.0) num = 1.0 + Math.log10(num * 100.0) / 100.0;
    return num;
  }
}
