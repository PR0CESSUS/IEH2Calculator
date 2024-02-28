import { SkillPassiveEffect } from "../../SkillPassiveEffect";
import { SKILL } from "../../SKILL";
import { Debuff } from "../../../../type/Debuff";
import { MultiplierType } from "../../../../type/MultiplierType";
import { HeroKind } from "../../../../type/HeroKind";
import { BasicStatsKind } from "../../../../type/BasicStatsKind";
import { Stats } from "../../../../type/Stats";
import { SkillPassiveEffectKind } from "../../../../type/SkillPassiveEffectKind";

export class SwingDown extends SKILL {
  constructor(data, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 10, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Add, 5.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 20, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Add, 10.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 30, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Add, 20.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 40, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Add, 30.0));

    this.passiveEffectLists.push(new SkillPassiveEffect(this, 75, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Add, 50.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 100, SkillPassiveEffectKind.HeroStats, Stats.ExpGain, MultiplierType.Add, 0.5));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 125, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Mul, 0.1));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 150, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Mul, 0.25));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 175, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Mul, 0.5));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 200, SkillPassiveEffectKind.HeroStats, Stats.ExpGain, MultiplierType.Add, 1.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 225, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Add, 100.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 250, SkillPassiveEffectKind.BasicStats, BasicStatsKind.ATK, MultiplierType.Mul, 1.0));
    this.passiveEffectLists.push(new SkillPassiveEffect(this, 500, SkillPassiveEffectKind.HeroStats, Stats.SkillProficiencyGain, MultiplierType.Add, 1.0));
  }

  get debuff() {
    return Debuff.AtkDown;
  }

  ConsumeMp() {
    return this.level >= 50 ? this.ConsumeMp() * 0.5 : this.ConsumeMp();
  }
}
